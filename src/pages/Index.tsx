
import { ArrowRight, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      {/* Hero Section with Blurred Background */}
      <section className="relative bg-esolutions-darkBlue text-white overflow-hidden">
        {/* Background Image with Blur Effect */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            filter: "blur(4px) brightness(0.4)",
            transform: "scale(1.05)" 
          }}
        ></div>
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

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-esolutions-darkBlue">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office in Barrackpore, Kolkata for personalized tax and business solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
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
