
import React from 'react';

const OfficeInformation = () => {
  return (
    <div className="mt-16 bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-esolutions-darkBlue text-center">Our Offices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Current Office */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-esolutions-blue">Main Office</h3>
          <p className="text-gray-600 mb-4">
            358 C M Sha Road, Natun Bazar, Monirampore<br />
            Barrackpore, Kolkata - 700120<br />
            North 24 Parganas, West Bengal
          </p>
          <div className="mt-4 bg-esolutions-blue/10 p-4 rounded">
            <h4 className="font-semibold text-esolutions-darkBlue mb-2">NSDL Branch</h4>
            <p className="text-gray-600">
              TIN Facilitation Center and PAN Centre<br />
              Branch Code: 7142901
            </p>
          </div>
        </div>
        {/* Upcoming Office */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-esolutions-purple">New Office (Opening Shortly)</h3>
          <p className="text-gray-600 mb-1">
            "SUKHPROVA APARTMENT"<br />
            Shop No 4, Ground Floor<br />
            S N Banerjee Road, Barrackpore<br />
            Kolkata - 700120
          </p>
          <p className="text-esolutions-red">
            (Beside: MONGINIS, Barrackpore Station Road)
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficeInformation;
