import Hero from "@/components/main/Hero";
import Information from "@/components/main/Information";
import Projects from "@/components/main/Projects";
import Learning from "@/components/main/Learning";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Information />
        <Skills />
        <Projects />
        <Learning />
      </div>
    </main>
  );
}
