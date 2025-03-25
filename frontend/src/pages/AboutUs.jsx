import React from 'react';
import { User, MapPin, Star } from 'lucide-react';

const TeamMember = ({ name, role, description, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-green-500">
    <div className="p-6 text-center">
      <div className="mx-auto w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-green-100">
        <img 
          src={`/api/placeholder/400/400?text=${name}`} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-green-800 mb-2">{name}</h3>
      <p className="text-yellow-600 font-semibold mb-3">{role}</p>
      <p className="text-green-700 text-sm mb-4">{description}</p>
      <div className="flex justify-center space-x-3">
        <div className="bg-green-50 p-2 rounded-full">
          <User className="text-green-600" size={20} />
        </div>
        <div className="bg-green-50 p-2 rounded-full">
          <MapPin className="text-green-600" size={20} />
        </div>
        <div className="bg-green-50 p-2 rounded-full">
          <Star className="text-green-600" size={20} />
        </div>
      </div>
    </div>
  </div>
);

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Krishang",
      role: "role",
      description: "description."
    },
    {
      name: "Anil",
      role: "role",
      description: "description."
    },
    {
      name: "Aaraw",
      role: "role",
      description: "description."
    },
    {
      name: "Khush",
      role: "role",
      description: "description."
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">About Our Team</h1>
          <p className="text-green-600 max-w-2xl mx-auto">
            Meet the passionate individuals behind NGO Finder, dedicated to connecting 
            communities and making a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;