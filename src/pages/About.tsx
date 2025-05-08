
const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-esolutions-darkBlue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About ESOLUTIONS</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner for comprehensive tax and business solutions
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16">
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

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-esolutions-darkBlue text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-esolutions-blue/10 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-esolutions-blue">SC</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-esolutions-darkBlue">Sourav Chatterjee</h3>
              <p className="text-esolutions-red mb-2">B.A.LL.B., LL.M.</p>
              <p className="text-gray-600 mb-2">Phone: 9831641953</p>
              <p className="text-gray-600">Email: advsourav@yahoo.in</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-esolutions-purple/10 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-esolutions-purple">MC</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-esolutions-darkBlue">Monisa Chatterjee</h3>
              <p className="text-esolutions-red mb-2">Senior Tax Consultant</p>
              <p className="text-gray-600 mb-2">Phone: 7278280679</p>
              <p className="text-gray-600">Email: monisabanerjee5@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Office Information */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-esolutions-darkBlue text-center">Our Offices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Current Office */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-esolutions-blue">Main Office</h3>
              <p className="text-gray-600 mb-4">
                358 CM Shah Road, Natun Bazar, Monirampore<br />
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
      </section>
    </main>
  );
};

export default About;
