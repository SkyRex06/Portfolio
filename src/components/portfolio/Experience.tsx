import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience, type ExperienceItem } from "@/data/portfolio";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Experience" title="Where I've Built" />

        <div className="mt-14 space-y-10">
          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid gap-8 rounded-3xl glass-strong p-8 lg:grid-cols-[1.1fr_1fr]"
            >
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Briefcase className="h-4 w-4" /> {e.duration}
                </div>
                <h3 className="mt-3 font-display text-3xl font-bold">
                  <span className="text-gradient">{e.role}</span>
                </h3>
                <p className="mt-1 text-lg font-semibold text-accent">
                  {e.companyUrl ? (
                    <a
                      href={e.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-white/30 hover:decoration-white/80"
                    >
                      @ {e.company}
                    </a>
                  ) : (
                    <>@ {e.company}</>
                  )}
                </p>
                <p className="mt-4 text-muted-foreground">{e.description}</p>

                {e.companyUrl && (
                  <div className="mt-5">
                    <a
                      href={e.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-vibrant px-4 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                    >
                      Visit Company Website
                    </a>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <span key={t} className="rounded-full glass px-2.5 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                {(e.gallery?.[0]?.src && (
                  <ImagePlaceholder
                    label={e.gallery[0].caption}
                    src={e.gallery[0].src}
                    aspect="aspect-video"
                    className="col-span-2"
                  />
                )) || (
                  <ImagePlaceholder label="Offer letter / onboarding document" aspect="aspect-video" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
