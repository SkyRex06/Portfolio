import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-vibrant font-bold text-primary-foreground">
              {profile.initials}
            </span>
            <div>
              <div className="font-display text-lg font-bold">{profile.name}</div>
              <div className="text-xs text-muted-foreground">{profile.title}</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Building AI-powered products, scalable systems, and impactful communities.
          </p>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Quick Links</div>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <button onClick={() => scrollTo(l.id)} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Find Me</div>
          <div className="mt-4 flex gap-2">
            {[
              { href: profile.socials.github, Icon: Github, label: "GitHub" },
              { href: profile.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: profile.socials.leetcode, Icon: Code2, label: "LeetCode" },
              { href: profile.socials.email, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl glass transition-all hover:-translate-y-0.5"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-5 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Crafted with care.
      </div>
    </footer>
  );
}
