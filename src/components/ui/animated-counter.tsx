"use client";

import * as React from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

type Props = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export function AnimatedCounter({ value, duration = 2, prefix = "", suffix = "", decimals = 0 }: Props) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) =>
    decimals === 0 ? Math.round(v).toLocaleString() : v.toFixed(decimals),
  );

  React.useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, motionValue, value, duration]);

  const [text, setText] = React.useState("0");
  React.useEffect(() => rounded.on("change", (v) => setText(String(v))), [rounded]);

  return (
    <span ref={ref}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
