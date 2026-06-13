import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left", className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-vibrant" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>}
    </motion.div>
  );
}
