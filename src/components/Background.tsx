import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function Background() {
  const { theme } = useTheme();
  const bubbles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        even: index % 2 === 0,
        x: [`${randomBetween(-15, 115)}%`, `${randomBetween(-15, 115)}%`, `${randomBetween(-15, 115)}%`],
        y: [`${randomBetween(-15, 115)}%`, `${randomBetween(-15, 115)}%`, `${randomBetween(-15, 115)}%`],
        sizeFactor: randomBetween(0.6, 2),
        duration: randomBetween(30, 65),
        strokeWidth: randomBetween(2, 6),
      })),
    [],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden bg-background transition-colors duration-500"
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="water-displacement">
            <feTurbulence type="fractalNoise" baseFrequency="0.006" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="120" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <svg className="absolute h-full w-full overflow-visible opacity-70 dark:opacity-85">
        <g filter="url(#water-displacement)">
          {bubbles.map((bubble) => {
            const stroke =
              theme === "dark"
                ? bubble.even
                  ? "rgba(249, 115, 22, 0.12)"
                  : "rgba(255, 255, 255, 0.18)"
                : bubble.even
                  ? "rgba(14, 165, 233, 0.18)"
                  : "rgba(255, 255, 255, 0.4)";

            return (
              <motion.circle
                key={bubble.id}
                initial={{ cx: bubble.x[0], cy: bubble.y[0] }}
                animate={{ cx: bubble.x, cy: bubble.y }}
                transition={{
                  duration: bubble.duration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                r={bubble.sizeFactor * 130}
                fill="none"
                stroke={stroke}
                strokeWidth={bubble.strokeWidth}
                strokeLinecap="round"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
