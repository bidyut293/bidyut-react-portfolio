import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Live Color Change logic
    const themeSections = [
      { trigger: '#home', color: '#ffffff', textColor: '#000000' },
      { trigger: '#about', color: '#f0f4ff', textColor: '#1a1a1a' },
      { trigger: '#experience', color: '#e2e8f0', textColor: '#0f172a' },
      { trigger: '#projects', color: '#000000', textColor: '#ffffff' },
      { trigger: '#contact', color: '#050505', textColor: '#f8fafc' },
    ];

    themeSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section.trigger,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => {
          gsap.to('body', { backgroundColor: section.color, color: section.textColor, duration: 0.8, ease: 'power2.inOut' });
        },
        onEnterBack: () => {
          gsap.to('body', { backgroundColor: section.color, color: section.textColor, duration: 0.8, ease: 'power2.inOut' });
        }
      });
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <div className="theme-transition-wrapper min-h-screen">{children}</div>;
};

export default SmoothScroll;
