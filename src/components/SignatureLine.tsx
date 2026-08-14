import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

function SignatureLine({
  className,
  variant = "wave",
}: {
  className?: string;
  variant?: "wave" | "straight";
}) {
  const shouldReduceMotion = useReducedMotion();

  const path =
    variant === "wave"
      ? "M2 20 C 60 2, 120 38, 180 20 S 300 2, 358 20"
      : "M2 12 L 358 12";

  return (
    <svg
      viewBox="0 0 360 24"
      className={cn("h-6 w-full max-w-[220px] text-primary-blue", className)}
      aria-hidden="true"
      fill="none"
    >
      <motion.path
        d={path}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </svg>
  );
}

export { SignatureLine };
