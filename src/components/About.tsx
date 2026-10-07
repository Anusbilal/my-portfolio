import { portfolio } from "../data/portfolio";
import { Media } from "./Media";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";
import { Skills } from "./Skills";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-zinc-100/50 py-10 backdrop-blur-md sm:py-16 md:py-24 dark:bg-zinc-900/40">
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] animate-pulse bg-indigo-500/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] bg-teal-500/5 blur-[100px]" />
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <Reveal className="mb-14 text-center sm:mb-20">
          <span className="mb-3 block font-mono text-xs tracking-[0.4em] text-indigo-500 uppercase">{portfolio.aboutEyebrow}</span>
          <h2 className="mb-6 text-4xl font-black text-foreground md:text-6xl">
            {portfolio.aboutTitleLead} <span className="text-indigo-500">{portfolio.aboutTitleAccent}</span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-transparent" />
        </Reveal>

        <div className="mb-10 grid grid-cols-1 items-start gap-20 sm:mb-16 md:mb-28 md:grid-cols-2">
          <Reveal direction="left" className="group relative order-2 md:order-1">
            <div className="absolute -inset-4 -z-10 rounded-3xl border border-indigo-500/20 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute -top-4 -left-4 h-20 w-20 rounded-tl-3xl border-t-2 border-l-2 border-indigo-500" />
            <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-br-3xl border-r-2 border-b-2 border-teal-500" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/5 bg-neutral-200 lg:aspect-auto lg:min-h-[560px] dark:border-white/5 dark:bg-neutral-900">
              <Media
                src={portfolio.photo}
                alt={portfolio.aboutName}
                className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md md:right-8 md:bottom-8 md:left-8">
                <p className="mb-1 text-lg font-bold text-white">{portfolio.aboutName}</p>
                <p className="text-sm font-medium text-indigo-400">{portfolio.aboutRole}</p>
              </div>
            </div>
            <div className="absolute -top-8 -right-3 flex h-20 w-20 rotate-12 flex-col items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-2xl shadow-indigo-600/40 transition-all duration-500 group-hover:rotate-0 md:-right-8 md:h-28 md:w-28">
              <span className="text-2xl font-black md:text-4xl">{portfolio.years}</span>
              <span className="text-[10px] font-black tracking-tighter uppercase">{portfolio.yearsLabel}</span>
            </div>
          </Reveal>

          <Reveal direction="right" className="relative order-1 md:order-2">
            <div className="space-y-5">
              <h3 className="text-xl leading-tight font-bold text-foreground md:text-2xl lg:text-3xl">
                <RichText parts={portfolio.aboutHeadline} />
              </h3>
              {portfolio.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="text-sm leading-relaxed text-gray-400 lg:text-base">
                  <RichText parts={paragraph} />
                </p>
              ))}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {portfolio.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center rounded-xl border border-indigo-100 bg-white/60 px-2 py-3 text-center dark:border-indigo-500/10 dark:bg-indigo-500/5"
                  >
                    <span className="text-xl font-black text-indigo-500 md:text-2xl">{stat.value}</span>
                    <span className="mt-0.5 text-[10px] font-bold tracking-wider text-gray-400 uppercase">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2">
              <a
                href="#contact"
                className="rounded-xl bg-indigo-600 px-10 py-4 text-center text-sm font-bold text-white shadow-xl shadow-indigo-600/20 transition-all hover:-translate-y-1 hover:bg-indigo-700"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="rounded-xl border border-neutral-300 px-10 py-4 text-center text-sm font-bold text-gray-600 transition-all hover:border-indigo-500 hover:text-indigo-500 dark:border-neutral-800 dark:text-gray-300"
              >
                View Portfolio
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <Skills />
        </Reveal>
      </div>
    </section>
  );
}
