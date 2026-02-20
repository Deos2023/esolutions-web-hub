
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutBrief = ({ addToRefs }: { addToRefs: (el: HTMLElement | null) => void }) => {
  return (
    <section 
      ref={addToRefs} 
      className="relative py-20 overflow-hidden scroll-reveal"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 w-full h-20" 
        style={{
          background: "linear-gradient(135deg, rgba(34,56,145,0.1) 0%, rgba(217,35,34,0.05) 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)",
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 img-hover-zoom">
            <img 
              src="/lovable-uploads/address.jpeg" 
              alt="ESOLUTIONS Office" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-esolutions-darkBlue relative inline-block">
              About ESOLUTIONS
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-esolutions-red rounded-full"></span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              ESOLUTIONS is an established tax and business services provider with over 45 years of experience. We are an authorized TIN Facilitation Center and PAN Centre managed by NSDL (Branch Code: 7142901).
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our team of experienced professionals is committed to providing high-quality services tailored to meet the unique needs of each client.
            </p>
            <Button asChild className="button-dark-to-light button-premium">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom pattern */}
      <div className="absolute bottom-0 right-0 w-full h-20" 
        style={{
          background: "linear-gradient(135deg, rgba(217,35,34,0.05) 0%, rgba(34,56,145,0.1) 100%)",
          clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div>
    </section>
  );
};

export default AboutBrief;
