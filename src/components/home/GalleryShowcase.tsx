
import { Link } from "react-router-dom";
import { ArrowRight, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryShowcaseProps {
  addToRefs: (el: HTMLElement | null) => void;
}

const GalleryShowcase = ({ addToRefs }: GalleryShowcaseProps) => {
  // Gallery images for the home page (subset of the full gallery)
  const galleryImages = [
    {
      src: "/lovable-uploads/c0bdb022-9f9e-479d-83cc-e02499d04e2e.png",
      alt: "ESOLUTIONS Building Exterior"
    },
    {
      src: "/lovable-uploads/54dde00e-c07e-4f61-b599-eab312f9889a.png",
      alt: "ESOLUTIONS Office Interior"
    },
    {
      src: "/lovable-uploads/40fd99bc-8226-46d4-9158-a1e01c953c2f.png",
      alt: "ESOLUTIONS Building View"
    },
    {
      src: "/lovable-uploads/69964258-a24c-4121-913b-b9edf12bac02.png",
      alt: "ESOLUTIONS Office Front"
    }
  ];

  return (
    <section 
      ref={addToRefs}
      className="py-20 section-pattern relative scroll-reveal"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-95"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-esolutions-darkBlue relative inline-block">
              Our Office Gallery
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-esolutions-blue rounded-full"></span>
            </h2>
            <p className="text-gray-600 mb-4 max-w-2xl text-lg">
              Take a virtual tour of our office facilities and environment
            </p>
          </div>
          <Link 
            to="/gallery" 
            className="flex items-center text-esolutions-blue hover:text-esolutions-red font-medium group"
          >
            <span>View all photos</span>
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="relative px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="premium-card group">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        
        <div className="text-center mt-10">
          <Button asChild className="bg-esolutions-blue hover:bg-esolutions-purple button-premium">
            <Link to="/gallery" className="flex items-center gap-2">
              <Images size={18} />
              <span>Explore Full Gallery</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
