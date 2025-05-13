
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesOverview = ({ addToRefs }: { addToRefs: (el: HTMLElement | null) => void }) => {
  return (
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
  );
};

export default ServicesOverview;
