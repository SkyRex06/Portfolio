import { ImagePlaceholder } from "./ImagePlaceholder";

export function Gallery({ items, title }: { items: Array<string | { src: string; label?: string }>; title?: string }) {
  return (
    <div>
      {title && <div className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">{title}</div>}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item, i) => {
          const label = typeof item === "string" ? item : item.label ?? "Image";
          const src = typeof item === "string" ? undefined : item.src;

          // Use a consistent grid that adapts to image aspect:
          // - first tile: wider landscape
          // - rest: square/portrait-friendly
          const aspect = i === 0 ? "aspect-[16/10] col-span-2 sm:col-span-2 sm:row-span-2" : "aspect-[4/3]";

          return (
            <ImagePlaceholder key={label + i} label={label} src={src} aspect={aspect} />
          );
        })}
      </div>
    </div>
  );
}
