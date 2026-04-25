import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions built with modern technologies and best practices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="group card-gradient shadow-medium border-0 card-hover overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-primary-deep">
                      {project.icon}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary-deep mb-2">{project.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="px-2 py-1 text-xs bg-primary/10 text-primary-deep hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary-deep hover:bg-primary-deep/90 text-white"

                      onClick={() => project.url ? window.location.href = project.url : ''}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary-deep text-primary-deep hover:bg-primary-deep hover:text-white"
                      onClick={() => project.gitUrl ? window.location.href = project.gitUrl : ''}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;