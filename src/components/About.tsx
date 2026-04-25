import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Trophy, Globe, Code2, Cpu, Laptop, Rocket } from "lucide-react";

const About = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    gsap.from(".about-card-premium", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-card-premium",
        start: "top 85%",
      }
    });

    // Apple-style Text Reveal
    const lines = gsap.utils.toArray(".reveal-line");
    lines.forEach((line: any) => {
      gsap.to(line, {
        opacity: 1,
        color: "#0c1538", // Raw hex value of primary-deep for GSAP compatibility
        duration: 1,
        scrollTrigger: {
          trigger: line,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        }
      });
    });

    gsap.from(".skill-badge", {
      scale: 0,
      opacity: 0,
      stagger: 0.03,
      duration: 0.4,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".skills-container",
        start: "top 90%",
      }
    });

    gsap.from(".stat-card", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".stats-grid",
        start: "top 90%",
      }
    });
  }, { scope: container });

  const skills = [
    "Next.js", "Javascript", "TypeScript", "Redux Toolkit", "Zustand", "Tailwind CSS", 
    "Shadcn/UI", "Framer Motion", "Material UI", "Node.js", "Express.js", "MongoDB", "Jest", 
    "GraphQL", "REST APIs", "WebSocket", "Lightweight Charts", "Stripe", "Twilio", "Git", "Vercel"
  ];

  const stats = [
    { label: "Years Experience", value: "4+", icon: <Laptop className="h-5 w-5" /> },
    { label: "Projects Completed", value: "25+", icon: <Rocket className="h-5 w-5" /> },
    { label: "Technologies Mastered", value: "15+", icon: <Cpu className="h-5 w-5" /> },
    { label: "Satisfied Clients", value: "100%", icon: <Trophy className="h-5 w-5" /> }
  ];

  return (
    <section ref={container} id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="about-header text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">About My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
            Passionate architect of digital experiences with a focus on performance, scalability, and breathtaking UI.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
          {/* Main Content Card */}
          <div className="lg:col-span-12 about-card-premium">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 backdrop-blur-xl overflow-hidden rounded-[40px]">
              <CardContent className="p-8 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-deep text-sm font-bold tracking-widest uppercase mb-4">
                      <Code2 className="h-4 w-4" />
                      Senior Developer
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-primary-deep leading-tight">
                      Crafting innovative solutions through code.
                    </h3>
                    <p className="text-2xl lg:text-3xl text-foreground/40 leading-tight font-medium space-y-4">
                      <span className="reveal-line block italic">With over 4 years of professional experience,</span>
                      <span className="reveal-line block">I specialize in building high-performance, user-centric applications.</span>
                      <span className="reveal-line block">My expertise lies in <span className="font-bold underline decoration-primary/20">Next.js and TypeScript</span>,</span>
                      <span className="reveal-line block">integrated with robust backend architectures and scalable APIs.</span>
                    </p>
                    
                    <div className="flex flex-wrap gap-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>Based in Navsari, India</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <span>Available for Remote Work</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <span>Continuous Learner</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <Cpu className="h-6 w-6 text-primary-deep" />
                        Core Technology Stack
                      </h4>
                      <div className="skills-container flex flex-wrap gap-3">
                        {skills?.map((skill) => (
                          <div key={skill} className="skill-badge">
                            <Badge 
                              variant="secondary" 
                              className="px-4 py-2 text-sm font-medium bg-white/50 backdrop-blur-md border border-primary/10 hover:bg-primary-deep hover:text-white transition-all duration-300 shadow-sm"
                            >
                              {skill}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-12 mt-12">
            <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats?.map((stat, index) => (
                <div key={stat.label} className="stat-card">
                  <Card className="border-0 shadow-xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 rounded-[30px] group overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                      {stat.icon}
                    </div>
                    <CardContent className="p-8 text-center relative z-10">
                      <div className="text-4xl lg:text-5xl font-black text-primary-deep mb-3 group-hover:scale-110 transition-transform duration-500">
                        {stat.value}
                      </div>
                      <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default About;