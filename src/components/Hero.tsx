import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Phone, Linkedin, Code } from "lucide-react";
import profilePhoto from "@/assets/image.png";

const Hero = () => {
  const container = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const btnGroupRef = useRef(null);
  const contactInfoRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .from(descriptionRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .from(".hero-btn", {
      y: 20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.6")
    .from(contactInfoRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out"
    }, "-=0.4")
    .from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)"
    }, "0.5");

    // Parallax effect for image
    gsap.to(imageRef.current, {
      y: -80,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Content parallax
    gsap.to(".hero-content", {
      y: 40,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Floating animation for background orbs
    gsap.to(".bg-orb-1", {
      x: 100,
      y: 50,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsap.to(".bg-orb-2", {
      x: -150,
      y: -80,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: container });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={container} className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-orb-1 absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="bg-orb-2 absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary-glow/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="hero-content space-y-6">
            <h1 ref={titleRef} className="text-6xl lg:text-8xl font-bold gradient-text text-shadow leading-tight">
              Bidyut Samanta
            </h1>
            
            <div ref={subtitleRef} className="text-2xl lg:text-3xl text-muted-foreground font-semibold flex items-center gap-3">
              <span className="w-12 h-[2px] bg-primary-deep hidden lg:block" />
              Frontend Developer
            </div>

            <p ref={descriptionRef} className="text-xl text-foreground/80 leading-relaxed max-w-xl">
              Over 4 years of crafting <span className="text-primary-deep font-bold">premium</span>, high-performance web applications with{" "}
              <span className="italic font-medium">Next.js and TypeScript.</span>
            </p>

            <div ref={btnGroupRef} className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("#contact")}
                className="hero-btn bg-primary-deep hover:bg-primary-deep/90 text-white shadow-strong transition-all duration-300 px-8 py-6 text-lg rounded-full"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="hero-btn border-2 border-primary-deep text-primary-deep hover:bg-primary-deep hover:text-white transition-all duration-300 px-8 py-6 text-lg rounded-full"
              >
                <Code className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>

            {/* Contact Info */}
            <div ref={contactInfoRef} className="flex flex-wrap gap-8 pt-10 text-sm text-muted-foreground border-t border-primary/10">
              <div className="flex items-center gap-3 hover:text-primary-deep transition-colors cursor-default">
                <Phone className="h-5 w-5 text-primary-deep" />
                <span className="font-medium">+91 7984626866</span>
              </div>
              <div className="flex items-center gap-3 hover:text-primary-deep transition-colors cursor-default">
                <Mail className="h-5 w-5 text-primary-deep" />
                <span className="font-medium">bidyutsamanta293@gmail.com</span>
              </div>
              <a href="https://linkedin.com/in/bidyut-samanta-82706b205" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary-deep transition-colors">
                <Linkedin className="h-5 w-5 text-primary-deep" />
                <span className="font-medium underline decoration-primary/30">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative group">
              <div className="absolute -inset-10 bg-gradient-to-r from-primary/30 to-primary-glow/30 rounded-full blur-[80px] animate-pulse" />
              <div className="relative z-10 w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-[30px] overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm transform hover:rotate-2 transition-transform duration-500">
                <img
                  ref={imageRef}
                  src={profilePhoto}
                  alt="Bidyut Samanta"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-glow rounded-full blur-[50px] opacity-40 z-0" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground opacity-60 hover:opacity-100 transition-opacity cursor-pointer animate-bounce">
          <span className="text-xs uppercase tracking-[0.2em] font-bold">Scroll</span>
          <ArrowDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;