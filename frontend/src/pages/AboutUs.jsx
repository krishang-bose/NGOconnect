import React, { useState } from 'react';
import { User, MapPin, Star, X, Mail, Linkedin, Globe, Calendar, Award, Coffee, Phone, ArrowRight } from 'lucide-react';
import krishangPhoto from '../assets/krishang.png';
import aarawPhoto from '../assets/aaraw.png';
import khushPhoto from '../assets/dog.png';


const TeamMember = ({ name, role, description, social, onExpand, photo }) => {
  return (
    <div 
      className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 
                border-2 border-green-400 hover:shadow-xl hover:border-green-500 cursor-pointer transform hover:scale-105"
      onClick={() => onExpand(name)}
    >
      <div className="p-6 text-center">
        <div className="mx-auto w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-green-100 
                        transition-all duration-300 hover:border-green-300">
          {photo ? (
            <img 
              src={photo} 
              alt={name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `/api/placeholder/400/400?text=${name}`;
              }}
            />
          ) : (
            <img 
              src={`/api/placeholder/400/400?text=${name}`} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">{name}</h3>
        <p className="text-yellow-600 font-semibold mb-3">{role}</p>
        
        <p className="text-green-700 text-sm mb-4 line-clamp-3">
          {description.substring(0, 100)}...
        </p>
        
        <div className="flex items-center justify-center mt-4 text-green-600">
          <div className="bg-green-100 rounded-full p-1 transition-all duration-300 hover:bg-green-200">
            <ArrowRight size={18} />
          </div>
        </div>
        
        <div className="flex justify-center space-x-3 mt-4">
          <div className="bg-green-50 p-2 rounded-full transition-all duration-300 hover:bg-green-100">
            <User className="text-green-600" size={20} />
          </div>
          <div className="bg-green-50 p-2 rounded-full transition-all duration-300 hover:bg-green-100">
            <MapPin className="text-green-600" size={20} />
          </div>
          <div className="bg-green-50 p-2 rounded-full transition-all duration-300 hover:bg-green-100">
            <Star className="text-green-600" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpandedMember = ({ member, onClose }) => {
  const { name, role, description, social, photo } = member;
  
  // More detailed information for expanded view
  const expandedDetails = {
    Krishang: {
      title: "Frontend Development Lead & Technical Architect",
      education: "B.Tech in Computer Science, Bennett University",
      location: "Bangalore, India",
    },
    Anil: {
      title: "Backend Development Lead & Database Specialist",
      education: "B.Tech in Computer Science, Bennett University",
      location: "Hyderabad, India",
    },
    Aaraw: {
      title: "UI/UX Designer & User Research Lead",
      education: "B.Tech in Computer Science, Bennett University",
      location: "Mumbai, India",
    },
    Khush: {
      title: "Project Manager & Strategy Lead",
      education: "B.Tech in Computer Science, Bennett University",
      location: "Delhi, India",
    }
  };
  
  const details = expandedDetails[name] || {
    title: role,
    education: "Education information not available",
    location: "Location not specified"
  };

  return (
    <div className="fixed inset-0 bg-green-900 bg-opacity-90 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-screen overflow-y-auto">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-green-100 hover:bg-green-200 text-green-800 rounded-full p-2 transition-all duration-300"
          >
            <X size={24} />
          </button>
          
          <div className="bg-gradient-to-r from-green-600 to-green-400 py-12 px-6 text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-xl mb-6 md:mb-0 md:mr-12">
                {photo ? (
                  <img 
                    src={photo} 
                    alt={name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `/api/placeholder/400/400?text=${name}`;
                    }}
                  />
                ) : (
                  <img 
                    src={`/api/placeholder/400/400?text=${name}`} 
                    alt={name} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
                <h2 className="text-2xl md:text-3xl font-light mb-4">{details.title}</h2>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                  <div className="flex items-center">
                    <MapPin className="mr-2" size={20} />
                    <span>{details.location}</span>
                  </div>
                  {social?.email && (
                    <div className="flex items-center">
                      <Mail className="mr-2" size={20} />
                      <a href={`mailto:${social.email}`} className="hover:underline">{social.email}</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <section className="mb-12">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <User className="mr-2" size={24} /> About
                </h3>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-green-800">{description}</p>
                </div>
              </section>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <Award className="mr-2" size={20} /> Education
                </h3>
                <p className="text-green-700">{details.education}</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4">Connect</h3>
                <div className="flex flex-wrap gap-4">
                  {social?.email && (
                    <a 
                      href={`mailto:${social.email}`}
                      className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                  {social?.linkedin && (
                    <a 
                      href={social.linkedin}
                      className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {social?.website && (
                    <a 
                      href={social.website}
                      className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300"
                    >
                      <Globe size={20} />
                    </a>
                  )}
                  <a 
                    href="#"
                    className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300"
                  >
                    <Phone size={20} />
                  </a>
                  <a 
                    href="#"
                    className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300"
                  >
                    <Coffee size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [expandedMember, setExpandedMember] = useState(null);
  
  // Add the Anil image from Google
  const anilPhoto = "https://dcbookstore.com/uploads/author/images/1655881916731-D.-Anil-Kumar.jpg";
  
  const teamMembers = [
    
    {
      name: "Anil",
      role: "Backend Development Lead",
      description: "I worked closely with Krishang on the frontend, helping build components, layouts, and interaction flows that made the app engaging and functional. I also contributed to the backend, setting up databases, handling server-side operations, and helping integrate APIs to make sure data handling and communication within the app were smooth and reliable.",
      social: {
        email: "anil@example.com",
        linkedin: "https://linkedin.com/in/anil"
      },
      photo: anilPhoto
    },
    {
      name: "Krishang",
      role: "Frontend Development Lead",
      description: "I led the frontend development of the NGO Connect app, focusing on creating a clean, responsive, and user-friendly interface that made the app easy to use. I was responsible for turning the UI/UX designs into functional code and making sure everything worked smoothly across different platforms. Along with leading the frontend, I also helped Anil with the backend development, working on API integration and server-side logic to strengthen the app's functionality.",
      social: {
        email: "krishang@example.com",
        linkedin: "https://linkedin.com/in/krishang",
        website: "https://krishang.dev"
      },
      photo: krishangPhoto
    },
    {
      name: "Aaraw",
      role: "UI/UX Designer & Research Lead",
      description: "I led the research for the project by conducting user surveys to understand the needs of NGOs and the people they serve. Based on this research, I designed the app's UI/UX prototypes in Figma, making sure the design was intuitive, accessible, and visually appealing. My designs gave the development team a clear foundation to build the app effectively.",
      social: {
        email: "aaraw@example.com",
        linkedin: "https://linkedin.com/in/aaraw",
        website: "https://aaraw.design"
      },
      photo: aarawPhoto
    },
    {
      name: "Khush",
      role: "NA",
      description: "I focused on Milestone 3 of the project, where I created both the project presentation (PPT) and the demonstration video. My work helped clearly communicate the app's features, development process, and impact, making it easy for others to understand and appreciate what we built",
      social: {
        email: "khush@example.com",
        linkedin: "https://linkedin.com/in/khush"
      },
      photo: khushPhoto
    }
  ];

  const handleExpand = (name) => {
    const member = teamMembers.find(m => m.name === name);
    setExpandedMember(member);
  };

  const handleClose = () => {
    setExpandedMember(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-6">About Our Team</h1>
          <div className="h-1 w-32 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Meet the passionate individuals behind NGO Finder, dedicated to connecting 
            communities and making a difference through technology and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              social={member.social}
              photo={member.photo}
              onExpand={handleExpand}
            />
          ))}
        </div>
      </div>

      {expandedMember && (
        <ExpandedMember 
          member={expandedMember} 
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default AboutUs;