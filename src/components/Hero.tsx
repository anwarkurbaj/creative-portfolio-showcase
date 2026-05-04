import { motion } from "framer-motion";
import Hero3D from "./Hero3D";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const techs = ["Flutter", "WordPress", "React", "Python", "C++", "Dart", "AI Tools"];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-hero">
      {/* grid + glow backdrop */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-neon-cyan/20 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-neon-magenta/20 blur-[140px]" />

      {/* 3D scene */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      {/* content */}
      <div className="relative z-10 container min-h-screen flex flex-col justify-center pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono text-sm md:text-base text-neon-cyan mb-6 flex items-center gap-2"
        >
          <span className="h-px w-10 bg-neon-cyan" />
          {"<Hello World />"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] max-w-5xl"
        >
          Anwar <br />
          <span className="text-gradient">Karbaj.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Software engineer crafting <span className="text-foreground font-medium">web & mobile</span>{" "}
          experiences with Flutter, WordPress and a sharp eye for detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-7 py-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-magenta text-primary-foreground font-semibold overflow-hidden hover:shadow-glow transition-all duration-300"
          >
            <span className="relative z-10">View my work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-neon-magenta to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#contact"
            className="px-7 py-4 rounded-full glass glow-border font-semibold hover:bg-secondary/60 transition-all"
          >
            Get in touch
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a href="https://www.linkedin.com/in/anwar-kurbaj-8749873a7" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:text-neon-cyan hover:shadow-glow transition-all"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:anwrkurbaj@gmail.com" className="p-3 rounded-full glass hover:text-neon-magenta hover:shadow-glow transition-all"><Mail className="h-4 w-4" /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:text-neon-violet hover:shadow-glow transition-all"><Github className="h-4 w-4" /></a>
          </div>
        </motion.div>

        {/* tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 max-w-3xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]"
        >
          <div className="flex gap-3 animate-marquee w-max">
            {[...techs, ...techs].map((t, i) => (
              <span key={i} className="font-mono text-xs px-4 py-2 rounded-full glass whitespace-nowrap text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <span className="font-mono text-xs">scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
