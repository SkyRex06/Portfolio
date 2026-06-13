import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  className?: string;
  aspect?: string;
  src?: string;
  alt?: string;
};

export function ImagePlaceholder({ label = "Image", className, aspect = "aspect-video", src, alt }: Props) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-2xl border border-white/10 glass", aspect, className)}>
        <img src={src} alt={alt ?? label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 glass group",
        aspect,
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-brand-2/15" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground transition-transform group-hover:scale-105">
        <ImageIcon className="h-7 w-7 opacity-60" />
        <span className="text-xs uppercase tracking-widest opacity-70">{label}</span>
      </div>
      <div className="pointer-events-none absolute -inset-1 bg-[linear-gradient(120deg,transparent,oklch(1_0_0/0.08),transparent)] bg-[length:200%_100%] animate-gradient opacity-50" />
    </div>
  );
}
