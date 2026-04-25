import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, ArrowRight } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-background/60 backdrop-blur-2xl border-b border-primary/10 shadow-lg" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("#home")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-deep to-primary rounded-xl flex items-center justify-center shadow-glow group-hover:rotate-12 transition-transform duration-300">
              <Code className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-primary-deep leading-none">BIDYUT</span>
              <span className="text-[10px] font-black tracking-widest text-muted-foreground uppercase opacity-60">Architect</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems?.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-bold tracking-widest uppercase text-foreground/70 hover:text-primary-deep transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-deep transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="bg-primary-deep hover:bg-primary-deep/90 text-white shadow-xl hover:shadow-primary/20 transition-all duration-500 rounded-full px-8 py-6 font-bold uppercase tracking-widest text-xs h-auto"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary-deep"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-background/98 backdrop-blur-3xl z-[-1] lg:hidden transition-all duration-500 flex flex-col items-center justify-center ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}>
        <div className="flex flex-col items-center gap-10 p-10">
          {navItems?.map((item, idx) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`text-4xl font-black uppercase tracking-tighter hover:text-primary-deep transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.name}
            </button>
          ))}
          <Button 
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="bg-primary-deep text-white px-10 py-8 rounded-full text-xl font-bold mt-10"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;