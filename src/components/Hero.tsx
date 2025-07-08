import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Phone, Linkedin, Code } from "lucide-react";
import profilePhoto from "@/assets/image.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-glow/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold gradient-text text-shadow"
            >
              Bidyut Samanta
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-muted-foreground font-medium"
            >
              Frontend Developer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-foreground/80 leading-relaxed max-w-xl"
            >
              3.5 years of crafting beautiful, high-performance web applications with{" "}
              <span className="font-semibold text-primary-deep">React.js</span>,{" "}
              <span className="font-semibold text-primary-deep">Next.js</span>, and{" "}
              <span className="font-semibold text-primary-deep">TypeScript</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("#contact")}
                  className="bg-primary-deep hover:bg-primary-deep/90 text-white shadow-medium hover:shadow-strong transition-all duration-300 relative group"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection("#projects")}
                  className="border-primary-deep text-primary-deep hover:bg-primary-deep hover:text-white transition-all duration-300 relative group"
                >
                  <Code className="mr-2 h-4 w-4" />
                  View Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-deep transition-all duration-300 group-hover:w-full" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-6 pt-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 7984626866
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                bidyutsamanta293@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-glow opacity-20 rounded-full blur-xl"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={profilePhoto}
                alt="Bidyut Samanta"
                className="relative w-80 h-80 rounded-full object-cover shadow-strong ring-4 ring-primary/20"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;