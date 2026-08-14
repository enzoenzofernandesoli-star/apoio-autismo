import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";

function useCountUp(to: number, options?: { duration?: number; decimals?: number }) {
  const { duration = 1.4, decimals = 0 } = options ?? {};
  const [display, setDisplay] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplay(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Number(v.toFixed(decimals))),
    });
    return () => controls.stop();
  }, [to, duration, decimals, shouldReduceMotion]);

  return display;
}

export { useCountUp };
