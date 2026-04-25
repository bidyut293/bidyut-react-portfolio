import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, TrendingUp, Shield, Film, Rocket, MousePointer2 } from "lucide-react";

import projectGleans from "@/assets/project-gleans.png";
import projectEacel from "@/assets/project-eacel.png";
import projectCircle from "@/assets/project-circle.png";
import movieBooking from "@/assets/movie-booking.png";
import pokemon from "@/assets/pokemon.png";
import projectSolvida from "@/assets/project-solvida.png";

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const projects = [
    {
      title: "Solvida",
      description: "Next-gen crypto management with real-time WebSocket analytics.",
      image: projectSolvida,
      technologies: ["Next.js", "WebSocket", "Lightweight Charts"],
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: "from-amber-500 to-orange-600",
      url: 'https://solvida.com/'
    },
    {
      title: "Gleans",
      description: "Modern notification ecosystem with real-time Supabase integration.",
      image: projectGleans,
      technologies: ["Next.js 14", "Supabase", "Twilio"],
      icon: <Zap className="h-8 w-8" />,
      gradient: "from-blue-500 to-indigo-600",
      url: 'https://gleans.me/'
    },
    {
      title: "Eacel AI",
      description: "AI-driven analytics dashboard boosting performance by 45%.",
      image: projectEacel,
      technologies: ["Next.js", "AWS", "Chart.js"],
      icon: <Rocket className="h-8 w-8" />,
      gradient: "from-emerald-500 to-teal-600",
      url: 'https://eacel.ai/'
    },
    {
      title: "The Circle",
      description: "Premium payment integrated app using Stripe and GraphQL.",
      image: projectCircle,
      technologies: ["Next.js", "GraphQL", "Stripe"],
      icon: <Shield className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-600",
      url: 'https://www.thecircleof.co.uk/'
    }
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTween = gsap.to(sectionRef.current, {
      x: () => -(sectionRef.current.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + sectionRef.current.scrollWidth,
        // markers: true,
      }
    });

    // Background text parallax
    gsap.to(".bg-text-parallax", {
      x: -500,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2
      }
    });

    // Content animations for each card as they come into view
    projects.forEach((_, index) => {
      gsap.from(`.proj-card-${index}`, {
        x: 200,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: `.proj-card-${index}`,
          containerAnimation: scrollTween,
          start: "left 90%",
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={triggerRef} id="projects" className="overflow-hidden bg-black py-40">
      <div className="container mx-auto px-6 mb-40 text-center">
         <h2 className="bg-text-parallax text-[12vw] lg:text-[15vw] font-black text-white/5 uppercase tracking-tighter absolute left-0 top-0 pointer-events-none whitespace-nowrap z-0">
          Featured Creations Featured Creations
        </h2>
        <div className="relative z-10 pt-20">
          <h3 className="text-4xl lg:text-7xl font-bold text-white mb-6">Innovative Work</h3>
          <p className="text-xl text-white/50 max-w-2xl mx-auto flex items-center justify-center gap-3">
             <MousePointer2 className="h-5 w-5 animate-bounce" />
             Scroll down to explore horizontally
          </p>
        </div>
      </div>

      <div ref={sectionRef} className="flex flex-nowrap gap-20 px-[20vw] pb-40">
        {projects?.map((project, index) => (
          <div 
            key={index} 
            className={`proj-card-${index} flex-shrink-0 w-[80vw] lg:w-[60vw] h-[70vh] relative group`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[50px] border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
              {/* Image Background */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay`} />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-12 lg:p-20 flex flex-col justify-end text-white">
                <div className="mb-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-10 shadow-glow">
                    {project.icon}
                  </div>
                  <h4 className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter">
                    {project.title}
                  </h4>
                  <p className="text-2xl text-white/70 max-w-xl font-medium leading-relaxed mb-10">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-12">
                    {project.technologies?.map(tech => (
                      <Badge key={tech} className="bg-white/10 text-white border-white/20 px-6 py-2 text-sm backdrop-blur-md rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <Button 
                      onClick={() => window.open(project.url, "_blank")}
                      className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-8 text-xl font-bold shadow-2xl"
                    >
                      <ExternalLink className="mr-3 h-6 w-6" />
                      Live Experience
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-8 text-xl font-bold"
                    >
                      <Github className="mr-3 h-6 w-6" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Extra Space at end */}
        <div className="w-[40vw] flex-shrink-0 flex items-center justify-center">
            <div className="text-center">
                <h4 className="text-4xl text-white/20 font-bold uppercase tracking-widest mb-4">The End</h4>
                <div className="h-[2px] w-40 bg-white/10 mx-auto" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;