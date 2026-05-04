import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Anwar Karbaj — Software Engineer · Flutter & WordPress";
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Portfolio of Anwar Karbaj — software engineer building Flutter mobile apps and high-performance WordPress sites."
    );
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  return (
    <main className="relative bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
};

export default Index;
