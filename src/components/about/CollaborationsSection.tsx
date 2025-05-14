
import React from 'react';
import { Building, Briefcase, UserCheck } from "lucide-react";

const collaborations = [
  {
    icon: <Building className="text-esolutions-blue" />,
    title: "GE Fort William",
    description: "Active collaboration as Tax Consultant",
  },
  {
    icon: <Building className="text-esolutions-blue" />,
    title: "GE North Kolkata",
    description: "Ongoing collaboration as Tax Consultant",
  },
  {
    icon: <Building className="text-esolutions-blue" />,
    title: "Cantonment Board Barrackpore",
    description: "Account Assistant and Tax Consultant services",
  },
  {
    icon: <Building className="text-esolutions-blue" />,
    title: "DEO Gujarat",
    description: "Providing Tax Consultant services",
  },
  {
    icon: <UserCheck className="text-esolutions-purple" />,
    title: "Indian Psychiatric Society",
    description: "Collaboration up to March 2023",
  },
  {
    icon: <Briefcase className="text-esolutions-red" />,
    title: "ICA Barrackpore",
    description: "Director awarded for excellence in service",
  },
];

const CollaborationsSection = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-esolutions-darkBlue text-center">Our Key Collaborations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collaborations.map((collab, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-3">
              {collab.icon}
              <h3 className="text-lg font-semibold text-esolutions-darkBlue">{collab.title}</h3>
            </div>
            <p className="text-gray-600">{collab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationsSection;
