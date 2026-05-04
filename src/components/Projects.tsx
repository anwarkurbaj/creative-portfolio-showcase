import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "G Studio Leiden", url: "https://www.gstudioleiden.nl/", desc: "Production website built with AI-assisted workflow (Lovable) for content management and growth.", tags: ["WordPress", "CSS", "PHP"], accent: "from-neon-cyan to-neon-violet" },
  { title: "BeSoshial", url: "https://besoshial.com/", desc: "Marketing website crafted using AI tooling, focused on speed and conversion.", tags: ["Lovable", "AI", "Web"], accent: "from-neon-magenta to-pink-500" },
  { title: "PI Dubai", url: "https://pi-dubai.com/", desc: "WordPress sites for Dubai-based companies with ongoing performance and SEO work.", tags: ["WordPress", "SEO", "Performance"], accent: "from-amber-400 to-neon-magenta" },
  { title: "PI Power", url: "https://pipower.ae/", desc: "Corporate site with continuous technical support and optimisation.", tags: ["WordPress", "Support"], accent: "from-emerald-400 to-neon-cyan" },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 container">
      <SectionHeading
        eyebrow="// 04. Featured"
        title="Selected work."
        description="A few projects I've built or shipped recently."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl overflow-hidden glass glow-border p-8 min-h-[280px] flex flex-col justify-between"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className={`absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />

            <div className="relative flex items-start justify-between">
              <div className="font-mono text-xs text-muted-foreground">0{i + 1} / Featured</div>
              <div className="h-10 w-10 rounded-full glass flex items-center justify-center group-hover:rotate-45 group-hover:text-neon-cyan transition-all duration-300">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-gradient transition-all duration-300">
                {p.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
