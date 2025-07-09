import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelancing",
      location: "Remote",
      period: "Dec 2024 – May 2025",
      type: "Freelance",
      achievements: [
        "Delivered 5+ React.js/Next.js projects improving page load times by 40%",
        "Developed pixel-perfect, accessible UIs from Figma using Shadcn/UI and Tailwind CSS",
        "Integrated third-party services (Stripe, Twilio) ensuring seamless workflows",
        "Optimized Core Web Vitals and SEO scores (95+ Lighthouse rating)"
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Shadcn/UI", "Tailwind CSS", "Stripe", "Twilio"]
    },
    {
      title: "Frontend Developer",
      company: "Propelius Technologies",
      location: "Surat",
      period: "Jan 2023 – Nov 2024",
      type: "Full-time",
      achievements: [
        "Spearheaded frontend architecture for enterprise SaaS apps using Next.js and TypeScript",
        "Achieved 35% faster rendering through code-splitting and asset optimization",
        "Led agile sprints, code reviews, and mentored junior developers",
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
        "Created mobile-first, responsive interfaces with React.js and Tailwind CSS",
        "Improved accessibility and Lighthouse performance scores",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Implemented modern React patterns and best practices"
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
        "Maintained and enhanced React-based applications with reusable components",
        "Participated in agile ceremonies and sprint planning",
        "Debugged and resolved frontend issues improving app stability",
        "Collaborated with backend team for API integration"
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "Git"]
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Around 4 years of building exceptional web applications across diverse industries and company sizes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-primary/30 z-0" />
              )}
              
              <Card className="card-gradient shadow-medium border-0 card-hover relative z-10">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-4 h-4 bg-primary rounded-full shadow-glow" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary-deep mb-1">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
                            <Briefcase className="h-4 w-4" />
                            {exp.company}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <Badge variant="outline" className="mb-2 border-primary/30 text-primary-deep">
                            {exp.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-6 text-foreground/80">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="px-3 py-1 text-xs bg-primary/10 text-primary-deep hover:bg-primary/20 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
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

export default Experience;