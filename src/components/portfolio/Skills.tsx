import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Toolkit" title="Skills & Stack" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {s.category}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <span
                    key={t}
                    className="rounded-full glass px-3 py-1 text-sm font-medium transition-colors group-hover:bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-vibrant opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
