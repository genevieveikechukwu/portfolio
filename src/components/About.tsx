import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Zap, 
  Users, 
  Trophy, 
  Target, 
  Sparkles,
  ArrowRight,
  Clock,
  TrendingUp
} from "lucide-react";

const About = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 95, category: "Frontend" },
    { name: "React", level: 95, category: "Frontend" },
    { name: "Node.js", level: 95, category: "Backend" },
    { name: "Python", level: 90, category: "Backend" },
    { name: "AWS", level: 90, category: "Cloud" },
    { name: "Process Automation", level: 95, category: "Automation" },
    { name: "API Design", level: 95, category: "Architecture" },
    { name: "AI/ML Integration", level: 85, category: "AI" }
  ];

  const achievements = [
    { icon: Clock, value: "40+", label: "Hours Saved Weekly", description: "Average time saved per client through automation" },
    { icon: TrendingUp, value: "300%", label: "Revenue Increase", description: "Average business growth for clients" },
    { icon: Users, value: "25+", label: "Happy Clients", description: "Businesses transformed through automation" },
    { icon: Code, value: "50+", label: "Projects Delivered", description: "Custom solutions built and deployed" }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-accent rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl" />
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
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-glow">
              About Me
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating solutions that make businesses more efficient, 
            scalable, and profitable through the power of automation and modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Professional Summary */}
            <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold text-secondary">My Mission</h3>
              </div>
              <p className="text-foreground/90 leading-relaxed text-lg">
                I specialize in building <span className="text-primary-glow font-semibold">fullstack applications</span> and 
                <span className="text-secondary-glow font-semibold"> automation systems</span> that solve real business problems. 
                With expertise in modern web technologies and a passion for process optimization, I help businesses 
                scale efficiently while reducing manual work and operational costs.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Code, title: "Full-Stack Development", desc: "End-to-end web applications with modern tech stacks" },
                { icon: Zap, title: "Process Automation", desc: "Workflow optimization and intelligent automation systems" },
                { icon: Users, title: "Client Success", desc: "Focus on measurable business outcomes and ROI" },
                { icon: Trophy, title: "Quality Delivery", desc: "Clean code, scalable architecture, and reliable solutions" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card/50 rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300 group hover-lift"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:text-primary-glow transition-colors" />
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Personal Touch */}
            <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
              <h4 className="text-xl font-bold text-accent mb-4">Beyond the Code</h4>
              <p className="text-foreground/90 leading-relaxed">
                When I'm not building automation systems, I love experimenting with new technologies, 
                contributing to open-source projects, and helping other developers grow their skills. 
                I believe that the best solutions come from understanding both the technical and business sides of a problem.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-primary rounded-xl p-6 text-center hover-lift group"
                >
                  <achievement.icon className="w-8 h-8 text-primary-foreground mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-primary-foreground mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-primary-foreground/90 font-medium mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-primary-foreground/70">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
              <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Technical Expertise
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="hero" size="xl" className="group">
                Let's Work Together
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;