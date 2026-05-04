import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const items = [
  {
    period: "Mar 2025 — Present",
    role: "WordPress Developer & Support Developer",
    company: "BeSoshial",
    desc: "Build and maintain WordPress sites, optimize performance, manage updates and on-going technical support.",
    tags: ["WordPress", "PHP", "Performance", "SEO"],
    links: ["pi-dubai.com", "pipower.ae"],
  },
  {
    period: "Jan 2025 — Present",
    role: "Technical Support",
    company: "Mays Private School",
    desc: "Provide technical support to staff and students, manage and improve digital learning systems.",
    tags: ["IT Support", "Networking"],
  },
  {
    period: "2024 · 6 months",
    role: "Flutter Developer Intern",
    company: "Darbeni",
    desc: "Built cross-platform mobile apps with focus on UI design, API integration and performance tuning.",
    tags: ["Flutter", "Dart", "REST APIs"],
  },
  {
    period: "2021 — 2024",
    role: "C++ Trainer & Support",
    company: "Awnak",
    desc: "Taught C++ programming and algorithms, prepared students for competitions and provided tech support.",
    tags: ["C++", "Algorithms", "Teaching"],
  },
  {
    period: "Mar 2022 — 2023",
    role: "Technical Support",
    company: "Smart Syrian Virtual School",
    desc: "Maintained Flutter applications and supported multi-platform features and UI improvements.",
    tags: ["Flutter", "Support"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 container">
      <SectionHeading
        eyebrow="// 02. Experience"
        title="A few stops along the way."
        description="Five years across mobile, web, education and IT support — building, fixing and teaching."
      />

      <div className="relative">
        {/* timeline line */}
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

        <div className="space-y-14">
          {items.map((it, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center`}
              >
                {/* dot */}
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-background border-2 border-neon-cyan shadow-glow z-10" />

                <div className={`pl-10 md:pl-0 ${left ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                  <div className="font-mono text-xs text-neon-magenta mb-2">{it.period}</div>
                  <h3 className="text-2xl font-semibold leading-tight">{it.role}</h3>
                  <div className="text-neon-cyan mt-1 font-medium">{it.company}</div>
                  <p className="mt-3 text-muted-foreground">{it.desc}</p>
                  <div className={`mt-4 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                    {it.tags.map((t) => (
                      <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full glass text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  {it.links && (
                    <div className={`mt-3 flex flex-wrap gap-3 text-xs font-mono text-muted-foreground ${left ? "md:justify-end" : ""}`}>
                      {it.links.map((l) => (
                        <a key={l} href={`https://${l}`} target="_blank" rel="noreferrer" className="hover:text-neon-cyan transition-colors">↗ {l}</a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
