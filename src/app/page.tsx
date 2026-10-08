import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <Hero />
      <Skills />
      <Timeline />
      <Education />
    </main>
  );
}