import type { ReactNode } from "react";
import { portfolio, type SocialLink } from "../data/portfolio";
import { cn } from "../lib/cn";
import { Media } from "./Media";
import { Reveal } from "./Reveal";

function SocialSurface({
  url,
  className,
  label,
  children,
}: {
  url: string;
  className: string;
  label?: string;
  children: ReactNode;
}) {
  if (!url) {
    return (
      <div className={className} aria-label={label}>
        {children}
      </div>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
      {children}
    </a>
  );
}

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-white lg:h-16 lg:w-16" aria-hidden>
      {children}
    </svg>
  );
}

const icons: Record<string, ReactNode> = {
  Gmail: (
    <Icon>
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-1.29 1.454-2.032 2.514-1.202L12 11.33l9.486-7.075c1.06-.83 2.514-.088 2.514 1.202z" />
    </Icon>
  ),
  LinkedIn: (
    <Icon>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </Icon>
  ),
  GitHub: (
    <Icon>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </Icon>
  ),
  WhatsApp: (
    <Icon>
      <path d="M20.52 3.449A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892a11.82 11.82 0 0 0 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.423-8.452zM12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.885-9.886 9.885zm5.421-7.403c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    </Icon>
  ),
  Instagram: (
    <Icon>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </Icon>
  ),
  Facebook: (
    <Icon>
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
    </Icon>
  ),
};

function Preview({ social }: { social: SocialLink }) {
  if (social.name === "LinkedIn") {
    return (
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3498db] text-xs font-bold text-white">in</div>
          <div>
            <p className="mb-0.5 text-[10px] leading-none font-bold text-slate-800 dark:text-slate-100">{social.headline}</p>
            <p className="text-[8px] leading-none text-slate-400">{social.detail}</p>
          </div>
        </div>
        <p className="my-1 text-[8px] leading-normal text-slate-500 dark:text-slate-400">{portfolio.linkedinBlurb}</p>
        <span className="mt-auto rounded-full bg-[#3498db] py-1.5 text-center text-[8px] font-bold text-white">{social.action}</span>
      </div>
    );
  }

  if (social.name === "GitHub") {
    return (
      <div className="flex h-full flex-col justify-between font-mono">
        <div>
          <div className="flex items-center gap-1">
            <span className="text-[9px] font-bold text-slate-900 dark:text-white">{portfolio.githubUser}</span>
            <span className="rounded-full border border-slate-300 px-1 text-[7px] text-slate-400 dark:border-slate-700">{social.action}</span>
          </div>
          <p className="mt-1 truncate text-[9px] font-bold text-slate-800 dark:text-slate-100">{social.headline}</p>
          <div className="mt-1 flex items-center gap-2 text-[8px] text-slate-400">
            <span className="flex items-center gap-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3178c6]" /> TS
            </span>
            {portfolio.githubStars ? <span>★ {portfolio.githubStars}</span> : null}
          </div>
        </div>
        <div className="mt-auto truncate border-t border-slate-100 pt-1 text-[7px] text-slate-400 dark:border-slate-800">{social.detail}</div>
      </div>
    );
  }

  const accent =
    social.name === "Gmail"
      ? "text-[#EA4335]"
      : social.name === "WhatsApp"
        ? "text-[#25d366]"
        : social.name === "Instagram"
          ? "bg-gradient-to-r from-[#8e44ad] to-[#9b59b6] bg-clip-text text-transparent"
          : "text-[#34495e]";

  const button =
    social.name === "Gmail"
      ? "bg-[#EA4335]"
      : social.name === "WhatsApp"
        ? "bg-[#25d366]"
        : social.name === "Instagram"
          ? "bg-gradient-to-r from-[#8e44ad] to-[#9b59b6]"
          : "bg-[#34495e]";

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className={cn("text-sm font-black", accent)}>{social.name.toLowerCase()}</span>
        {social.name === "WhatsApp" && <span className="h-2 w-2 animate-pulse rounded-full bg-[#25d366]" />}
      </div>
      <div className="my-1.5">
        <p className="text-[10px] leading-tight font-bold text-slate-800 dark:text-slate-100">{social.headline}</p>
        <p className="mt-0.5 text-[8px] leading-tight text-slate-400">{social.detail}</p>
      </div>
      <span className={cn("mt-auto rounded-full py-1.5 text-center text-[8px] font-bold text-white", button)}>{social.action}</span>
    </div>
  );
}

export function FindMe() {
  return (
    <section
      id="findme-on"
      className="relative flex flex-col items-center justify-center overflow-hidden border-t border-b border-slate-200/30 bg-zinc-100/50 py-24 backdrop-blur-md sm:py-32 dark:border-zinc-800/40 dark:bg-zinc-900/40"
    >
      <div className="absolute top-0 left-1/4 -z-10 h-[400px] w-[400px] animate-pulse rounded-full bg-[#9b59b6]/10 blur-[130px]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#3498db]/15 blur-[150px]" />
      <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[400px] animate-pulse rounded-full bg-[#25d366]/10 blur-[130px]" />
      <div className="absolute bottom-1/4 left-10 -z-10 h-[300px] w-[300px] rounded-full bg-[#34495e]/20 blur-[120px]" />
      <div className="absolute right-10 bottom-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-[#EA4335]/15 blur-[130px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-6">
        <Reveal className="mb-14 text-center sm:mb-20 lg:mb-28">
          <h2 className="text-4xl font-black tracking-tighter text-slate-800 uppercase italic drop-shadow-sm select-none sm:text-6xl lg:text-8xl dark:text-orange-50/90">
            {portfolio.findMeTitle}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#9b59b6] via-[#3498db] to-[#25d366]" />
        </Reveal>

        <Reveal className="mx-auto flex w-full max-w-sm flex-col gap-4 lg:hidden">
          <div className="mb-2 flex justify-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl">
              <Media src={portfolio.photo} alt={portfolio.name} className="h-full w-full object-cover object-top grayscale" />
            </div>
          </div>
          <p className="mb-2 text-center text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-400">Connect with me</p>
          {portfolio.socials.map((social) => (
            <SocialSurface
              key={social.name}
              url={social.url}
              label={social.name}
              className={cn(
                "group flex w-full items-center gap-4 rounded-2xl bg-gradient-to-r px-5 py-4 shadow-lg transition-all duration-200 active:scale-[0.97]",
                social.gradient,
              )}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 [&>svg]:h-6 [&>svg]:w-6">
                {icons[social.name]}
              </div>
              <span className="text-base font-black tracking-widest text-white uppercase italic">{social.name}</span>
              <svg className="ml-auto h-4 w-4 fill-white opacity-70 transition-all group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" aria-hidden>
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </SocialSurface>
          ))}
        </Reveal>

        <Reveal direction="in" className="relative mt-6 hidden h-[600px] w-full max-w-[1200px] items-center justify-center select-none lg:flex">
          {portfolio.socials.map((social) => (
            <div
              key={social.name}
              className={cn(
                "group absolute h-[350px] w-[240px] origin-bottom transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:z-[60] hover:scale-110",
                social.zIndex,
                social.rotation,
                social.hoverRotation,
                social.offsetClass,
                social.hoverOffsetClass,
                social.shadow,
              )}
            >
              <div className="pointer-events-none absolute -top-[155px] -left-8 z-50 flex h-[150px] w-[220px] origin-bottom-right -rotate-[6deg] scale-75 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white opacity-0 shadow-2xl transition-all duration-300 group-hover:pointer-events-auto group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 dark:border-slate-800 dark:bg-[#0f172a]">
                <div className="flex items-center justify-between border-b border-slate-200/60 bg-slate-100 px-3 py-2 dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                    <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="mx-auto max-w-[130px] flex-1 truncate rounded bg-slate-200 px-2 py-0.5 text-center font-mono text-[8px] text-slate-500 select-none dark:bg-slate-800 dark:text-slate-400">
                    {social.previewUrl}
                  </div>
                  <div className="w-8" />
                </div>
                <div className="flex flex-1 flex-col p-3 text-slate-700 select-none dark:text-slate-300">
                  <Preview social={social} />
                </div>
              </div>
              <SocialSurface
                url={social.url}
                label={social.name}
                className={cn(
                  "flex h-full w-full cursor-pointer flex-col items-center justify-between rounded-[32px] border border-white/10 bg-gradient-to-b p-7 shadow-lg transition-shadow hover:shadow-2xl",
                  social.gradient,
                )}
              >
                <div className="pointer-events-none absolute inset-1 rounded-[26px] border border-white/10 transition-colors group-hover:border-white/20" />
                <div className="flex flex-1 items-center justify-center">
                  <div className="rounded-3xl bg-white/10 p-3 transition-transform duration-300 group-hover:scale-110">{icons[social.name]}</div>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-lg font-black tracking-widest text-white uppercase italic opacity-90 transition-opacity group-hover:opacity-100">
                    {social.name}
                  </span>
                </div>
              </SocialSurface>
            </div>
          ))}

          <div className="group absolute z-30 h-[375px] w-[260px] translate-x-0 translate-y-0 transform overflow-hidden rounded-[32px] border-2 border-white/20 bg-neutral-900 shadow-2xl transition-all duration-500 hover:z-[60] hover:-translate-y-12 hover:scale-110 hover:shadow-[#3498db]/40 dark:border-white/10">
            <Media
              src={portfolio.photo}
              alt={portfolio.name}
              className="h-full w-full scale-105 object-cover object-top grayscale transition-all duration-1000 group-hover:scale-100 group-hover:grayscale-0"
            />
            <div className="absolute right-4 bottom-4 left-4 flex translate-y-2 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/60 p-4 text-center opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="mb-1 text-xs leading-none font-black tracking-wider text-[#3498db] uppercase italic">{portfolio.name}</p>
              <p className="text-[10px] font-bold tracking-tight text-white uppercase opacity-80">{portfolio.findMeRole}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
