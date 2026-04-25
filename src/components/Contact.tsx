import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Code, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "bidyutsamanta293@gmail.com",
      href: "mailto:bidyutsamanta293@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7984626866",
      href: "tel:+917984626866"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Navsari, Gujarat, India",
      href: "#"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/bidyut-samanta",
      href: "https://linkedin.com/in/bidyut-samanta-82706b205"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/bidyut-samanta-82706b205",
      color: "hover:text-blue-600"
    },
    {
      name: "LeetCode",
      icon: <Code className="h-5 w-5" />,
      href: "https://leetcode.com/bidyutsamanta",
      color: "hover:text-green-600"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:bidyutsamanta293@gmail.com",
      color: "hover:text-red-600"
    }
  ]
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formId = "mvzdllbr";
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSent(true);
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="card-gradient shadow-medium border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="h-6 w-6 text-primary-deep" />
                  <h3 className="text-2xl font-bold text-primary-deep">Let's Connect</h3>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects,
                  or just having a friendly chat about technology and development.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300 group"
                    >
                      <div className="text-primary-deep group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-primary-deep">{info.label}</div>
                        <div className="text-sm text-muted-foreground">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-lg bg-primary/10 text-primary-deep ${social.color} transition-all duration-300 hover:shadow-medium`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="card-gradient shadow-medium border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="h-6 w-6 text-primary-deep" />
                  <h3 className="text-2xl font-bold text-primary-deep">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input
                        name="first_name"
                        required
                        placeholder="John"
                        className="border-primary/20 focus:border-primary-deep focus:ring-primary-deep/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input
                        name="last_name"
                        required
                        placeholder="Doe"
                        className="border-primary/20 focus:border-primary-deep focus:ring-primary-deep/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="border-primary/20 focus:border-primary-deep focus:ring-primary-deep/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      name="subject"
                      required
                      placeholder="Project Discussion"
                      className="border-primary/20 focus:border-primary-deep focus:ring-primary-deep/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      required
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="border-primary/20 focus:border-primary-deep focus:ring-primary-deep/20 resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting || isSent}
                      size="lg"
                      className={`w-full transition-all duration-300 ${isSent
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-primary-deep hover:bg-primary-deep/90"
                        } text-white shadow-medium hover:shadow-strong`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : isSent ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Message Sent!
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;