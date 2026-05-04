import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#" className="font-mono text-sm tracking-tight">
          <span className="text-neon-cyan">{"<"}</span>
          <span className="text-foreground">anwar</span>
          <span className="text-neon-magenta">{".dev"}</span>
          <span className="text-neon-cyan">{"/>"}</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="font-mono text-neon-cyan/60 mr-1">0{i + 1}.</span>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-neon-cyan to-neon-magenta group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium hover:shadow-glow transition-all duration-300"
        >
          <span className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse-glow" />
          Available
        </a>
      </nav>
    </motion.header>
  );
}
