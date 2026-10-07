import { Quote, UserRound } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Carousel, CarouselSlide } from "./Carousel";
import { Media } from "./Media";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-50/40 py-10 backdrop-blur-md sm:py-16 md:py-24 dark:bg-[#050812]/40">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <Reveal className="mb-8 text-center sm:mb-12 md:mb-16">
          <span className="mb-3 block font-mono text-xs tracking-[0.4em] text-teal-500 uppercase">{portfolio.testimonialsEyebrow}</span>
          <h2 className="text-4xl font-black tracking-tighter text-foreground uppercase md:text-6xl">
            {portfolio.testimonialsTitle}
            {portfolio.testimonialsAccent ? <span className="text-teal-500"> {portfolio.testimonialsAccent}</span> : null}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          {portfolio.testimonials.length === 0 ? (
            <p className="mx-auto max-w-xl text-center text-lg text-gray-400">
              Client feedback will be published here when it is available.
            </p>
          ) : (
          <Carousel tone="teal">
            {portfolio.testimonials.map((item) => (
              <CarouselSlide key={item.quote}>
                <div className="h-full p-1">
                  <article className="group relative h-full rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm transition-all duration-500 hover:border-teal-500/20 hover:bg-white md:p-8 lg:p-10 dark:border-indigo-900/20 dark:bg-[#080f14]/80 dark:shadow-none dark:hover:bg-[#080f14]">
                    <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-8 flex items-center justify-between">
                        <div className="relative">
                          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border-2 border-teal-500/20 text-2xl font-black text-teal-500 transition-colors duration-500 group-hover:border-teal-500">
                            {item.image ? (
                              <Media src={item.image} alt={item.author} className="h-full w-full object-cover" />
                            ) : (
                              <UserRound className="h-8 w-8" aria-hidden />
                            )}
                          </div>
                          <div className="absolute -right-2 -bottom-2 rounded-lg bg-teal-500 p-1.5 text-white">
                            <Quote className="h-3 w-3 fill-white" aria-hidden />
                          </div>
                        </div>
                        <div className="flex gap-1 text-lg text-teal-400" aria-label="5 stars">
                          {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} aria-hidden>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="flex-grow text-base leading-relaxed text-gray-400 italic">"{item.quote}"</p>
                      <div className="border-t border-black/5 pt-6 dark:border-white/5">
                        <h3 className="text-lg font-bold text-foreground">{item.author}</h3>
                        <p className="mt-1 font-mono text-xs tracking-widest text-teal-500 uppercase">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              </CarouselSlide>
            ))}
          </Carousel>
          )}
        </Reveal>
      </div>
    </section>
  );
}
