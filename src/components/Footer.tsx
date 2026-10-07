import { portfolio } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-indigo-900/30 bg-slate-900 py-8 backdrop-blur-md sm:py-10 dark:border-indigo-900/20 dark:bg-[#030507]">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[300px] w-full max-w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/5 blur-[120px]" />
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="flex w-full flex-col items-center justify-between gap-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase md:flex-row">
          <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
          <div className="group flex cursor-default items-center gap-2">
            <span>Designed by</span>
            <span className="text-gray-500 transition-colors group-hover:text-indigo-400">{portfolio.footerCredit}</span>
          </div>
          <p>{portfolio.footerRole}</p>
        </div>
      </div>
    </footer>
  );
}
