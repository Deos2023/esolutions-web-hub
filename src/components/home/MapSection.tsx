
const MapSection = ({ addToRefs }: { addToRefs: (el: HTMLElement | null) => void }) => {
  return (
    <section 
      ref={addToRefs}
      className="py-20 relative scroll-reveal"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-esolutions-red via-esolutions-blue to-esolutions-purple"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-esolutions-darkBlue relative inline-block">
            Find Us
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-esolutions-blue rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Visit our office in Barrackpore, Kolkata for personalized tax and business solutions.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl premium-card overflow-hidden">
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
  );
};

export default MapSection;
