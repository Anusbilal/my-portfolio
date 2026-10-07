import type { TextPart } from "../data/portfolio";
import { cn } from "../lib/cn";

export function RichText({ parts, className }: { parts: TextPart[]; className?: string }) {
  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.text === "\n") return <br key={index} className="hidden sm:block" />;
        return (
          <span
            key={index}
            className={cn(
              part.tone === "strong" && "font-semibold text-foreground",
              part.tone === "accent" && "text-indigo-500",
              part.tone === "underline" && "border-b border-indigo-500/50 text-foreground",
              part.tone === "mark" && "text-indigo-500 underline decoration-indigo-500/30 underline-offset-8",
            )}
          >
            {part.text}
          </span>
        );
      })}
    </span>
  );
}
