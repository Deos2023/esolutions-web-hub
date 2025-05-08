
const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/c0bdb022-9f9e-479d-83cc-e02499d04e2e.png",
      alt: "ESOLUTIONS Building Exterior"
    },
    {
      src: "/lovable-uploads/54dde00e-c07e-4f61-b599-eab312f9889a.png",
      alt: "ESOLUTIONS Office Interior"
    },
    {
      src: "/lovable-uploads/40fd99bc-8226-46d4-9158-a1e01c953c2f.png",
      alt: "ESOLUTIONS Building View"
    },
    {
      src: "/lovable-uploads/69964258-a24c-4121-913b-b9edf12bac02.png",
      alt: "ESOLUTIONS Office Front"
    },
    {
      src: "/lovable-uploads/1de6e765-ea4c-4665-97db-954a8b557b18.png",
      alt: "ESOLUTIONS Office Workspace"
    },
    {
      src: "/lovable-uploads/8c7272e5-5c6c-4fce-b4a0-b8f167c1dbfa.png",
      alt: "ESOLUTIONS Street View"
    },
    {
      src: "/lovable-uploads/328ab4f1-70fd-49d3-a5bb-866360240d04.png",
      alt: "ESOLUTIONS Logo"
    },
    {
      src: "/lovable-uploads/1934b13e-c128-4634-a215-abb03a83cefa.png",
      alt: "ESOLUTIONS Office Interior View"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-esolutions-darkBlue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A visual tour of our offices and operations
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-esolutions-darkBlue text-center">Visit Our Offices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Current Location */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-esolutions-blue border-b border-gray-200 pb-2">
                Main Office
              </h3>
              <p className="text-gray-600 mb-1">
                358 CM Shah Road, Natun Bazar, Monirampore<br />
                Barrackpore, Kolkata - 700120<br />
                North 24 Parganas, West Bengal
              </p>
              <p className="text-gray-600 mt-4 italic">
                Office Hours: Monday - Friday (10:00 AM - 6:00 PM)<br />
                Saturday (10:00 AM - 4:00 PM)
              </p>
            </div>
            
            {/* Upcoming Location */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-esolutions-purple border-b border-gray-200 pb-2">
                New Office (Opening Shortly)
              </h3>
              <p className="text-gray-600 mb-1">
                "SUKHPROVA APARTMENT"<br />
                Shop No 4, Ground Floor<br />
                S N Banerjee Road, Barrackpore<br />
                Kolkata - 700120
              </p>
              <p className="text-esolutions-red mt-2">
                (Beside: MONGINIS, Barrackpore Station Road)
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
