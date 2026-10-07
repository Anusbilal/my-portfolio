import { MotionConfig } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { About } from "./components/About";
import { Background } from "./components/Background";
import { Contact } from "./components/Contact";
import { FindMe } from "./components/FindMe";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";

let scrollFrame = 0;

function smoothScrollTo(top: number) {
  window.cancelAnimationFrame(scrollFrame);
  const start = window.scrollY;
  const distance = top - start;
  const duration = Math.min(1200, Math.max(450, Math.abs(distance) * 0.35));
  const startTime = performance.now();
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

  const step = (now: number) => {
    const progress = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, start + distance * ease(progress));
    if (progress < 1) scrollFrame = window.requestAnimationFrame(step);
  };

  scrollFrame = window.requestAnimationFrame(step);
}

function SmoothScroll() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest("a[href^='#']");
      if (!(link instanceof HTMLAnchorElement)) return;
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;
      event.preventDefault();
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 88);
      smoothScrollTo(top);
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

function Site() {
  const [booting, setBooting] = useState(true);
  const finishBoot = useCallback(() => setBooting(false), []);

  return (
    <MotionConfig reducedMotion="never">
      <SmoothScroll />
      {booting ? (
        <Loader onComplete={finishBoot} />
      ) : (
        <div className="relative overflow-hidden">
          <Background />
          <div className="relative z-10 min-h-screen text-foreground transition-colors duration-300">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Testimonials />
              <FindMe />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </MotionConfig>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Site />
    </ThemeProvider>
  );
}
