import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Linkedin } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "anwrkurbaj@gmail.com", href: "mailto:anwrkurbaj@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+963 99 626 0127", href: "https://wa.me/963996260127" },
  { icon: Linkedin, label: "LinkedIn", value: "anwar-kurbaj", href: "https://www.linkedin.com/in/anwar-kurbaj-8749873a7" },
  { icon: MapPin, label: "Location", value: "Sweida, Syria", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 container">
      <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-20 glass glow-border">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-neon-cyan/30 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-neon-magenta/30 blur-[140px]" />

        <div className="relative max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-neon-cyan mb-6 flex items-center gap-2"
          >
            <span className="h-px w-8 bg-neon-cyan" /> // 06. Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            Let's build <br /><span className="text-gradient">something great.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-muted-foreground text-lg max-w-xl"
          >
            Always open to new opportunities and exciting projects. Reach out and let's chat.
          </motion.p>

          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 * i }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 p-5 rounded-2xl glass hover:shadow-glow transition-all duration-300"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center text-primary-foreground shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-medium truncate group-hover:text-gradient transition-all">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
        <div>© {new Date().getFullYear()} Anwar Karbaj — Crafted with care.</div>
        <div>Designed & coded by Anwar.</div>
      </footer>
    </section>
  );
}
