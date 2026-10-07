import { ExternalLink, Eye } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Carousel, CarouselSlide } from "./Carousel";
import { Media } from "./Media";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-zinc-100/50 py-10 backdrop-blur-md sm:py-16 md:py-24 dark:bg-zinc-900/40">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <Reveal className="mb-8 text-center sm:mb-12 md:mb-16">
          <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-indigo-500 uppercase">{portfolio.projectsEyebrow}</span>
          <h2 className="text-4xl font-black tracking-tighter text-foreground uppercase italic sm:text-5xl md:text-7xl">
            {portfolio.projectsTitle} <span className="text-indigo-500">{portfolio.projectsAccent}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Carousel loop>
            {portfolio.projects.map((project) => {
                const hasLiveDemo = !project.link.includes("github.com");
                return (
              <CarouselSlide key={project.title}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm transition-all duration-500 hover:border-indigo-500/30 dark:border-indigo-900/20 dark:bg-[#0a0f1a]/80 dark:shadow-none">
                  <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl bg-neutral-200 md:h-56 dark:bg-neutral-800">
                    <Media
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <a
                        href={project.github || project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={project.github ? `View ${project.title} on GitHub` : `Open ${project.title}`}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white transition-colors hover:bg-indigo-700"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-grow flex-col space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-indigo-500/10 bg-indigo-500/10 px-2.5 py-1 text-[9px] font-black tracking-widest text-indigo-500 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-black tracking-tighter text-foreground uppercase italic transition-colors group-hover:text-indigo-500 md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="line-clamp-3 text-xs leading-relaxed font-medium tracking-wide text-gray-500 uppercase">{project.description}</p>
                    </div>
                    <div className="mt-auto pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center rounded-xl border border-black/10 bg-black/5 py-6 text-xs font-black tracking-widest text-foreground uppercase italic transition-all group-hover:bg-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-white/10 dark:bg-white/5"
                      >
                        <Eye className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                        {hasLiveDemo ? "Live Preview" : "GitHub"}
                      </a>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-indigo-600 to-teal-500 transition-all duration-700 group-hover:w-full" />
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
