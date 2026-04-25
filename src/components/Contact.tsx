import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle, Code, CheckCircle2, Globe, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const container = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".contact-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    gsap.from(".contact-info-card", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 80%",
      }
    });

    gsap.from(".contact-form-card", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 80%",
      }
    });
  }, { scope: container });

  const contactInfo = [
    { icon: <Mail className="h-6 w-6" />, label: "Email", value: "bidyutsamanta293@gmail.com", href: "mailto:bidyutsamanta293@gmail.com" },
    { icon: <Phone className="h-6 w-6" />, label: "Phone", value: "+91 7984626866", href: "tel:+917984626866" },
    { icon: <MapPin className="h-6 w-6" />, label: "Location", value: "Navsari, Gujarat, India", href: "#" },
    { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", value: "bidyut-samanta", href: "https://linkedin.com/in/bidyut-samanta-82706b205" }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formId = "mvzdllbr";
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSent(true);
        toast.success("Thank you! Your message has been sent successfully.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <section ref={container} id="contact" className="py-24 bg-gradient-to-br from-background to-primary/5 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="contact-header text-center mb-20">
          <h2 className="text-4xl lg:text-7xl font-bold gradient-text mb-6">Let's Create Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic font-medium">
            Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
          </p>
        </div>

        <div className="contact-grid grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Info Side */}
          <div className="contact-info-card space-y-10">
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-primary-deep flex items-center gap-4">
                <Globe className="h-10 w-10 animate-spin-slow" />
                Contact Info
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-md italic">
                Whether it's a new project, a job opportunity, or just a technical discussion, feel free to reach out.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo?.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  className="group flex items-center gap-6 p-6 rounded-[24px] bg-white/5 border border-primary/10 hover:bg-primary-deep hover:border-transparent transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary-deep group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-muted-foreground group-hover:text-white/60 mb-1">
                      {item.label}
                    </h4>
                    <p className="text-lg font-bold group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto h-6 w-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-card">
            <Card className="border-0 shadow-strong bg-gradient-to-br from-primary/10 via-background to-secondary/10 backdrop-blur-2xl rounded-[40px] overflow-hidden">
              <CardContent className="p-10 lg:p-14">
                <div className="flex items-center gap-4 mb-10">
                  <MessageCircle className="h-10 w-10 text-primary-deep" />
                  <h3 className="text-3xl font-black text-primary-deep">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">First Name</label>
                      <Input name="first_name" required placeholder="John" className="bg-white/5 border-primary/20 h-14 rounded-2xl focus:ring-primary-deep focus:border-primary-deep" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Last Name</label>
                      <Input name="last_name" required placeholder="Doe" className="bg-white/5 border-primary/20 h-14 rounded-2xl focus:ring-primary-deep focus:border-primary-deep" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                    <Input name="email" type="email" required placeholder="john@example.com" className="bg-white/5 border-primary/20 h-14 rounded-2xl focus:ring-primary-deep focus:border-primary-deep" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                    <Input name="subject" required placeholder="Project Discussion" className="bg-white/5 border-primary/20 h-14 rounded-2xl focus:ring-primary-deep focus:border-primary-deep" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                    <Textarea name="message" required placeholder="Tell me about your vision..." rows={5} className="bg-white/5 border-primary/20 rounded-2xl focus:ring-primary-deep focus:border-primary-deep resize-none" />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting || isSent}
                    className={`w-full h-16 rounded-2xl text-lg font-bold transition-all duration-500 shadow-xl ${
                      isSent ? "bg-green-600 hover:bg-green-700" : "bg-primary-deep hover:bg-primary-deep/90"
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </div>
                    ) : isSent ? (
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6" />
                        Successfully Sent!
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Send className="h-5 w-5" />
                        Elevate Communication
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;