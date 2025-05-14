
import React from 'react';

const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="md:w-1/2">
        <img
          src="/lovable-uploads/40fd99bc-8226-46d4-9158-a1e01c953c2f.png"
          alt="ESOLUTIONS Office"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-esolutions-darkBlue">Our Story</h2>
        <p className="text-gray-600 mb-4">
          ESOLUTIONS is a leading provider of tax and business services with a rich legacy spanning over 45 years.
          Established as a trusted name in Kolkata, we have been serving businesses and individuals with integrity
          and excellence.
        </p>
        <p className="text-gray-600 mb-4">
          As an authorized TIN Facilitation Center and PAN Centre managed by NSDL (Branch Code: 7142901),
          we offer a comprehensive range of services designed to meet all your tax and business needs under one roof.
        </p>
        <p className="text-gray-600">
          Our team of experienced professionals, led by Mr. Sourav Chatterjee and Ms. Monisa Chatterjee,
          is dedicated to providing personalized solutions tailored to your specific requirements.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
