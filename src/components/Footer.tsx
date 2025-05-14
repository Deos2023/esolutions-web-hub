import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-esolutions-darkBlue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/328ab4f1-70fd-49d3-a5bb-866360240d04.png" 
                alt="ESOLUTIONS Logo" 
                className="w-10 h-10"
              />
              <span className="font-bold text-2xl">ESOLUTIONS</span>
            </div>
            <p className="text-gray-300 mb-4">
              Multiple Tax Solution Provider Under One Roof with over 45 years of experience.
            </p>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <MapPin size={18} className="text-esolutions-red" />
              <span>358 C M Sha Road, Natun Bazar, Monirampore</span>
            </div>
            <div className="ml-6 text-gray-300 mb-2">
              <span>Barrackpore, Kolkata - 700120</span>
            </div>
            <div className="ml-6 text-gray-300 mb-4">
              <span>North 24 Parganas, West Bengal</span>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={18} className="text-esolutions-red" />
                <div>
                  <div className="flex flex-col">
                    <span className="text-sm">Arjit Chatterjee (Advocate):</span>
                    <a href="tel:9903057826" className="hover:text-white">9903057826</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={18} className="text-esolutions-red" />
                <div>
                  <div className="flex flex-col">
                    <span className="text-sm">Sourav Chatterjee (Advocate):</span>
                    <a href="tel:9831641953" className="hover:text-white">9831641953</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={18} className="text-esolutions-red" />
                <div>
                  <div className="flex flex-col">
                    <span className="text-sm">Monisa Chatterjee (Advocate):</span>
                    <a href="tel:7278280679" className="hover:text-white">7278280679</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-2 text-gray-300 mt-4">
                <Mail size={18} className="text-esolutions-red mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:esolutionsou@gmail.com" className="hover:text-white">esolutionsou@gmail.com</a>
                  <a href="mailto:advsourav@yahoo.in" className="hover:text-white">advsourav@yahoo.in</a>
                  <a href="mailto:monisabanerjee5@gmail.com" className="hover:text-white">monisabanerjee5@gmail.com</a>
                  <a href="mailto:arijitchatterjeeadv@yahoo.com" className="hover:text-white">arijitchatterjeeadv@yahoo.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white hover:underline">Our Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white hover:underline">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Office Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span>10:00 AM - 8:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-700 pb-2">New Office</h3>
            <p className="text-gray-300">
              Opening shortly:<br />
              "SUKHPROVA APARTMENT"<br />
              Shop No 4, Ground Floor<br />
              S N Banerjee Road, Barrackpore<br />
              Kolkata - 700120<br />
              (Beside: MONGINIS, Barrackpore Station Road)
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>ESOLUTIONS - TIN Facilitation Center and PAN Centre (Managed by NSDL) | Branch Code: 7142901</p>
          <p className="mt-2">Copyright © 2025. All Rights Reserved. Website Developed & Maintained by Digital Exposure Online Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
