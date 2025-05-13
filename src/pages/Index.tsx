
import { ArrowRight, Map, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
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

  // Animation on scroll effect
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for sections that will be animated on scroll
  const sectionRefs = useRef([]);

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
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main>
      {/* Hero Section with Premium Background */}
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
              <Button asChild className="bg-esolutions-red hover:bg-red-700 button-premium">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 button-premium">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Services Overview with Enhanced Design */}
      <section 
        ref={addToRefs} 
        className="section-pattern relative py-20 scroll-reveal"
        style={{
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-95"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-esolutions-darkBlue relative inline-block">
              Our Comprehensive Services
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-esolutions-red rounded-full"></span>
            </h2>
            <p className="text-gray-600 mt-4">
              ESOLUTIONS offers a wide range of tax and business services tailored to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="service-card p-6">
              <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center gradient-bg-red text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-float"><path d="M18 8V7c0-1.1-.9-2-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-1"></path><path d="m15 5 3-3 3 3"></path><path d="M15 19v-2"></path><path d="M15 14v-3"></path><path d="m18 11 3 3-3 3"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-esolutions-darkBlue">Taxation Matters</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-red">•</span>
                  Income Tax E-Filing
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-red">•</span>
                  Income Tax Audit
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-red">•</span>
                  TDS Return
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-red">•</span>
                  Tax Compliance & Litigation
                </li>
              </ul>
              <Link to="/services" className="text-esolutions-blue hover:text-esolutions-red flex items-center gap-1 font-medium group">
                Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="service-card p-6">
              <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center gradient-bg-blue text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-float"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-esolutions-darkBlue">GST Services</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-blue">•</span>
                  GST Registration
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-blue">•</span>
                  GST Filing
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-blue">•</span>
                  GST Annual Return
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-blue">•</span>
                  GST Audit
                </li>
              </ul>
              <Link to="/services" className="text-esolutions-blue hover:text-esolutions-red flex items-center gap-1 font-medium group">
                Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="service-card p-6">
              <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center gradient-bg-purple text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-float"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-9a2 2 0 0 0-2 2"></path><path d="M3 22h6a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H3v9Z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-esolutions-darkBlue">Company Matters</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-purple">•</span>
                  Company Registration
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-purple">•</span>
                  Statutory Filing
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-purple">•</span>
                  Company Audit
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-esolutions-purple">•</span>
                  Other ROC Services
                </li>
              </ul>
              <Link to="/services" className="text-esolutions-blue hover:text-esolutions-red flex items-center gap-1 font-medium group">
                Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-esolutions-blue hover:bg-esolutions-purple button-premium">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Brief with Enhanced Design */}
      <section 
        ref={addToRefs} 
        className="relative py-20 overflow-hidden scroll-reveal"
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%)",
        }}
      >
        {/* Decorative pattern */}
        <div className="absolute top-0 left-0 w-full h-20" 
          style={{
            background: "linear-gradient(135deg, rgba(34,56,145,0.1) 0%, rgba(217,35,34,0.05) 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)",
          }}
        ></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 img-hover-zoom">
              <img 
                src="/lovable-uploads/69964258-a24c-4121-913b-b9edf12bac02.png" 
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
              <Button asChild className="bg-esolutions-blue hover:bg-esolutions-purple button-premium">
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

      {/* Gallery Showcase Section with Enhanced Design */}
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

      {/* Map Section with Enhanced Design */}
      <section 
        ref={addToRefs}
        className="py-20 relative scroll-reveal"
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-esolutions-red via-esolutions-blue to-esolutions-purple"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-esolutions-darkBlue relative inline-block">
              Find Us
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-esolutions-blue rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
              Visit our office in Barrackpore, Kolkata for personalized tax and business solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl premium-card overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.6972788213902!2d88.3397701!3d22.776613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b4c6c48a591%3A0xecfaf10b98c6dcac!2sE-SOLUTIONS!5e0!3m2!1sen!2sin!4v1746695234647!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ESOLUTIONS Office Location"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA with Enhanced Design */}
      <section 
        ref={addToRefs}
        className="relative py-16 scroll-reveal overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(34,56,145,0.95) 0%, rgba(78,61,152,0.95) 100%)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-40 opacity-10"
          style={{
            background: "radial-gradient(circle at top right, rgba(255,255,255,0.8) 0%, transparent 70%)",
          }}
        ></div>
        
        <div className="absolute bottom-0 left-0 w-full h-40 opacity-10"
          style={{
            background: "radial-gradient(circle at bottom left, rgba(255,255,255,0.8) 0%, transparent 70%)",
          }}
        ></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today to discuss how we can help with your tax and business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-esolutions-blue hover:bg-gray-100 button-premium">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 button-premium">
              <a href="tel:9831641953">Call Now: 9831641953</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
