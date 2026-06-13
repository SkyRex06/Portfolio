import { motion } from "framer-motion";
import { leadership } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Gallery } from "./Gallery";

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Community" title="Leadership & Community Impact" description="Leading workshops, summits, and student communities." />

        <div className="mt-10 space-y-10">
          {leadership.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-3xl glass p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    <span className="text-gradient">{l.title}</span>
                  </h3>
                  <p className="mt-3 text-muted-foreground">{l.description}</p>
                </div>
                <Gallery items={l.gallery} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
