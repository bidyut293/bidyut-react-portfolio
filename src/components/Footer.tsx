import { motion } from "framer-motion";
import { Heart, Code, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-primary-deep to-primary border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Code className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Bidyut Samanta</span>
            </div>
            <p className="text-white/80 text-sm">
              Frontend Developer • React.js • Next.js
            </p>
          </motion.div>

          {/* Center: Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 text-white/80">
              <span className="text-sm">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-400 fill-current" />
              </motion.div>
              <span className="text-sm">and</span>
              <Code className="h-4 w-4" />
            </div>
            <p className="text-xs text-white/60 mt-1">
              © 2024 Bidyut Samanta. All rights reserved.
            </p>
          </motion.div>

          {/* Right: Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-6 border-t border-white/20 text-center"
        >
          <p className="text-white/60 text-xs">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;