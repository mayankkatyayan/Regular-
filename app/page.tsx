"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    console.log("%c🧩 Developer Puzzle Loaded ", "font-size:20px;color:#22d3ee");
    console.log("Hint 1: Developers usually start by reading the docs.");
    console.log("Try visiting → /api");
    fetch("/api");
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow Effect */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl"
      >

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-6 text-cyan-400"
          
        > 🧩 Developer Puzzle 
          
        </motion.h1>
        <motion.p
        className="text-xl  mb-2 text-cyan-400"
        > [Find words]
        </motion.p>
        {/* Sentence */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg leading-relaxed text-gray-200"
        >
          Before pushing to production, a good developer always checks the
          <span className="text-yellow-400 font-semibold"> ______ </span>,
          verifies the
          <span className="text-yellow-400 font-semibold"> ______ </span>,
          and never forgets to protect the
          <span className="text-yellow-400 font-semibold"> ______ </span>.
        </motion.p>

        {/* Divider */}
        <div className="my-6 border-t border-white/10" />

        {/* Dev Hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-gray-400 space-y-2 font-mono"
        >
          <p>⚡ Hint: Real developers inspect everything.</p>
          <p>⚡ DevTools might reveal more than the UI.</p>
          <p>⚡ Headers are often ignored… but shouldn’t be.</p>
          <p>⚡ Some strings may need decoding.</p>
        </motion.div>

        {/* Final Format */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-xs text-gray-500 font-mono"
        >
          {/* Final format → <span className="text-cyan-400">word1-word2-word3</span> */}
        </motion.div>

      </motion.div>
    </main>
  );
}