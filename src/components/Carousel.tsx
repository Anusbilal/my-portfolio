import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";

export function Carousel({
  children,
  loop = false,
  tone = "indigo",
}: {
  children: ReactNode;
  loop?: boolean;
  tone?: "indigo" | "teal";
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const syncEdges = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft >= el.scrollWidth - el.clientWidth - 4,
    });
  }, []);

  useEffect(() => {
    syncEdges();
    window.addEventListener("resize", syncEdges);
    return () => window.removeEventListener("resize", syncEdges);
  }, [syncEdges, children]);

  const scrollByCard = (direction: number) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const amount = card?.offsetWidth ?? el.clientWidth * 0.8;
    const max = el.scrollWidth - el.clientWidth;
    let next = el.scrollLeft + direction * amount;

    if (loop) {
      if (direction > 0 && el.scrollLeft >= max - 8) next = 0;
      if (direction < 0 && el.scrollLeft <= 8) next = max;
    }

    el.scrollTo({ left: next, behavior: "smooth" });
  };

  const buttonTone =
    tone === "teal"
      ? "border-teal-500/30 bg-white text-teal-500 hover:bg-teal-600 hover:text-white dark:bg-neutral-900"
      : "border-indigo-500/30 bg-white text-indigo-500 hover:bg-indigo-600 hover:text-white dark:bg-neutral-900";

  return (
    <div className="w-full">
      <div
        ref={scroller}
        onScroll={syncEdges}
        className="no-scrollbar -ml-4 flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {children}
      </div>
      <div className="mt-8 flex justify-center gap-4 sm:mt-12 lg:mt-16">
        <button
          type="button"
          aria-label="Previous slide"
          disabled={!loop && edges.start}
          onClick={() => scrollByCard(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 disabled:pointer-events-none disabled:opacity-40",
            buttonTone,
          )}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          disabled={!loop && edges.end}
          onClick={() => scrollByCard(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 disabled:pointer-events-none disabled:opacity-40",
            buttonTone,
          )}
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export function CarouselSlide({ children }: { children: ReactNode }) {
  return (
    <div data-slide className="w-full shrink-0 snap-start pl-4 md:w-1/2 lg:w-1/3">
      {children}
    </div>
  );
}
