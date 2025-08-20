import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-primary rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Professional Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto  flex items-center justify-center shadow-glow relative overflow-hidden group">
       
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
              <span className="font-normal text-foreground">Mmachukwu Ikechukwu</span>
              <br />
              <span className="font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Genevieve
              </span>
            </h1>

            {/* Professional Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl text-primary font-medium">
                Fullstack Developer & Automation Specialist
              </h2>
              <div className="w-24 h-0.5 bg-gradient-primary mx-auto opacity-60" />
            </motion.div>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            >
              I create <span className="text-secondary font-medium">automated solutions</span> and 
              <span className="text-accent font-medium"> scalable web applications</span> that 
              transform how businesses operate, saving time and driving growth through intelligent automation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button 
                variant="default" 
                size="lg" 
                className="group px-8 py-3 rounded-full transition-all duration-500 hover:shadow-elegant"
               
              >
              <a href="mailto:genevieveikechukwum@gmail.com">
                     Start Your Project
                </a>
             
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group px-8 py-3 rounded-full border-primary/30 hover:border-primary/60 transition-all duration-500"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex justify-center gap-6 pt-8"
            >
              {[
                { icon: Mail, href: "mailto:genevieveikechukwum@gmail.com", label: "Email" },
                { icon: Github, href: "https://github.com/genevieveikechukwu", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/genevieve-ikechukwu", label: "LinkedIn" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                  className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <div className="w-0.5 h-8 bg-gradient-to-b from-transparent via-primary/50 to-transparent mb-2" />
          <ArrowDown className="w-4 h-4 opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;