import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { research } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function Research() {
  return (
    <section id="research" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Research" title="Research & Innovation" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-8 rounded-3xl glass-strong p-8 lg:grid-cols-[1.1fr_1fr]"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" /> Research Project
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">
              <span className="text-gradient">{research.title}</span>
            </h3>
            <p className="mt-4 text-muted-foreground">{research.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {research.highlights.map((h) => (
                <div key={h} className="rounded-xl glass px-3 py-2 text-center text-xs font-medium">
                  {h}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a href={research.paperUrl} target="_blank" rel="noreferrer">
                <Button className="bg-gradient-vibrant text-primary-foreground">
                  <BookOpen className="mr-1.5 h-4 w-4" /> Case Study{" "}
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </a>
              <a href={research.repoUrl} target="_blank" rel="noreferrer">
                <Button variant="outline" className="glass border-white/15">
                  <Github className="mr-1.5 h-4 w-4" /> Repository
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {research.visuals.slice(0, 4).map((v, i) => (
              <ImagePlaceholder
                key={v + i}
                label={v}
                aspect={i === 0 ? "aspect-square col-span-2" : "aspect-square"}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
