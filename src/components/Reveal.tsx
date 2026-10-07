import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";

type Direction = "up" | "left" | "right" | "zoom" | "in";

const directionClass: Record<Direction, string> = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
  in: "reveal-in",
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShown(true);
      },
      { rootMargin: "-80px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      className={cn("reveal", directionClass[direction], shown && "is-in", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
