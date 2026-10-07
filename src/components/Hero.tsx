import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolio } from "../data/portfolio";
import { downloadResume } from "../lib/download";
import { Media } from "./Media";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const role = portfolio.roles[roleIndex];
    let current = "";
    let cursor = 0;
    let eraseTimer = 0;
    let holdTimer = 0;
    const typeTimer = window.setInterval(() => {
      if (cursor < role.length) {
        current += role[cursor];
        cursor += 1;
        setTyped(current);
        return;
      }

      window.clearInterval(typeTimer);
      holdTimer = window.setTimeout(() => {
        eraseTimer = window.setInterval(() => {
          if (current.length > 0) {
            current = current.slice(0, -1);
            setTyped(current);
            return;
          }
          window.clearInterval(eraseTimer);
          setRoleIndex((index) => (index + 1) % portfolio.roles.length);
        }, 30);
      }, 2000);
    }, 80);

    return () => {
      window.clearInterval(typeTimer);
      window.clearInterval(eraseTimer);
      window.clearTimeout(holdTimer);
    };
  }, [roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50/40 pt-24 pb-12 backdrop-blur-md dark:bg-[#050812]/40"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
          <Reveal direction="left" className="relative z-10 space-y-10 text-center lg:text-left">
            <div className="absolute -top-20 -left-20 -z-10 h-72 w-72 animate-pulse bg-indigo-500/10 blur-[120px]" />
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/10 bg-indigo-500/5 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                <span className="font-mono text-[10px] font-bold tracking-widest text-indigo-500 uppercase">
                  {portfolio.availability}
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-gray-400 md:text-3xl">
                {portfolio.greeting} <span className="text-neutral-900 dark:text-white">{portfolio.name}</span>
              </h2>
              <h1 className="mb-5 min-h-20 text-4xl leading-[0.9] font-black tracking-tighter text-neutral-900 uppercase italic md:min-h-[240px] md:text-8xl dark:text-white">
                <span className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-indigo-500/50 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-indigo-500/50">
                  {typed}
                </span>
                <span className="animate-pulse text-indigo-500">_</span>
              </h1>
              <p className="mx-auto max-w-lg text-sm leading-relaxed font-medium tracking-wider text-gray-500 uppercase opacity-80 md:text-base lg:mx-0">
                <RichText parts={portfolio.heroIntro} />
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  type="button"
                  onClick={downloadResume}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/60 px-6 py-3 text-sm font-semibold text-neutral-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:bg-indigo-50 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/45"
                >
                  Hire Me
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="zoom" className="relative flex items-end justify-end">
            <div className="absolute h-[80%] w-[80%] rounded-full bg-indigo-500/10 blur-[150px]" />
            <div className="group relative aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-2xl border border-black/5 bg-neutral-100 shadow-2xl dark:border-white/5 dark:bg-neutral-900/50">
              <Media
                src={portfolio.photo}
                alt={portfolio.name}
                className="h-full w-full scale-105 object-cover object-top grayscale transition-all duration-1000 group-hover:scale-100 group-hover:grayscale-0"
              />
              <div className="absolute right-6 bottom-6 left-6 flex translate-y-2 items-center justify-between rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl transition-transform duration-500 group-hover:translate-y-0">
                <div>
                  <p className="mb-1 text-xs leading-none font-black tracking-widest text-indigo-400 uppercase italic">
                    {portfolio.photoBadge}
                  </p>
                  <p className="text-[11px] font-bold tracking-tighter text-white uppercase opacity-80">
                    {portfolio.photoLocation}
                  </p>
                </div>
                <div className="flex h-12 w-12 rotate-3 items-center justify-center rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-600/40 transition-transform group-hover:rotate-0">
                  <span className="text-2xl font-bold text-white" aria-hidden>
                    ⚛
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
