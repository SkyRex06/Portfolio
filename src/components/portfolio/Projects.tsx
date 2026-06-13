import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Featured Work" title="Selected Projects" description="A snapshot of the products, platforms, and research I've shipped." />

        <div className="mt-14 grid gap-7">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-6 shadow-elegant transition-all hover:-translate-y-1 md:p-8"
            >
              <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <ImagePlaceholder src={p.image} alt={p.title} aspect="aspect-[16/10]" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-gradient-vibrant px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                      {p.badge}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.subtitle}</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                    <span className="text-gradient">{p.title}</span>
                  </h3>
                  <p className="mt-3 text-muted-foreground">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full glass px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Button size="sm" variant="outline" className="glass border-white/15">
                          <Github className="mr-1.5 h-4 w-4" /> GitHub
                        </Button>
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <Button size="sm" variant="outline" className="glass border-white/15">
                          <ExternalLink className="mr-1.5 h-4 w-4" /> Demo
                        </Button>
                      </a>
                    )}
                    <Link to="/projects/$slug" params={{ slug: p.slug }}>
                      <Button size="sm" className="bg-gradient-vibrant text-primary-foreground">
                        <FileText className="mr-1.5 h-4 w-4" /> Overview
                        <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
