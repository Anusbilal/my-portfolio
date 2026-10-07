import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setProgress((value) => (value < 100 ? value + 1 : 100));
    }, 25);
    const hide = window.setTimeout(() => {
      setVisible(false);
      window.setTimeout(onComplete, 600);
    }, 3200);

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(hide);
    };
  }, [onComplete]);

  const letters = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 120, damping: 14 } },
  };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] transition-all duration-700 ease-in-out ${
        visible ? "scale-100 opacity-100" : "pointer-events-none scale-110 opacity-0"
      }`}
    >
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[350px] w-[350px] -translate-x-12 -translate-y-12 rounded-full bg-indigo-500/10 blur-[100px]"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute h-[350px] w-[350px] translate-x-12 translate-y-12 rounded-full bg-teal-500/10 blur-[100px]"
      />
      <div className="relative z-10 flex flex-col items-center gap-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
          className="relative flex select-none items-baseline"
        >
          <div className="absolute inset-0 rounded-full bg-indigo-500/10 opacity-30 blur-3xl" />
          <motion.span variants={letters} className="relative z-10 text-7xl font-black italic tracking-tighter text-white md:text-8xl">
            M
          </motion.span>
          <motion.span variants={letters} className="relative z-10 text-7xl font-black italic tracking-tighter text-white md:text-8xl">
            A
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 220, damping: 10, delay: 0.7 } },
            }}
            className="relative z-10 bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-7xl font-black italic tracking-tighter text-transparent md:text-8xl"
          >
            .
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          className="z-10 flex w-64 flex-col items-center gap-4"
        >
          <div className="mb-1 flex w-full justify-between">
            <span className="text-[10px] font-black uppercase italic tracking-[0.3em] text-gray-400">Loading</span>
            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-[10px] font-black italic text-transparent">
              {progress}%
            </span>
          </div>
          <div className="h-[3px] w-full overflow-hidden rounded-full border border-white/5 bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-teal-500 shadow-[0_0_12px_rgba(99,102,241,0.6)] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 animate-pulse text-[9px] font-semibold uppercase tracking-[0.4em] text-gray-500">
            Crafting Experience
          </p>
        </motion.div>
      </div>
    </div>
  );
}
