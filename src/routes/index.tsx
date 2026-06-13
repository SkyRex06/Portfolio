import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Journey } from "@/components/portfolio/Journey";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Hackathons } from "@/components/portfolio/Hackathons";
import { Leadership } from "@/components/portfolio/Leadership";
import { Research } from "@/components/portfolio/Research";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivam Prasad — Full Stack Developer & AI Builder" },
      {
        name: "description",
        content:
          "Portfolio of Shivam Prasad — Software Developer Intern, Vice President at AI Renaissance, hackathon winner, and AI research contributor.",
      },
      { property: "og:title", content: "Shivam Prasad — Full Stack Developer & AI Builder" },
      {
        property: "og:description",
        content: "AI-powered products, scalable platforms, and impactful tech communities.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Journey />
        <Projects />
        <Experience />
        <Hackathons />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
