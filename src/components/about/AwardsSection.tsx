
import React from 'react';
import { Trophy, FileCheck } from "lucide-react";

const awards = [
  {
    icon: <Trophy className="text-esolutions-red" size={24} />,
    title: "ICA Barrackpore Director Award",
    imageSrc: "/lovable-uploads/b7c465cb-0043-447f-8af7-0fc2ecfa377e.png",
    imageAlt: "ICA Barrackpore Award Ceremony",
    description1: "Our director was honored with a prestigious award from ICA Barrackpore for outstanding contribution in the field of tax consultancy and financial services.",
    description2: "This recognition highlights our commitment to excellence and the trust placed in our services by esteemed organizations.",
  },
  {
    icon: <FileCheck className="text-esolutions-blue" size={24} />,
    title: "Appreciation from Maj. Deepak Singh",
    imageSrc: "/lovable-uploads/7374788c-017e-4d97-96df-45b7b7836125.png",
    imageAlt: "Appreciation Letter from Maj Deepak Singh",
    description1: "Special appreciation from Maj. Deepak Singh, Garrison Engineer (North) Kolkata, for our exceptional work in resolving an outstanding TDS/TCS demand of ₹31,44,350.",
    description2: "The letter commends our team's selfless efforts and professional approach under challenging circumstances, showcasing our capability and teamwork.",
  },
];

const AwardsSection = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-esolutions-darkBlue text-center">Awards & Appreciation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {awards.map((award, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              {award.icon}
              <h3 className="text-xl font-bold text-esolutions-darkBlue">{award.title}</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img
                  src={award.imageSrc}
                  alt={award.imageAlt}
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-600 mb-3">{award.description1}</p>
                <p className="text-gray-600">{award.description2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
