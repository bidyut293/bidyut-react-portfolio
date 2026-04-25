import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Zap, Star } from "lucide-react";

const Experience = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".exp-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    gsap.from(".exp-card", {
      x: (index) => (index % 2 === 0 ? -100 : 100),
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".exp-container",
        start: "top 70%",
      }
    });

    // Animate timeline line
    gsap.from(".timeline-line", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: ".exp-container",
        start: "top 70%",
        end: "bottom 80%",
        scrub: true
      }
    });
  }, { scope: container });

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "AUWAVE",
      location: "Remote",
      period: "Jul 2025 – Apr 2026",
      type: "Full-time",
      achievements: [
        "Spearheaded the end-to-end development of Solvida, a premium cryptocurrency dashboard using Next.js",
        "Engineered a robust Full-Stack architecture with ToTheMoon configuration",
        "Managed the entire development lifecycle with 100% successful project delivery",
        "Implemented real-time market data using Lightweight Charts and WebSocket"
      ],
      technologies: ["Next.js", "Node.js", "ToTheMoon Config", "WebSocket", "Lightweight Charts", "TypeScript"]
    },
    {
      title: "Frontend Developer",
      company: "Freelancing",
      location: "Remote",
      period: "Dec 2024 – May 2025",
      type: "Freelance",
      achievements: [
        "Delivered 5+ React.js/Next.js projects improving page speed by 40%",
        "Developed pixel-perfect UIs from Figma using Shadcn/UI and Tailwind CSS",
        "Integrated services like Stripe and Twilio for seamless transactions",
        "Optimized Core Web Vitals achieving 95+ Lighthouse ratings"
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Stripe", "Twilio", "Tailwind CSS"]
    },
    {
      title: "Frontend Developer",
      company: "Propelius Technologies",
      location: "Surat",
      period: "Jan 2023 – Nov 2024",
      type: "Full-time",
      achievements: [
        "Spearheaded frontend architecture for enterprise SaaS apps",
        "Achieved 35% faster rendering through code-splitting and asset optimization",
        "Led agile sprints and mentored junior developers",
        "Built scalable component libraries and design systems"
      ],
      technologies: ["Next.js", "TypeScript", "React.js", "Redux Toolkit", "Material UI"]
    },
    {
      title: "React.js Developer",
      company: "Anques Technolabs",
      location: "Surat",
      period: "Sep 2022 – Dec 2022",
      type: "Full-time",
      achievements: [
        "Created mobile-first, responsive interfaces with React.js",
        "Improved accessibility and performance scores significantly",
        "Collaborated on pixel-perfect UI implementations",
        "Adopted modern React patterns and best practices"
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Frontend Developer",
      company: "Melzo",
      location: "Surat",
      period: "Dec 2021 – Aug 2022",
      type: "Full-time",
      achievements: [
        "Enhanced React applications with reusable components",
        "Participated in agile ceremonies and sprint cycles",
        "Debugged and stabilized frontend production issues",
        "Collaborated on API integrations and data flow"
      ],
      technologies: ["React.js", "JavaScript", "Git", "Sass", "Redux"]
    }
  ];

  return (
    <section ref={container} id="experience" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="exp-header text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">Professional Milestones</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
            A track record of excellence in delivering high-impact digital solutions.
          </p>
        </div>

        <div className="exp-container max-w-5xl mx-auto relative px-4">
          {/* Vertical Timeline Line */}
          <div className="timeline-line absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />

          {experiences?.map((exp, index) => (
            <div 
              key={index} 
              className={`exp-card relative mb-16 lg:mb-24 flex items-center justify-center lg:justify-between w-full ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Card Content */}
              <div className="w-full lg:w-[45%]">
                <Card className="group border-0 shadow-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-[30px] overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="h-2 w-full bg-gradient-to-r from-primary to-primary-glow" />
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-primary-deep mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-lg font-bold text-foreground/90">
                          <Briefcase className="h-4 w-4 text-primary" />
                          {exp.company}
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary-deep border-0 px-4 py-1.5 rounded-full">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {exp.achievements?.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <div className="mt-1.5 flex-shrink-0">
                            <Star className="h-3 w-3 text-primary-deep group-hover/item:scale-125 transition-transform" />
                          </div>
                          <span className="text-foreground/80 leading-relaxed font-medium">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                      {exp.technologies?.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="px-3 py-1 text-[10px] uppercase tracking-wider font-extrabold bg-white/5 text-primary-deep border border-primary/20 hover:bg-primary-deep hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Center Dot */}
              <div className="absolute left-[-1.5rem] lg:left-1/2 lg:ml-[-1rem] flex items-center justify-center w-8 h-8 rounded-full bg-background border-4 border-primary z-20 shadow-glow hidden lg:flex">
                <Zap className="h-3 w-3 text-primary fill-primary" />
              </div>

              {/* Spacer for empty side */}
              <div className="hidden lg:block lg:w-[45%]" />
            </div>
          ))}
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />
    </section>
  );
};

export default Experience;