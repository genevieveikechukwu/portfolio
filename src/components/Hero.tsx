import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { FloatingElements } from "./FloatingElements";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <FloatingElements />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-background/20" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Animated Avatar/Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-accent rounded-full flex items-center justify-center shadow-glow animate-float">
              <Sparkles className="w-16 h-16 text-accent-foreground" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-glow"
          >
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Mmachukwu Ikechukwu Genevieve
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-glow mb-2">
              Fullstack Developer & Automation Specialist
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Creative and playful - building digital solutions with personality and innovation
            </p>
          </motion.div>

          {/* Main Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              <span className="text-secondary-glow font-semibold">Fullstack solutions that work while you sleep utilizing AI</span>
              <br />
              I help businesses scale efficiently by creating automated systems and robust web applications that handle the heavy lifting.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button variant="hero" size="xl" className="group">
              Let's Build Something Amazing
              <Sparkles className="ml-2 group-hover:animate-pulse" />
            </Button>
            <Button variant="glow" size="xl">
              View My Work
              <ArrowDown className="ml-2 animate-bounce" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Mail, href: "mailto:your-email@example.com", label: "Email" },
              { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, type: "spring", bounce: 0.5 }}
                className="w-12 h-12 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full flex items-center justify-center hover:bg-primary/30 hover:shadow-glow hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-primary-glow" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;