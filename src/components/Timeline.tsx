"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { experience } from "@/data/portfolioData";
import { ChevronRight, Wrench, Cpu, CheckCircle2 } from "lucide-react";

export default function Timeline() {
  const [selectedId, setSelectedId] = useState(experience[0].id);
  const activeItem = experience.find((item) => item.id === selectedId) || experience[0];

  return (
    <section id="experience" className="relative overflow-hidden border-t border-white/[.07] bg-[#0c0d0e] px-4 py-24 text-[#f1eee8] md:px-8 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <span className="section-kicker">03 / Selected experience</span>
          <h2 className="display-title mt-3 text-4xl text-[#f1eee8] md:text-6xl">A career in motion.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">Select a chapter to explore engineering work across tractor, off-road, and renewable-energy platforms.</p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-2 lg:col-span-5">
            {experience.map((exp, idx) => {
              const isActive = exp.id === selectedId;
              return (
                <motion.div
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedId(exp.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  whileHover={{ x: 3 }}
                  className={`relative cursor-pointer border px-5 py-4 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9684e] ${
                    isActive
                      ? "border-[#d9684e]/50 bg-white/[.055]"
                      : "border-white/[.07] bg-transparent hover:border-white/20 hover:bg-white/[.025]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-4">
                      <span className={`font-mono text-xs ${isActive ? "text-[#d9684e]" : "text-white/30"}`}>0{idx + 1}</span>
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold text-white">{exp.role}</h3>
                        <p className={`mt-1 text-sm ${isActive ? "text-[#e5765c]" : "text-white/45"}`}>{exp.company}</p>
                      </div>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] text-white/40">{exp.period}</span>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 top-0 w-[2px] bg-[#d9684e]"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="cinema-card relative overflow-hidden rounded-sm p-6 md:p-8"
              >
                <Image
                  src={
                    activeItem.id === "jcb"
                      ? "/jcb-watermark.png"
                      : activeItem.id === "mahindra"
                        ? "/mahindra-watermark.png"
                        : activeItem.id === "tafe-engineer"
                          ? "/tafe-fieldwork-watermark.png"
                          : activeItem.id === "ind-aussie"
                            ? "/solar-farm-watermark.png"
                          : "/tractor-watermark.png"
                  }
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="pointer-events-none z-0 object-contain object-right opacity-[.08] md:opacity-[.18]"
                />
                <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent" />

                <div className="relative z-10">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                    <div>
                      <span className="border border-[#d9684e]/35 bg-[#d9684e]/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-[#e98770]">
                        {activeItem.badge}
                      </span>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{activeItem.company}</h3>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="mb-1 block font-mono text-[10px] tracking-wider text-white/35">ROLE DURATION</span>
                      <span className="text-sm text-white/75">{activeItem.period}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="mb-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-white/45">
                      <CheckCircle2 className="h-4 w-4 text-[#d9684e]" /> KEY ENGINEERING RESPONSIBILITIES
                    </h4>
                    <ul className="space-y-3">
                      {activeItem.highlights.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#d9684e]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <h4 className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-white/45">
                      <Cpu className="h-4 w-4 text-[#d9684e]" /> CORE SUBSYSTEMS & TECHNICAL SCOPE
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeItem.technicalFocus.map((focus, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-1.5 border border-white/10 bg-white/[.035] px-3 py-1.5 text-xs text-white/60"
                        >
                          <Wrench className="h-3 w-3 text-[#d9684e]/75" />
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}