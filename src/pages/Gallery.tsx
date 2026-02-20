
const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/office.jpeg",
      alt: "ESOLUTIONS Building Exterior"
    },
    {
      src: "/lovable-uploads/office2.jpeg",
      alt: "ESOLUTIONS Office Interior"
    },
    {
      src: "/lovable-uploads/poster.jpeg",
      alt: "ESOLUTIONS Building View"
    },
    {
      src: "/lovable-uploads/address.jpeg",
      alt: "ESOLUTIONS Office Front"
    },
    {
      src: "/lovable-uploads/office3.jpeg",
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
          <video src="/lovable-uploads/office-video.mp4" controls className="w-full h-64 object-cover rounded-lg shadow-md"></video>
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
                Office Hours: Monday - Saturday (10:00 AM - 8:30 PM)<br />
                Sunday: Closed
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
