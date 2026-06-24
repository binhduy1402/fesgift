import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
}

export default function CountUp({ value }: CountUpProps) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;

    started.current = true;

    const target = parseInt(value.replace(/[^\d]/g, ""), 10);

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const current = Math.floor(target * progress);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  const suffix = value.includes("+") ? "+" : "";

  return (
    <>
      {count.toLocaleString("vi-VN")}
      {suffix}
    </>
  );
}
