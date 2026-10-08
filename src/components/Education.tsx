import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolioData";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/[.07] bg-[#090a0b] px-6 py-24 text-[#f1eee8] md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <span className="section-kicker">04 / Education</span>
          <h2 className="display-title mt-3 text-4xl text-[#f1eee8] md:text-6xl">
            The foundations.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {education.map((item, index) => (
            <article
              key={item.qualification}
              className="cinema-card flex min-h-60 flex-col p-6 md:p-7"
            >
              <div className="mb-8 flex items-center justify-between">
                <GraduationCap
                  aria-hidden="true"
                  className="h-5 w-5 text-[#d9684e]"
                />
                <span className="font-mono text-xs tracking-[0.2em] text-white/35">
                  0{index + 1}
                </span>
              </div>

              <div className="mb-5">
                <h3 className="text-xl font-semibold text-white">
                  {item.qualification}
                </h3>
                <p className="mt-1 text-sm text-[#e5765c]">{item.result}</p>
              </div>

              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="text-sm leading-relaxed text-white/70">
                  {item.institution}
                </p>
                <p className="mt-2 font-mono text-[10px] tracking-wider text-white/40">
                  {item.period}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
