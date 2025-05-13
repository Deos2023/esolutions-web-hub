
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactCTA = ({ addToRefs }: { addToRefs: (el: HTMLElement | null) => void }) => {
  return (
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
  );
};

export default ContactCTA;
