import { Heart, Code, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary-deep via-primary-deep/95 to-black border-t border-white/10 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-glow to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-20 text-center lg:text-left">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 justify-center lg:justify-start group cursor-default">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:rotate-12 transition-transform duration-500">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-black text-white tracking-tighter">BIDYUT SAMANTA</span>
            </div>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
              Transforming complex visions into high-performance, premium digital experiences with excellence and precision.
            </p>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {[
                { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/bidyut-samanta-82706b205" },
                { icon: <Github className="h-5 w-5" />, href: "https://github.com/bidyut293" },
                { icon: <Mail className="h-5 w-5" />, href: "mailto:bidyutsamanta293@gmail.com" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary-deep transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/60 hover:text-white transition-colors text-lg"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Inquiries</h4>
            <div className="space-y-4">
              <p className="text-white/60 text-lg">
                India, Navsari <br />
                Gujarat, 396445
              </p>
              <a 
                href="mailto:bidyutsamanta293@gmail.com" 
                className="block text-primary text-xl font-bold hover:underline"
              >
                bidyutsamanta293@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
            <span>Built with precision by</span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
              <span className="text-white">Bidyut</span>
              <Heart className="h-3 w-3 text-primary fill-primary" />
            </div>
          </div>
          
          <div className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">
            © 2024 ALL RIGHTS RESERVED
          </div>

          <Button
            onClick={scrollToTop}
            variant="ghost"
            className="text-white/60 hover:text-white hover:bg-white/10 rounded-full px-6 font-bold"
          >
            <ArrowUp className="h-5 w-5 mr-2" />
            BACK TO TOP
          </Button>
        </div>
      </div>
      
      {/* Background Decorative Blur */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
    </footer>
  );
};

export default Footer;