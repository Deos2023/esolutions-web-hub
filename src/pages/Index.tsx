
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-esolutions-darkBlue text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-esolutions-darkBlue to-esolutions-blue opacity-90"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your <span className="text-esolutions-red">Complete Tax</span> & Business Solution Provider
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200">
              With over 45 years of experience, ESOLUTIONS provides comprehensive tax and business services under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-esolutions-red hover:bg-red-700">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-3 text-esolutions-darkBlue">Our Comprehensive Services</h2>
          <p className="text-gray-600">
            ESOLUTIONS offers a wide range of tax and business services tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-esolutions-red">
            <h3 className="text-xl font-semibold mb-3 text-esolutions-darkBlue">Taxation Matters</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Income Tax E-Filing</li>
              <li>• Income Tax Audit</li>
              <li>• TDS Return</li>
              <li>• Tax Compliance & Litigation</li>
            </ul>
            <Link to="/services" className="text-esolutions-blue hover:text-esolutions-red flex items-center gap-1 font-medium">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-esolutions-blue">
            <h3 className="text-xl font-semibold mb-3 text-esolutions-darkBlue">GST Services</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• GST Registration</li>
              <li>• GST Filing</li>
              <li>• GST Annual Return</li>
              <li>• GST Audit</li>
            </ul>
            <Link to="/services" className="text-esolutions-blue hover:text-esolutions-red flex items-center gap-1 font-medium">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-esolutions-purple">
            <h3 className="text-xl font-semibold mb-3 text-esolutions-darkBlue">Company Matters</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Company Registration</li>
              <li>• Statutory Filing</li>
              <li>• Company Audit</li>
              <li>• Other ROC Services</li>
            </ul>
            <Link to="/services" className="text-esolutions-blue hover:text-esolutions-red flex items-center gap-1 font-medium">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-esolutions-blue hover:bg-esolutions-purple">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* About Us Brief */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/69964258-a24c-4121-913b-b9edf12bac02.png" 
                alt="ESOLUTIONS Office" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-esolutions-darkBlue">About ESOLUTIONS</h2>
              <p className="text-gray-600 mb-4">
                ESOLUTIONS is an established tax and business services provider with over 45 years of experience. We are an authorized TIN Facilitation Center and PAN Centre managed by NSDL (Branch Code: 7142901).
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experienced professionals is committed to providing high-quality services tailored to meet the unique needs of each client.
              </p>
              <Button asChild className="bg-esolutions-blue hover:bg-esolutions-purple">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-esolutions-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help with your tax and business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-esolutions-blue hover:bg-gray-100">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <a href="tel:9831641953">Call Now: 9831641953</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
