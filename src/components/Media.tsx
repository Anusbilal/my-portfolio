import { useState } from "react";
import { cn } from "../lib/cn";

export function Media({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-indigo-950 via-neutral-900 to-teal-950 px-4 text-center text-xs font-bold uppercase tracking-widest text-white/70",
          className,
        )}
      >
        {alt}
      </div>
    );
  }

  return (
    <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
  );
}
