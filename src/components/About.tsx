import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Trophy, Globe } from "lucide-react";

const About = () => {
  const skills = [
    "Next.js", "Javascript", "TypeScript", "Redux Toolkit", "Zustand", "Tailwind CSS", 
    "Shadcn/UI", "Framer Motion", "Material UI", "Node.js", "Express.js", "MongoDB", "Jest", 
    "GraphQL", "REST APIs", "WebSocket", "Lightweight Charts", "Stripe", "Twilio", "Git", "Vercel"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate frontend developer with a proven track record of building scalable, 
            high-performance web applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="card-gradient shadow-medium border-0 card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary-deep">Professional Summary</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Dynamic and performance-oriented Frontend Developer with <strong>over 4 years of experience</strong> 
                  building scalable, high-performance web applications. Specialized in React.js, Next.js (14+), 
                  TypeScript, Tailwind CSS, and Shadcn/UI.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Proven track record of delivering pixel-perfect UIs, integrating third-party services, 
                  and optimizing app performance in Agile/Remote/Enterprise SaaS environments.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary-deep" />
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-sm text-muted-foreground">Navsari, Gujarat, India</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary-deep" />
                    <div>
                      <div className="font-semibold">Education</div>
                      <div className="text-sm text-muted-foreground">B.Tech CSE (7.8 GPA)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-primary-deep" />
                    <div>
                      <div className="font-semibold">Achievement</div>
                      <div className="text-sm text-muted-foreground">Hackathon Team Lead</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary-deep" />
                    <div>
                      <div className="font-semibold">Languages</div>
                      <div className="text-sm text-muted-foreground">English, Hindi, Gujarati</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="card-gradient shadow-medium border-0 card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary-deep">Technical Skills</h3>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {skills.map((skill, index) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge 
                        variant="secondary" 
                        className="px-4 py-2 text-sm bg-primary/10 text-primary-deep hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-8 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Performance Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Code Splitting, Lazy Loading, SEO Tuning, SSR/CSR, Lighthouse Optimization
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Development Practices</h4>
                    <p className="text-sm text-muted-foreground">
                      Agile/Scrum, CI/CD Pipelines, TDD, Code Reviews, Git Workflows
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;