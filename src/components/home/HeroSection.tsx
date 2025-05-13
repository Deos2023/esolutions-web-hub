
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-esolutions-darkBlue text-white overflow-hidden">
      {/* Background Image with Advanced Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          filter: "blur(4px) brightness(0.4)",
          transform: "scale(1.05)" 
        }}
      ></div>
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: "linear-gradient(135deg, rgba(34,56,145,0.7) 0%, rgba(217,35,34,0.5) 100%)",
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-28 md:py-40 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeInRight">
            Your <span className="text-esolutions-red">Complete Tax</span> & Business Solution Provider
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fadeInRight delay-200">
            With over 45 years of experience, ESOLUTIONS provides comprehensive tax and business services under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInRight delay-300">
            <Button asChild className="bg-white text-esolutions-darkBlue hover:bg-esolutions-blue hover:text-white button-premium">
              <Link to="/services">Our Services</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 button-premium">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
