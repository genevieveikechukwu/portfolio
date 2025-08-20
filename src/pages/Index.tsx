import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-full animate-pulse" />
        </div>
      }>
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </Suspense>

      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Mmachukwu Ikechukwu Genevieve. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
