import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Filter, Briefcase, Zap, Star } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  projectType: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completionDate: string;
  client: string;
  businessImpact: string;
  duration: string;
  teamSize: string;
  challenges: string;
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load projects from data.json
    const loadProjects = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setProjects(data.projects);
        setFilteredProjects(data.projects);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === category));
    }
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-glow">
              Featured Projects
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how I've helped businesses automate their processes, scale efficiently, 
            and achieve remarkable results through custom development solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => filterProjects(category)}
              className="transition-all duration-300"
            >
              {category === "All" && <Filter className="w-4 h-4 mr-2" />}
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;