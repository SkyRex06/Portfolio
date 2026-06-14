import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const cards = [
  { Icon: Mail, label: "Email", value: "Drop me a line", href: profile.socials.email },
  { Icon: Github, label: "GitHub", value: "See my code", href: profile.socials.github },
  { Icon: Linkedin, label: "LinkedIn", value: "Let's connect", href: profile.socials.linkedin },
  { Icon: Code2, label: "LeetCode", value: "Watch me grind", href: profile.socials.leetcode },
];

export function Contact() {
  // Kept to avoid changing component structure more than necessary.
  const [_sending] = useState(false);

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Meaningful Together"
          description="Open to internships, collaborations, hackathons, AI projects, and innovative ideas."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid grid-cols-2 gap-3">
            {cards.map(({ Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href.startsWith("mailto:") ? href : href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl glass-strong p-5 transition-shadow hover:shadow-elegant"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-vibrant text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="mt-4 font-display text-lg font-semibold">{label}</div>
                <div className="text-sm text-muted-foreground">{value}</div>
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-brand/30 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl glass-strong p-6 md:p-8"
          >
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                I’m currently not using a hosted backend for contact submissions.
              </p>
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Email
                </div>
                <Button asChild className="mt-3 bg-gradient-vibrant text-primary-foreground">
                  <a href={profile.socials.email}>Send an email</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
