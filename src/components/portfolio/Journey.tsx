import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { journey } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Journey() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About"
          title="The Journey"
          description="Student → Builder → Hackathon Winner → Intern → Leading Tech Clubs"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl glass-strong p-8"
          >
            <Sparkles className="mb-4 h-6 w-6 text-accent" />
            <h3 className="font-display text-2xl font-bold">Builder. Leader. Researcher.</h3>
            <p className="mt-4 text-muted-foreground">
              I love taking ambiguous problems from zero to one — shipping AI-powered products,
              leading communities, and contributing to research that pushes ideas forward. My work
              sits at the intersection of engineering rigor, AI experimentation, and human impact.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["Builder mindset", "Problem solving", "Leadership", "Innovation"].map((p) => (
                <div key={p} className="rounded-xl glass px-3 py-2 text-center font-medium">
                  {p}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-brand/30 blur-3xl" />
          </motion.div>

          <ol className="relative space-y-5 border-l border-white/10 pl-6">
            <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-brand via-accent to-brand-3 opacity-60" />
            {journey.map((j, i) => (
              <motion.li
                key={j.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative rounded-2xl glass p-5 transition-all hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <span className="absolute -left-[34px] top-6 grid h-5 w-5 place-items-center rounded-full bg-gradient-vibrant shadow-elegant">
                  <span className="h-1.5 w-1.5 rounded-full bg-background" />
                </span>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Step {i + 1}
                </div>
                <div className="mt-1 font-display text-lg font-semibold">{j.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{j.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
