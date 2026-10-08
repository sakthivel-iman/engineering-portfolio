"use client";
import { motion } from "framer-motion";
import { skillsCategories, processSteps } from "@/data/portfolioData";
import { Wrench, CheckCircle } from "lucide-react";

export default function Skills() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-[#090a0b] px-6 py-24 text-[#f1eee8] md:py-32">
      <div className="mx-auto max-w-6xl space-y-24">

        {/* Technical Skillsets */}
        <div>
          <div className="mb-14 max-w-2xl">
            <span className="section-kicker">01 / Capability matrix</span>
            <h2 className="display-title mt-3 text-4xl text-[#f1eee8] md:text-6xl">Built on a breadth of expertise.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {skillsCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="cinema-card rounded-sm p-6 md:p-7"
              >
                <span className="mb-5 block font-mono text-[10px] tracking-[0.2em] text-white/35">0{idx + 1}</span>
                <h3 className="mb-5 flex items-center gap-2 text-base font-semibold text-[#e5765c]">
                  <Wrench className="h-4 w-4" /> {cat.title}
                </h3>
                <ul className="space-y-3 border-t border-white/10 pt-5">
                  {cat.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-white/65">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-[#d9684e]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Workflow Section */}
        <div>
          <div className="mb-14 max-w-3xl">
            <span className="section-kicker">02 / Engineering methodology</span>
            <h2 className="display-title mt-3 text-4xl text-[#f1eee8] md:text-6xl">From first brief to field-ready.</h2>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative min-h-52 overflow-hidden bg-[#0d0e0f] p-6 md:p-7"
              >
                <span className="mb-10 block font-mono text-xs tracking-[0.2em] text-[#d9684e]">{p.step} <span className="text-white/20">/ 04</span></span>
                <h3 className="mb-2 text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}