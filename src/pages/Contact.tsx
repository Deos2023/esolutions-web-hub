
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-esolutions-darkBlue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our team for any queries or assistance
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-esolutions-darkBlue">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Details */}
          <div>
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-esolutions-red">
                <div className="flex items-start">
                  <div className="bg-esolutions-red/10 p-2 rounded-full mr-4">
                    <Mail className="text-esolutions-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-esolutions-darkBlue mb-1">Email Us</h3>
                    <p className="text-gray-500 text-sm">Office:</p>
                    <a href="mailto:esolutionsou@gmail.com" className="text-esolutions-blue hover:underline block">
                      esolutionsou@gmail.com
                    </a>
                    <p className="text-gray-500 text-sm mt-2">Advocates:</p>
                    <a href="mailto:advsourav@yahoo.in" className="text-esolutions-blue hover:underline block">
                      advsourav@yahoo.in
                    </a>
                    <a href="mailto:monisabanerjee5@gmail.com" className="text-esolutions-blue hover:underline block">
                      monisabanerjee5@gmail.com
                    </a>
                    <a href="mailto:arijitchatterjeeadv@yahoo.com" className="text-esolutions-blue hover:underline block">
                      arijitchatterjeeadv@yahoo.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-esolutions-blue">
                <div className="flex items-start">
                  <div className="bg-esolutions-blue/10 p-2 rounded-full mr-4">
                    <Phone className="text-esolutions-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-esolutions-darkBlue mb-1">Call Us</h3>
                    <p className="text-gray-500 text-sm">Arjit Chatterjee (Advocate):</p>
                    <a href="tel:9903057826" className="text-esolutions-blue hover:underline block">
                      +91 9903057826
                    </a>
                    <p className="text-gray-500 text-sm mt-2">Sourav Chatterjee (Advocate):</p>
                    <a href="tel:9831641953" className="text-esolutions-blue hover:underline block">
                      +91 9831641953
                    </a>
                    <p className="text-gray-500 text-sm mt-2">Monisa Chatterjee (Advocate):</p>
                    <a href="tel:7278180679" className="text-esolutions-blue hover:underline block">
                      +91 7278180679
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-esolutions-purple">
                <div className="flex items-start">
                  <div className="bg-esolutions-purple/10 p-2 rounded-full mr-4">
                    <MapPin className="text-esolutions-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-esolutions-darkBlue mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      358 C M Sha Road, Natun Bazar,<br />
                      Monirampore, Barrackpore,<br />
                      Kolkata - 700120,<br />
                      North 24 Parganas, West Bengal
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-esolutions-red">
                <div className="flex items-start">
                  <div className="bg-esolutions-red/10 p-2 rounded-full mr-4">
                    <Clock className="text-esolutions-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-esolutions-darkBlue mb-1">Business Hours</h3>
                    <div className="text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>10:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Office Information */}
            <div className="bg-esolutions-darkBlue text-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-3 border-b border-white/20 pb-2">New Office Opening Soon!</h3>
              <p className="mb-4">
                We're excited to announce the opening of our new office location:
              </p>
              <div className="pl-4 border-l-2 border-esolutions-red">
                <p>
                  "SUKHPROVA APARTMENT"<br />
                  Shop No 4, Ground Floor<br />
                  S N Banerjee Road, Barrackpore<br />
                  Kolkata - 700120<br />
                  <span className="text-esolutions-red mt-1 block">
                    (Beside: MONGINIS, Barrackpore Station Road)
                  </span>
                </p>
              </div>
            </div>

            {/* NSDL Information */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-3 text-esolutions-darkBlue border-b border-gray-200 pb-2">
                TIN Facilitation Center and PAN Centre
              </h3>
              <div className="flex items-center">
                <div className="bg-esolutions-blue p-4 rounded-lg mr-4">
                  <p className="text-white font-bold">NSDL</p>
                </div>
                <div>
                  <p className="text-gray-600">Managed by NSDL</p>
                  <p className="text-esolutions-blue font-semibold">Branch Code: 7142901</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
