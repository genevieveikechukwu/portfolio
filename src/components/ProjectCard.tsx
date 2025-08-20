import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Calendar, Users, TrendingUp } from "lucide-react";

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
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group project-card rounded-2xl p-6 space-y-6 hover-lift"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-accent text-accent-foreground border-0">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-primary/20 text-primary-glow border-primary/30">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary-glow transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Business Impact */}
        <div className="bg-secondary/20 rounded-lg p-4 border border-secondary/30">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">Business Impact</span>
          </div>
          <p className="text-sm text-foreground/80">
            {project.businessImpact}
          </p>
        </div>

        {/* Client Testimonial */}
        {/* <div className="bg-accent/20 rounded-lg p-4 border border-accent/30">
          <blockquote className="text-sm italic text-foreground/90 mb-2">
            "{project?.testimonial?.quote}"
          </blockquote>
          <cite className="text-xs text-accent font-medium">
            — {project?.testimonial?.author}, {project?.testimonial?.position}
          </cite>
        </div> */}

        {/* Project Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{project.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{project.teamSize}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4} more
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {project.liveUrl && (
            <Button variant="default" size="sm" className="flex-1" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
          <Button variant="secondary" size="sm">
            Case Study
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;