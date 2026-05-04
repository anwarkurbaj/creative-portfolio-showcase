import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Cpu, Sparkles } from "lucide-react";

const stats = [
  { label: "Years coding", value: "4+" },
  { label: "Projects shipped", value: "20+" },
  { label: "Technologies", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 container">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="// 01. About Me" title="Building software that feels alive." />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              I'm a software engineer based in Syria, focused on shipping{" "}
              <span className="text-foreground">cross-platform mobile apps</span> with Flutter and{" "}
              <span className="text-foreground">performant WordPress sites</span> for international clients.
            </p>
            <p>
              I move fluently between code, design and AI tooling — using modern workflows (Lovable, ChatGPT) to
              go from idea to production faster, without sacrificing craft.
            </p>
            <p>
              Beyond shipping product, I've trained students in C++, algorithms and competitive programming,
              and I love the moment a tricky concept finally clicks.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-5"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <div className="relative rounded-3xl p-8 glass glow-border shadow-card">
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-neon-magenta/30 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-neon-cyan/30 blur-3xl" />
            <div className="font-mono text-xs text-muted-foreground mb-4">~/anwar.json</div>
            <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
{`{
  `}<span className="text-neon-cyan">"role"</span>: <span className="text-neon-magenta">"Software Engineer"</span>,{`
  `}<span className="text-neon-cyan">"focus"</span>: [<span className="text-neon-magenta">"Flutter"</span>, <span className="text-neon-magenta">"WordPress"</span>],{`
  `}<span className="text-neon-cyan">"location"</span>: <span className="text-neon-magenta">"Sweida, Syria"</span>,{`
  `}<span className="text-neon-cyan">"learning"</span>: <span className="text-neon-magenta">"AI workflows"</span>,{`
  `}<span className="text-neon-cyan">"open_to_work"</span>: <span className="text-neon-violet">true</span>{`
}`}
            </pre>
            <div className="mt-6 flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-muted-foreground"><Code2 className="h-3.5 w-3.5 text-neon-cyan" /> Clean</div>
              <div className="flex items-center gap-1.5 text-muted-foreground"><Cpu className="h-3.5 w-3.5 text-neon-magenta" /> Performant</div>
              <div className="flex items-center gap-1.5 text-muted-foreground"><Sparkles className="h-3.5 w-3.5 text-neon-violet" /> Crafted</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
