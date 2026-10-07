import { Download, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { portfolio } from "../data/portfolio";
import { downloadResume } from "../lib/download";
import { cn } from "../lib/cn";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = portfolio.nav.map((item) => item.href.slice(1));
      for (const id of [...ids].reverse()) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= 200) {
          setActive(id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onPointer = (event: MouseEvent) => {
      if (panel.current && !panel.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("mousedown", onPointer);
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-[100] transition-all duration-500",
          scrolled
            ? "border-b border-black/[0.05] bg-white/75 py-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] backdrop-blur-2xl dark:border-white/[0.06] dark:bg-[#050812]/80"
            : "bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-14">
          <a href="#home" className="group flex shrink-0 items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30 transition-shadow duration-300 group-hover:shadow-indigo-500/50">
              <span className="text-sm leading-none font-black text-white">{portfolio.logoMark}</span>
            </div>
            <div className="text-xl leading-none font-black tracking-tight">
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
                {portfolio.brand}
              </span>
              <span className="text-neutral-900 dark:text-white">{portfolio.brandSuffix}</span>
            </div>
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:flex" aria-label="Primary">
            <ul className="flex items-center gap-1 rounded-full border border-black/[0.07] bg-black/[0.04] px-2 py-1.5 backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.04]">
              {portfolio.nav.map((item) => {
                const current = active === item.href.slice(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "relative flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-300",
                        current ? "text-white" : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",
                      )}
                    >
                      {current && (
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-indigo-500/30" />
                      )}
                      {current && <span className="relative z-10 h-1 w-1 rounded-full bg-white/70" />}
                      <span className="relative z-10">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/60 text-neutral-500 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/40 hover:bg-indigo-50 hover:text-indigo-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400 dark:hover:bg-indigo-500/10"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={downloadResume}
              className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-4 py-2 text-sm font-semibold text-neutral-700 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/50 hover:bg-indigo-50 hover:text-indigo-600 md:flex dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </button>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/45 md:inline-flex"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Hire Me
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-neutral-200 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/50 lg:hidden dark:border-white/10 dark:bg-white/5"
            >
              <span
                className={cn(
                  "block h-[1.5px] origin-center rounded-full bg-neutral-700 transition-all duration-300 dark:bg-white",
                  open ? "w-4 translate-y-[6.5px] rotate-45" : "w-4",
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] rounded-full bg-neutral-700 transition-all duration-300 dark:bg-white",
                  open ? "w-0 opacity-0" : "w-3.5 opacity-100",
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] origin-center rounded-full bg-neutral-700 transition-all duration-300 dark:bg-white",
                  open ? "w-4 -translate-y-[6.5px] -rotate-45" : "w-4",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div className={cn("fixed inset-0 z-[200] lg:hidden transition-all duration-500", open ? "visible" : "invisible pointer-events-none")}>
        <div
          className={cn("absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500", open ? "opacity-100" : "opacity-0")}
          onClick={() => setOpen(false)}
        />
        <div
          ref={panel}
          className={cn(
            "absolute top-0 right-0 flex h-full w-[300px] flex-col border-l border-black/5 bg-white shadow-2xl transition-transform duration-500 ease-in-out dark:border-white/[0.07] dark:bg-[#06080f]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-black/5 px-7 py-6 dark:border-white/[0.06]">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
                <span className="text-xs font-black text-white">{portfolio.logoMark}</span>
              </div>
              <span className="text-lg font-black tracking-tight text-neutral-900 dark:text-white">Menu</span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-500 dark:bg-white/5 dark:text-neutral-400 dark:hover:bg-indigo-500/10"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
            <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.15em] text-neutral-400 uppercase dark:text-neutral-600">
              Navigation
            </p>
            <ul className="flex flex-col gap-1">
              {portfolio.nav.map((item, index) => {
                const current = active === item.href.slice(1);
                return (
                  <li
                    key={item.name}
                    style={{ transitionDelay: open ? `${index * 50}ms` : "0ms" }}
                    className={cn("transition-all duration-300", open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0")}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200",
                        current
                          ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white",
                      )}
                    >
                      <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", current ? "bg-indigo-500" : "bg-neutral-300 dark:bg-neutral-700")} />
                      {item.name}
                      {current && <span className="ml-auto text-[10px] font-bold tracking-widest text-indigo-400 uppercase opacity-70">Current</span>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex flex-col gap-3 border-t border-black/5 px-5 py-6 dark:border-white/[0.06]">
            <button
              type="button"
              onClick={() => {
                downloadResume();
                setOpen(false);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 py-3 text-sm font-semibold text-neutral-700 transition-all duration-200 hover:border-indigo-400/50 hover:bg-indigo-50 hover:text-indigo-600 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-indigo-500/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </button>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-transform duration-150 active:scale-[0.98]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
