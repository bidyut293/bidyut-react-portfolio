import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </SmoothScroll>
  );
};

export default Index;
