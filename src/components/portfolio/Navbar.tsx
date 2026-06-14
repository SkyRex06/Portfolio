import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const brandInitial = "S";
  const brandLabel = "Shivam";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(pct);

      const sections = navLinks
        .map((l) => document.getElementById(l.id))
        .filter(Boolean) as HTMLElement[];
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= y) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-vibrant transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed inset-x-0 top-3 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all",
          scrolled ? "glass-strong shadow-elegant" : "glass",
        )}
      >
        <button onClick={() => handleClick("home")} className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-vibrant font-bold text-primary-foreground shadow-elegant">
            {brandInitial}
          </span>
          <span className="hidden font-display text-sm font-semibold sm:inline">{brandLabel}</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className={cn(
                "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={profile.resumeUrl} download="Shivam Resume.pdf" className="hidden sm:block">
            <Button
              size="sm"
              className="bg-gradient-vibrant text-primary-foreground hover:opacity-90"
            >
              <Download className="mr-1.5 h-4 w-4" />
              Resume
            </Button>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-lg glass md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-3 top-20 z-50 rounded-2xl glass-strong p-3 md:hidden"
        >
          <div className="flex flex-col">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                className={cn(
                  "rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors",
                  active === l.id
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:bg-white/5",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
