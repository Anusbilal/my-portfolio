import { ArrowRight, Brain, Code, Cpu, Monitor, PanelsTopLeft, ShoppingBag, Smartphone, type LucideIcon } from "lucide-react";
import { portfolio, type Service } from "../data/portfolio";
import { Carousel, CarouselSlide } from "./Carousel";
import { Reveal } from "./Reveal";

const icons: Record<Service["icon"], LucideIcon> = {
  monitor: Monitor,
  layout: PanelsTopLeft,
  phone: Smartphone,
  code: Code,
  cpu: Cpu,
  brain: Brain,
  shop: ShoppingBag,
};

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50/40 py-10 backdrop-blur-md sm:py-16 md:py-24 dark:bg-[#050812]/40">
      <div className="mx-auto w-full max-w-[1440px] px-4">
        <Reveal className="mb-8 text-center sm:mb-12 md:mb-16">
          <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-teal-500 uppercase">{portfolio.servicesEyebrow}</span>
          <h2 className="text-4xl font-black tracking-tighter text-foreground uppercase italic sm:text-5xl md:text-7xl">
            {portfolio.servicesTitle} <span className="text-teal-500">{portfolio.servicesAccent}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Carousel loop>
            {portfolio.services.map((service) => {
              const Icon = icons[service.icon];
              return (
                <CarouselSlide key={service.title}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-indigo-100 bg-white/80 p-4 transition-all duration-500 hover:bg-white sm:p-8 dark:border-indigo-900/20 dark:bg-[#080f18]/70 dark:hover:bg-[#080f18]">
                    <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-all group-hover:bg-teal-500/20" />
                    <div className="mb-8">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white">
                        <Icon className="h-10 w-10" aria-hidden />
                      </div>
                      <h3 className="mb-4 text-2xl font-black tracking-tight text-foreground uppercase italic transition-colors group-hover:text-indigo-500">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed font-medium tracking-wide text-gray-400 uppercase">{service.description}</p>
                    </div>
                    <div className="absolute bottom-8 flex translate-y-4 cursor-default items-center gap-2 text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-indigo-600 to-teal-500 transition-all duration-700 group-hover:w-full" />
                  </article>
                </CarouselSlide>
              );
            })}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
