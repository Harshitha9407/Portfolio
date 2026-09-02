import { Loader } from "@/components/Loader";
import { Navigation } from "@/components/Navigation";
import { Terminal } from "@/components/Terminal";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Workbench } from "@/components/Workbench";
import { Journey } from "@/components/Journey";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-base text-text-main selection:bg-purple-500/30 selection:text-cyan-400 font-sans overflow-x-hidden md:cursor-none">
      <Cursor />
      <Loader />
      <Navigation />
      <Terminal />
      
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Workbench />
      <Journey />
      <Footer />
    </main>
  );
}



