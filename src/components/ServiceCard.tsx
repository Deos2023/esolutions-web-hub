
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-esolutions-blue">
      <div className="text-esolutions-blue mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-esolutions-darkBlue">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
