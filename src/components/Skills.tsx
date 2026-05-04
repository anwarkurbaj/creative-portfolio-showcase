import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Smartphone, Globe, Wrench, GraduationCap, Sparkles, Terminal } from "lucide-react";

const skills = [
  { icon: Globe, title: "WordPress Developer", desc: "Crafting performant, secure WordPress sites with great UX.", tags: ["WordPress", "PHP", "CSS", "SEO"], color: "from-neon-cyan to-sky-400" },
  { icon: Smartphone, title: "Flutter Developer", desc: "Cross-platform mobile apps with smooth UI and clean architecture.", tags: ["Flutter", "Dart", "REST", "UI/UX"], color: "from-neon-magenta to-pink-400" },
  { icon: Wrench, title: "Technical Support", desc: "Diagnosing and resolving software, hardware and network issues.", tags: ["Troubleshooting", "IT", "Networking"], color: "from-neon-violet to-indigo-400" },
  { icon: GraduationCap, title: "Programming Trainer", desc: "Teaching algorithms and C++ to students preparing for competitions.", tags: ["C++", "Algorithms", "Teaching"], color: "from-amber-400 to-neon-magenta" },
  { icon: Sparkles, title: "AI Tools", desc: "Modern AI workflows to build faster without losing craft.", tags: ["Lovable", "ChatGPT", "AI"], color: "from-neon-cyan to-neon-violet" },
  { icon: Terminal, title: "Languages", desc: "Comfortable across a wide range of languages and stacks.", tags: ["JS", "Python", "C++", "Dart"], color: "from-emerald-400 to-neon-cyan" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 container">
      <SectionHeading
        eyebrow="// 03. Skills"
        title="Tools of the trade."
        description="A versatile toolkit picked up across product, support and teaching."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl p-7 glass glow-border overflow-hidden"
          >
            <div className={`absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />
            <div className="relative">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-primary-foreground shadow-glow`}>
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md bg-secondary/60 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
