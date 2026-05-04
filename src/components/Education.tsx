import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const items = [
  { title: "BSc in Informatics Engineering", place: "Al-Baath University", period: "Sep 2021 — Present" },
  { title: "Scientific Baccalaureate", place: "Al-Hukmi School", period: "2020 — 2021" },
];

export default function Education() {
  return (
    <section id="education" className="relative py-32 container">
      <SectionHeading eyebrow="// 05. Education" title="Academic background." />
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glow-border rounded-3xl p-7 flex gap-5 items-start"
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center shadow-glow shrink-0">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-mono text-xs text-neon-magenta">{it.period}</div>
              <h3 className="text-xl font-semibold mt-1">{it.title}</h3>
              <p className="text-muted-foreground">{it.place}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
