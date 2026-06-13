import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      {/* Background mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/30 blur-3xl animate-blob" />
        <div className="absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-accent/25 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-[-10%] left-[10%] h-[380px] w-[380px] rounded-full bg-brand-3/20 blur-3xl animate-blob [animation-delay:-12s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,oklch(1_0_0/0.06)_1px,transparent_0)] [background-size:28px_28px] opacity-50" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </span>

          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 text-2xl font-semibold sm:text-3xl">
            <span className="text-gradient-brand">{profile.title}</span>
          </p>

          <p className="mt-3 text-sm font-medium text-muted-foreground sm:text-base">{profile.subheading}</p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{profile.description}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-vibrant text-primary-foreground shadow-elegant hover:opacity-95"
            >
              View Projects <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
              <a href={profile.resumeUrl} download="Shivam Resume.pdf">
                <Button size="lg" variant="outline" className="glass border-white/15 hover:bg-white/10">
                  <Download className="mr-1.5 h-4 w-4" /> Resume
                </Button>
              </a>
             
            <Button
              size="lg"
              variant="ghost"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glass border-white/15 hover:bg-white/10"
            >
              <Mail className="mr-1.5 h-4 w-4" /> Contact Me
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-3 text-muted-foreground">
            {[
              { href: profile.socials.github, Icon: Github, label: "GitHub", external: true },
              { href: profile.socials.linkedin, Icon: Linkedin, label: "LinkedIn", external: true },
              { href: profile.socials.leetcode, Icon: Code2, label: "LeetCode", external: true },
              { href: profile.socials.email, Icon: Mail, label: "Email", external: false },
            ].map(({ href, Icon, label, external }) => (
              <a
                key={label}
                href={href}
                onClick={external ? undefined : (e) => {
                  e.preventDefault();
                  window.location.href = href;
                }}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl glass transition-all hover:-translate-y-0.5 hover:text-foreground hover:shadow-elegant"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-vibrant opacity-40 blur-2xl animate-pulse" />
          <div className="relative rounded-[2rem] p-[2px] bg-gradient-vibrant shadow-elegant animate-float">
            <div className="overflow-hidden rounded-[1.9rem] bg-card">
              <img
                src={profile.image}
                alt={profile.name}
                width={896}
                height={1152}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-6 top-10 hidden rounded-2xl glass-strong px-3 py-2 text-xs shadow-elegant sm:block"
          >
            <div className="font-semibold">🏆 Hackathon obsessed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 bottom-12 hidden rounded-2xl glass-strong px-3 py-2 text-xs shadow-elegant sm:block"
          >
            <div className="font-semibold">⚡ Aspiring Developer</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
