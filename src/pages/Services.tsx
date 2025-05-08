
import { Calculator, FileText, Building, FileCheck, ShieldCheck, FileBarChart, Briefcase, Award } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-esolutions-darkBlue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive tax and business solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-esolutions-darkBlue border-b-2 border-esolutions-red pb-2">
            TIN Facilitation Center and PAN Centre
          </h2>
          <p className="text-gray-600">
            We are an authorized TIN Facilitation Center and PAN Centre managed by NSDL (Branch Code: 7142901),
            providing efficient and reliable services for all your TIN and PAN related needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Taxation Matter */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-esolutions-darkBlue border-b border-gray-200 pb-2 flex items-center gap-2">
              <Calculator className="text-esolutions-red" /> Taxation Matter
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Income Tax E-Filing</li>
              <li>• Income Tax Audit</li>
              <li>• TDS Return</li>
              <li>• Income Tax Compliance & Litigation</li>
            </ul>
          </div>

          {/* GST Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-esolutions-darkBlue border-b border-gray-200 pb-2 flex items-center gap-2">
              <FileText className="text-esolutions-blue" /> GST Services
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• GST Registration</li>
              <li>• GST Filing</li>
              <li>• GST Annual Return</li>
              <li>• GST Audit</li>
              <li>• GST Compliance & Litigation</li>
            </ul>
          </div>

          {/* Company Related Matter */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-esolutions-darkBlue border-b border-gray-200 pb-2 flex items-center gap-2">
              <Building className="text-esolutions-purple" /> Company Related Matter (ROC)
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Company Registration</li>
              <li>• Company Statutory Filing</li>
              <li>• Company Audit</li>
              <li>• Other Company Related Works</li>
            </ul>
          </div>

          {/* Licence Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-esolutions-darkBlue border-b border-gray-200 pb-2 flex items-center gap-2">
              <FileCheck className="text-esolutions-red" /> Licence Services
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Trade Licence</li>
              <li>• Food Licence (FSSAI)</li>
            </ul>
          </div>

          {/* Registration Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-esolutions-darkBlue border-b border-gray-200 pb-2 flex items-center gap-2">
              <ShieldCheck className="text-esolutions-blue" /> Registration Services
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• MSME (UDYAM AADHAR)</li>
              <li>• Professional Tax</li>
              <li>• EPFO Registration & Filings</li>
              <li>• ESIC Registration & Filings</li>
            </ul>
          </div>

          {/* Documentation Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-esolutions-darkBlue border-b border-gray-200 pb-2 flex items-center gap-2">
              <FileBarChart className="text-esolutions-purple" /> Documentation Services
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• PAN/TAN</li>
              <li>• Digital Signature Certificate (DSC)</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-esolutions-darkBlue">Why Choose ESOLUTIONS?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<Briefcase size={40} />}
              title="45+ Years Experience"
              description="Decades of expertise in tax and business services, ensuring reliable solutions."
            />
            <ServiceCard 
              icon={<Award size={40} />}
              title="Authorized by NSDL"
              description="Official TIN Facilitation Center and PAN Centre with Branch Code: 7142901."
            />
            <ServiceCard 
              icon={<ShieldCheck size={40} />}
              title="Comprehensive Solutions"
              description="All your tax and business services under one roof for convenience."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
