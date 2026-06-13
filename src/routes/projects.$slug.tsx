import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/portfolio";
import { ImagePlaceholder } from "@/components/portfolio/ImagePlaceholder";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Shivam Prasad` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: `${loaderData.project.title} — Case Study` },
          { property: "og:description", content: loaderData.project.description },
        ]
      : [],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-5 py-32 text-center">
        <h1 className="font-display text-3xl font-bold">Project not found</h1>
        <Link to="/" className="mt-4 inline-block text-accent underline">Go home</Link>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <div className="dark relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh]">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute right-0 top-32 h-[300px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <Link to="/" className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium hover:bg-white/10">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              <Button size="sm" variant="outline" className="glass border-white/15">
                <Github className="mr-1.5 h-4 w-4" /> GitHub
              </Button>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              <Button size="sm" className="bg-gradient-vibrant text-primary-foreground">
                <ExternalLink className="mr-1.5 h-4 w-4" /> Demo
              </Button>
            </a>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-24">
        <span className="rounded-full bg-gradient-vibrant px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
          {project.badge}
        </span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
          <span className="text-gradient">{project.title}</span>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{project.subtitle}</p>

        <div className="mt-10">
          <ImagePlaceholder src={project.image} alt={project.title} aspect="aspect-[16/9]" />
        </div>

        {project.videoUrl && (
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold">Video Demo</h2>
            <div className="mt-4 overflow-hidden rounded-2xl glass-strong">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/MA01r7H-sqk`}
                  className="absolute inset-0 h-full w-full"
                  title={`${project.title} video demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}


        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold">Overview</h2>
            <p className="mt-3 text-muted-foreground">{project.longDescription}</p>

            <h2 className="mt-10 font-display text-2xl font-bold">Highlights</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li key={h} className="rounded-2xl glass px-4 py-3 text-sm">
                  • {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl font-bold">Gallery</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {(project.imageGallery ?? []).length > 0
                ? project.imageGallery!.map((img, i) => (
                    <ImagePlaceholder
                      key={img.caption + i}
                      src={img.src}
                      label={img.caption}
                      aspect={i === 0 ? "aspect-video col-span-2" : "aspect-video"}
                    />
                  ))
                : project.gallery.map((g, i) => (
                    <ImagePlaceholder
                      key={g.caption + i}
                      label={g.caption}
                      aspect={i === 0 ? "aspect-video col-span-2" : "aspect-video"}
                    />
                  ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl glass-strong p-6">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Tech Stack</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full glass px-2.5 py-1 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl glass-strong p-6">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">More Projects</div>
              <div className="mt-3 flex flex-col gap-2">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="rounded-xl glass px-3 py-2 text-sm hover:bg-white/10"
                    >
                      → {p.title}
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
