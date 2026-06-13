import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const cards = [
  { Icon: Mail, label: "Email", value: "Drop me a line", href: profile.socials.email, external: false },
  { Icon: Github, label: "GitHub", value: "See my code", href: profile.socials.github, external: true },
  { Icon: Linkedin, label: "LinkedIn", value: "Let's connect", href: profile.socials.linkedin, external: true },
  { Icon: Code2, label: "LeetCode", value: "Watch me grind", href: profile.socials.leetcode, external: true },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    setSending(true);
    try {
      const res = await fetch("/server/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed (${res.status})`);
      }

      form.reset();
      toast.success("Message saved! We'll get back to you soon.");
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

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
            {cards.map(({ Icon, label, value, href, external }) => (
              <motion.a
                key={label}
                href={href}
                onClick={external ? undefined : (e) => {
                  e.preventDefault();
                  window.location.href = href;
                }}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
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

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl glass-strong p-6 md:p-8"
          >
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Name</label>
                <Input required name="name" placeholder="Your name" className="glass border-white/15" />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email</label>
                <Input required type="email" name="email" placeholder="you@email.com" className="glass border-white/15" />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea required name="message" placeholder="What are you building?" rows={5} className="glass border-white/15" />
              </div>
              <Button type="submit" disabled={sending} className="bg-gradient-vibrant text-primary-foreground">
                {sending ? "Sending..." : (
                  <>
                    <Send className="mr-1.5 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

