import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Heart, 
  Users, 
  Globe, 
  ArrowRight 
} from 'lucide-react';
import Footer from '../components/footer';

const CategoryCard = ({ icon: Icon, title, description, onClick }) => (
  <div 
    className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl border-2 border-green-200 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
      <Icon className="text-green-600" size={32} />
    </div>
    <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
    <p className="text-green-700 text-sm">{description}</p>
  </div>
);

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Logic for category click (if needed)
  };

  const handleGetStarted = () => {
    navigate('/ngos');
  };

  const handleSearchClick = () => {
    navigate('/ngos');
  };

  const categories = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "NGOs focusing on medical support and health awareness"
    },
    {
      icon: Globe,
      title: "Environmental",
      description: "Organizations working to protect our planet"
    },
    {
      icon: Users,
      title: "Education",
      description: "Nonprofits dedicated to learning and skill development"
    },
    {
      icon: MapPin,
      title: "Community Development",
      description: "Local initiatives improving community life"
    }
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover. Connect. Make a Difference.
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Find NGOs that align with your passion and make a meaningful impact in your community.
          </p>

          {/* Search Icon Button */}
          <button 
            onClick={handleSearchClick}
            className="bg-green-400 text-white p-4 rounded-full hover:bg-green-500 transition-colors"
          >
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Explore NGO Categories
          </h2>
          <p className="text-green-600 max-w-2xl mx-auto">
            Find organizations that resonate with your interests and values
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              onClick={() => handleCategoryClick(category.title)}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-100 py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-3xl font-bold text-green-900 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-green-700 max-w-xl">
              Explore our directory to connect with NGOs, volunteer, donate, or start your own initiative.
            </p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => navigate('/login')}
              className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-green-700 transition-colors"
            >
              Login <ArrowRight className="ml-2" size={20} />
            </button>
            <button 
              onClick={() => navigate('/signup')}
              className="bg-white text-green-700 border border-green-600 px-6 py-3 rounded-lg flex items-center hover:bg-green-50 transition-colors"
            >
              Signup <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
