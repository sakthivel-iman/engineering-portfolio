"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { Download, Mail, Phone, Copy, Check, X, MapPin } from "lucide-react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="film-grain relative isolate flex min-h-[92svh] items-center overflow-hidden bg-[#090a0b] px-6 py-24">
      <div
        className="absolute inset-0 z-0 scale-[1.03] bg-cover bg-[58%_center] bg-no-repeat md:bg-center"
        style={{ backgroundImage: `url('/hero-bg.png')` }}
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(7,8,9,.96)_0%,rgba(7,8,9,.82)_40%,rgba(7,8,9,.24)_100%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(0deg,#090a0b_0%,transparent_32%,rgba(9,10,11,.18)_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_78%_48%,transparent_0%,rgba(0,0,0,.18)_70%)]" />

      <nav aria-label="Main navigation" className="absolute right-6 top-7 z-10 hidden gap-8 text-xs font-medium tracking-[0.16em] text-white/70 sm:flex md:right-[max(1.5rem,calc((100vw-72rem)/2))]">
        <a className="transition-colors hover:text-white" href="#capabilities">CAPABILITIES</a>
        <a className="transition-colors hover:text-white" href="#experience">EXPERIENCE</a>
        <button className="transition-colors hover:text-white" onClick={() => setIsModalOpen(true)}>CONTACT</button>
      </nav>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-3xl space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 border-l-2 border-[#d9684e] bg-black/25 px-4 py-2 font-mono text-xs tracking-[0.16em] text-white/85 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#d9684e]" />
            R&D SENIOR ENGINEER <span className="text-white/35">/</span> INDIA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="display-title max-w-4xl text-6xl leading-[0.98] text-[#f4f0e9] drop-shadow-lg sm:text-7xl md:text-8xl"
          >
            {personalInfo.name}
          </motion.h1>

          <div className="h-px w-20 bg-[#d9684e]" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-base font-light leading-8 text-white/75 drop-shadow md:text-lg"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex cursor-pointer items-center gap-2 border border-[#d9684e] bg-[#d9684e] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/25 transition-colors hover:bg-[#c45a43] active:scale-[.98]"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </button>

            <a
              href="/resume.pdf"
              download="Sakthivel_Vasudevan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 border border-white/25 bg-white/[.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-white/50 hover:bg-white/[.12]"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 z-10 hidden items-center gap-4 font-mono text-[10px] tracking-[0.2em] text-white/45 sm:flex md:left-[max(1.5rem,calc((100vw-72rem)/2))]">
        <span className="h-px w-10 bg-[#d9684e]" />
        VEHICLE INTEGRATION · HYBRID & EV · HYDRAULICS
      </div>

      {/* CONTACT POPUP MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="cinema-card relative z-10 w-full max-w-md rounded-sm p-6 text-white shadow-2xl"
            >
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
                  <p className="mt-1 font-mono text-[10px] tracking-wider text-white/45">R&D ENGINEERING CONTACT</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close contact details"
                  className="border border-white/10 bg-white/[.04] p-2 text-white/55 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Email Field */}
                <div className="flex items-center justify-between gap-3 border border-white/10 bg-white/[.035] p-4">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="shrink-0 border border-[#d9684e]/25 bg-[#d9684e]/10 p-2.5 text-[#e5765c]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="block text-xs font-medium text-white/45">Email Address</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="block truncate text-sm font-semibold text-white hover:text-[#e5765c]"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, "email")}
                    aria-label="Copy email address"
                    className="shrink-0 border border-white/10 bg-white/[.04] p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                    title="Copy Email"
                  >
                    {copiedField === "email" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Mobile Field */}
                <div className="flex items-center justify-between gap-3 border border-white/10 bg-white/[.035] p-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 border border-[#d9684e]/25 bg-[#d9684e]/10 p-2.5 text-[#e5765c]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-medium text-white/45">Mobile Number</span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="block text-sm font-semibold text-white hover:text-[#e5765c]"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                    aria-label="Copy phone number"
                    className="shrink-0 border border-white/10 bg-white/[.04] p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                    title="Copy Phone"
                  >
                    {copiedField === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Badge */}
                <div className="flex items-center gap-3 border border-white/[.07] bg-white/[.02] p-3.5 text-xs text-white/50">
                  <MapPin className="h-4 w-4 shrink-0 text-[#d9684e]" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex w-full items-center justify-center gap-2 bg-[#d9684e] py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#c45a43] active:scale-[.98]"
                >
                  <Mail className="w-4 h-4" /> Send Direct Email
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}