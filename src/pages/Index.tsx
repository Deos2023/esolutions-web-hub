
import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutBrief from "@/components/home/AboutBrief";
import GalleryShowcase from "@/components/home/GalleryShowcase";
import MapSection from "@/components/home/MapSection";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  // Animation on scroll effect
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for sections that will be animated on scroll
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if sections are in view
      sectionRefs.current.forEach(section => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight * 0.75;
        
        if (inView) {
          section.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Add refs to animation elements
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main>
      <HeroSection />
      <ServicesOverview addToRefs={addToRefs} />
      <AboutBrief addToRefs={addToRefs} />
      <GalleryShowcase addToRefs={addToRefs} />
      <MapSection addToRefs={addToRefs} />
      <ContactCTA addToRefs={addToRefs} />
    </main>
  );
};

export default Index;
