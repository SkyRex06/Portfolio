import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { hackathons } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Gallery } from "./Gallery";
import { cn } from "@/lib/utils";

export function Hackathons() {
  return (
    <section id="hackathons" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Hackathons" title="Wins, Finals & Demo Days" description="Building under pressure — shipping, presenting, and winning." />

        <div className="mt-14 space-y-10">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-3xl glass-strong p-8"
            >
              <div className={cn("pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-60", h.tone)} />
              <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    <Trophy className="h-3.5 w-3.5 text-amber-300" /> {h.achievement}
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-bold">
                    <span className="text-gradient">{h.name}</span>
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-accent">{h.project}</p>
                  <p className="mt-3 text-muted-foreground">{h.description}</p>
                </div>
                <Gallery items={h.gallery} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
