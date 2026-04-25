import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, TrendingUp, Shield, Film, Rocket } from "lucide-react";
import projectGleans from "@/assets/project-gleans.png";
import projectEacel from "@/assets/project-eacel.png";
import projectCircle from "@/assets/project-circle.png";
import movieBooking from "@/assets/movie-booking.png";
import pokemon from "@/assets/pokemon.png";
import projectSolvida from "@/assets/project-solvida.png";

const Projects = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".project-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".projects-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
      }
    });
  }, { scope: container });

  const projects = [
    {
      title: "Solvida",
      description: "A state-of-the-art cryptocurrency and asset management platform featuring real-time market analytics via WebSockets and ToTheMoon configuration.",
      image: projectSolvida,
      technologies: ["Next.js", "Node.js", "TypeScript", "WebSocket", "Lightweight Charts", "ToTheMoon Config"],
      features: ["Real-time market data", "Interactive portfolio charts", "Secure transaction management", "Premium UI/UX"],
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: "from-amber-500/20 to-yellow-500/20",
      url: 'https://solvida.com/'
    },
    {
      title: "Gleans",
      description: "Real-time notification system with modern UI built using Next.js 14, TypeScript, and Supabase. Features responsive design, Twilio integration, and optimized performance.",
      image: projectGleans,
      technologies: ["Next.js 14", "TypeScript", "Supabase", "Twilio", "Tailwind CSS"],
      features: ["Real-time notifications", "Responsive UI", "Third-party integrations", "Modern tech stack"],
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-blue-500/20 to-purple-500/20",
      url: 'https://gleans.me/'
    },
    {
      title: "Eacel AI",
      description: "Analytics dashboard with AWS integration delivering 45% boost in performance metrics. Built with Next.js featuring comprehensive data visualization and reporting tools.",
      image: projectEacel,
      technologies: ["Next.js", "AWS", "TypeScript", "Chart.js", "React Query"],
      features: ["Analytics dashboards", "45% performance boost", "AWS integration", "Data visualization"],
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: "from-green-500/20 to-teal-500/20",
      url: 'https://eacel.ai/'
    },
    {
      title: "Circle of Trust",
      description: "Payment-integrated application using Next.js, GraphQL, and Stripe. Secure transaction processing with modern UI/UX and comprehensive financial management features.",
      image: projectCircle,
      technologies: ["Next.js", "GraphQL", "Stripe", "TypeScript", "Prisma"],
      features: ["Payment integration", "GraphQL API", "Secure transactions", "Financial management"],
      icon: <Shield className="h-6 w-6" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      url: 'https://www.thecircleof.co.uk/'
    },
    {
      title: "Movie Booking App",
      description: "Complete movie booking system with seat selection, payment gateway integration, and JWT authentication. Features real-time seat availability and booking management.",
      image: movieBooking, // Reusing image as placeholder
      technologies: ["React.js", "Node.js", "JWT", "Payment Gateway", "MongoDB"],
      features: ["Seat selection", "Payment gateway", "JWT authentication", "Real-time updates"],
      icon: <Film className="h-6 w-6" />,
      gradient: "from-red-500/20 to-orange-500/20",
      // url: 'https://www.thecircleof.co.uk/'
    },
    {
      title: "Pokémon Search App",
      description: "Fast Pokémon search app built in 5 hours using Next.js 14, Tailwind CSS, and Framer Motion. Search and filter Pokémon by name or attributes, view detailed descriptions, with SEO optimization, lazy loading, and dark/light theme support.",
      image: pokemon, // Placeholder, replace with actual image
      technologies: ["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript"],
      features: ["Search by name/attributes", "Detailed Pokémon info", "SEO optimization", "Lazy loading", "Dark/light theme", "Mobile responsive"],
      icon: <Rocket className="h-6 w-6" />,
      gradient: "from-indigo-500/20 to-cyan-500/20",
      url: 'https://pokemon-app-pmuz-bidyut293s-projects.vercel.app/', // Replace with actual URL
      gitUrl: 'https://github.com/bidyut293/pokemon-app'
    }
  ];

  return (
    <section ref={container} id="projects" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="projects-header text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
            Showcasing innovative digital solutions built with precision and passion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card">
              <Card className="group card-gradient shadow-medium border-0 card-hover overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <div className="text-primary-deep scale-125">
                      {project.icon}
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-primary-deep mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-lg italic line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="font-bold mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm font-medium">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8 mt-auto">
                    <h4 className="font-bold mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="px-3 py-1 text-xs font-semibold bg-primary/5 text-primary-deep border border-primary/10 hover:bg-primary/20 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6 border-t border-border/30">
                    <Button
                      size="lg"
                      className="flex-1 bg-primary-deep hover:bg-primary-deep/90 text-white rounded-full font-bold shadow-medium hover:shadow-strong transition-all duration-300"
                      onClick={() => project.url ? window.open(project.url, "_blank") : ''}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-2 border-primary-deep text-primary-deep hover:bg-primary-deep hover:text-white rounded-full font-bold transition-all duration-300"
                      onClick={() => project.gitUrl ? window.open(project.gitUrl, "_blank") : ''}
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Source
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;