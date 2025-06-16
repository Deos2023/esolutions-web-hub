
import React from 'react';

const teamMembers = [
  {
    initials: "SC",
    name: "Sourav Chatterjee",
    title: "B.A.LL.B., LL.M.",
    phone: "9831641953",
    email: "advsourav@yahoo.in",
    bgColor: "bg-esolutions-blue/10",
    textColor: "text-esolutions-blue",
  },
  {
    initials: "MC",
    name: "Monisa Chatterjee",
    title: "B.A.LL.B.",
    phone: "7278280679",
    email: "monisabanerjee5@gmail.com",
    bgColor: "bg-esolutions-purple/10",
    textColor: "text-esolutions-purple",
  },
];

const LeadershipTeam = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-esolutions-darkBlue text-center">Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className={`w-32 h-32 mx-auto rounded-full ${member.bgColor} flex items-center justify-center mb-4`}>
              <span className={`text-3xl font-bold ${member.textColor}`}>{member.initials}</span>
            </div>
            <h3 className="text-xl font-bold mb-1 text-esolutions-darkBlue">{member.name}</h3>
            <p className="text-esolutions-red mb-2">{member.title}</p>
            <p className="text-gray-600 mb-2">Phone: {member.phone}</p>
            <p className="text-gray-600">Email: {member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
