import { Navbar } from "../components/portfolio/Navbar";
import { Hero } from "../components/portfolio/Hero";
import { Skills } from "../components/portfolio/Skills";
import { Journey } from "../components/portfolio/Journey";
import { Projects } from "../components/portfolio/Projects";
import { Experience } from "../components/portfolio/Experience";
import { Hackathons } from "../components/portfolio/Hackathons";
import { Leadership } from "../components/portfolio/Leadership";
import { Research } from "../components/portfolio/Research";
import { Contact } from "../components/portfolio/Contact";
import { Footer } from "../components/portfolio/Footer";
import { Toaster } from "../components/ui/sonner";

export function IndexPage() {
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
        <Research />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
