import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { portfolio, type Skill } from "../data/portfolio";
import { cn } from "../lib/cn";

function SkillLogo({ skill, className }: { skill: Skill; className?: string }) {
  if (skill.icon === "monitor") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={cn("h-5 w-5 text-teal-500 md:h-6 md:w-6 dark:text-teal-400", className)} aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }

  return (
    <img
      src={skill.logo}
      alt=""
      className={cn("h-6 w-6 object-contain md:h-7 md:w-7", skill.label === "JavaScript" && "rounded", skill.spin && "animate-[spin_10s_linear_infinite]", className)}
    />
  );
}

function useWheelRadius() {
  const [radius, setRadius] = useState(175);
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setRadius(width < 640 ? 95 : width < 768 ? 120 : width < 1024 ? 140 : 175);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return radius;
}

export function Skills() {
  const skills = portfolio.skills;
  const count = skills.length;
  const radius = useWheelRadius();
  const initial = -90 - (360 / count) * 5;
  const [active, setActive] = useState(5);
  const angleRef = useRef(initial);
  const activeRef = useRef(5);
  const paused = useRef(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);
  const resumeTimer = useRef<number>(0);

  const applyAngle = useCallback((degrees: number, animate: boolean) => {
    if (ringRef.current) {
      ringRef.current.style.transition = animate ? "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none";
      ringRef.current.style.transform = `rotate(${degrees}deg)`;
    }
    iconRefs.current.forEach((icon) => {
      if (!icon) return;
      icon.style.transition = "none";
      icon.style.transform = `rotate(${-degrees}deg)`;
    });
  }, []);

  const indexFromAngle = useCallback(
    (degrees: number) => {
      const normalized = (((-degrees - 90) % 360) + 360) % 360;
      return Math.round(normalized / (360 / count)) % count;
    },
    [count],
  );

  useEffect(() => {
    applyAngle(angleRef.current, false);

    let frame = 0;
    const tick = () => {
      if (!paused.current) {
        angleRef.current -= 0.02;
        applyAngle(angleRef.current, false);
        const next = indexFromAngle(angleRef.current);
        if (next !== activeRef.current) {
          activeRef.current = next;
          setActive(next);
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [applyAngle, indexFromAngle]);

  const focusSkill = (index: number) => {
    const delta = (((-90 - (360 / count) * index - angleRef.current + 180) % 360) + 360) % 360 - 180;
    const next = angleRef.current + delta;
    angleRef.current = next;
    activeRef.current = index;
    setActive(index);
    paused.current = true;
    applyAngle(next, true);
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      paused.current = false;
    }, 2500);
  };

  const skill = skills[active];

  return (
    <div className="rounded-3xl border border-indigo-100 bg-indigo-50/50 p-5 backdrop-blur-sm sm:p-10 lg:p-16 dark:border-indigo-500/10 dark:bg-[#0d0f1a]/60">
      <div className="grid grid-cols-1 items-center gap-12 xl:grid-cols-2">
        <div className="flex h-full flex-col justify-between space-y-6">
          <div>
            <div className="mb-6 border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-black tracking-tighter text-foreground uppercase md:text-3xl">
                {portfolio.skillsEyebrow} <span className="text-indigo-500">{portfolio.skillsAccent}</span>
              </h3>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">{portfolio.skillsNote}</p>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative space-y-5 overflow-hidden rounded-2xl border border-neutral-100 bg-white/80 p-6 shadow-lg dark:border-indigo-500/5 dark:bg-[#141625]/80"
              >
                <div className="absolute top-0 right-0 -z-10 h-24 w-24 rounded-full opacity-10 blur-2xl" style={{ backgroundColor: skill.color }} />
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border bg-neutral-100 shadow-md dark:bg-zinc-900"
                    style={{ borderColor: `${skill.color}40` }}
                  >
                    <SkillLogo skill={skill} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{skill.label}</h4>
                    <span className="font-mono text-xs text-gray-400">Proficiency</span>
                  </div>
                  <span className="ml-auto font-mono text-xl font-bold" style={{ color: skill.color }}>
                    {skill.value}%
                  </span>
                </div>
                <p className="min-h-[60px] text-sm leading-relaxed text-gray-500 dark:text-gray-400">{skill.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-xs font-bold text-gray-400">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Expert</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-200 p-[2px] dark:bg-neutral-800">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="space-y-3 pt-4">
            <span className="block font-mono text-xs tracking-wider text-gray-400 uppercase dark:text-gray-500">Quick Switch</span>
            <div className="flex flex-wrap gap-2">
              {skills.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => focusSkill(index)}
                  aria-pressed={active === index}
                  className={cn(
                    "cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all duration-300",
                    active === index
                      ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                      : "border-neutral-200 bg-white text-gray-600 hover:border-indigo-500/50 dark:border-neutral-800/80 dark:bg-[#111320] dark:text-gray-400",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center py-10 select-none">
          <div className="relative flex items-center justify-center transition-all duration-300" style={{ width: radius * 2 + 100, height: radius * 2 + 100 }}>
            <div className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
              <div className="pointer-events-none absolute -m-6 h-32 w-32 animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-indigo-500/10 md:-m-8 md:h-44 md:w-44 dark:border-indigo-500/25" />
              <motion.div
                className="absolute h-28 w-28 rounded-full opacity-25 blur-xl md:h-36 md:w-36"
                style={{ backgroundColor: skill.color }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div
                className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 bg-white p-3 shadow-2xl transition-colors duration-500 md:h-28 md:w-28 dark:bg-[#141625]"
                style={{ borderColor: skill.color }}
              >
                <div className="mb-1 flex h-8 w-8 scale-125 items-center justify-center md:h-10 md:w-10">
                  <SkillLogo skill={skill} />
                </div>
                <span className="mt-1 font-mono text-[10px] font-bold text-gray-500 select-none md:text-xs dark:text-gray-400">
                  {skill.value}%
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute rounded-full border border-neutral-200 dark:border-neutral-800/80" style={{ width: radius * 2, height: radius * 2 }} />
            <div ref={ringRef} className="relative h-full w-full" style={{ transform: `rotate(${angleRef.current}deg)` }}>
              {skills.map((item, index) => {
                const theta = ((360 / count) * index * Math.PI) / 180;
                const x = Math.cos(theta) * radius;
                const y = Math.sin(theta) * radius;
                const selected = active === index;
                return (
                  <div
                    key={item.label}
                    className="absolute top-1/2 left-1/2 z-10 cursor-pointer"
                    style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                  >
                    <button
                      type="button"
                      aria-label={item.label}
                      onClick={() => focusSkill(index)}
                      className={cn(
                        "group relative flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-md transition-all duration-300 hover:scale-110 md:h-12 md:w-12 dark:bg-zinc-900",
                        selected ? "scale-110 border-indigo-500 shadow-indigo-500/30" : "border-neutral-200 hover:border-indigo-500/50 hover:shadow-lg dark:border-zinc-800",
                      )}
                    >
                      <div
                        ref={(node) => {
                          iconRefs.current[index] = node;
                        }}
                        className="relative flex h-full w-full items-center justify-center"
                        style={{ transform: `rotate(${-angleRef.current}deg)`, transition: "none" }}
                      >
                        <div className="flex items-center justify-center opacity-80 select-none group-hover:opacity-100">
                          <SkillLogo skill={item} className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2.5 -translate-x-1/2 rounded-lg border border-white/10 bg-zinc-900/95 px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-lg shadow-black/30 transition duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 dark:border-zinc-800/80 dark:bg-black/95 dark:text-zinc-100">
                          {item.label}
                          <span className="absolute top-full left-1/2 -mt-1 -translate-x-1/2 border-4 border-transparent border-t-zinc-900/95 dark:border-t-black/95" />
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
