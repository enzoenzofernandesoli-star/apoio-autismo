import { useRef, useState, useEffect, type ReactNode } from "react";
import { useScroll, useTransform, useReducedMotion, motion, type MotionValue } from "framer-motion";

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: string | ReactNode;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = (): [number, number] => (isMobile ? [0.85, 1] : [1.05, 1]);

  const rotate = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -60]);

  return (
    <div
      className="relative flex h-[55rem] items-center justify-center p-2 md:h-[68rem] md:p-20"
      ref={containerRef}
    >
      <div className="relative w-full py-10 md:py-32" style={{ perspective: "1200px" }}>
        <Header translate={translate}>{titleComponent}</Header>
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
}

function Header({ translate, children }: { translate: MotionValue<number>; children: ReactNode }) {
  return (
    <motion.div style={{ translateY: translate }} className="mx-auto max-w-2xl text-center">
      {children}
    </motion.div>
  );
}

function Card({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="relative mx-auto mt-4 w-[300px] rounded-[3rem] border-[12px] border-text-dark bg-text-dark p-2 md:mt-2 md:w-[340px]"
    >
      <div
        className="absolute left-1/2 top-2 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-text-dark"
        aria-hidden="true"
      />
      <div className="h-[560px] w-full overflow-hidden rounded-[2.25rem] bg-bg-light md:h-[620px]">
        {children}
      </div>
    </motion.div>
  );
}
