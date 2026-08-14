import { useRef, type ElementType, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

function MovingBorder({
  children,
  duration = 2500,
  rx,
  ry,
}: {
  children: ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  useAnimationFrame((time) => {
    if (shouldReduceMotion) return;
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x ?? 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y ?? 0);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  if (shouldReduceMotion) return null;

  return (
    <>
      <svg
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}>
        {children}
      </motion.div>
    </>
  );
}

function GlowButton({
  children,
  as,
  className,
  containerClassName,
  duration = 2500,
  ...props
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  containerClassName?: string;
  duration?: number;
  [key: string]: unknown;
}) {
  const Component = as ?? "button";

  return (
    <Component
      className={cn("relative overflow-hidden rounded-full p-[1.5px]", containerClassName)}
      {...props}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <MovingBorder duration={duration} rx="50%" ry="50%">
          <div className="size-14 bg-[radial-gradient(var(--color-accent-cyan)_40%,transparent_70%)] opacity-70" />
        </MovingBorder>
      </span>

      <span
        className={cn(
          "relative flex h-12 items-center justify-center gap-2 rounded-full bg-primary-blue px-6 text-sm font-bold text-text-light shadow-lg shadow-primary-blue/25",
          "lg:h-14 lg:px-8 lg:text-base",
          className,
        )}
      >
        {children}
      </span>
    </Component>
  );
}

export { GlowButton, MovingBorder };
