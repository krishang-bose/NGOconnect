import React, { useState } from 'react';
import { User, Mail, Phone, Link, MapPin, Calendar, Award, Heart, Users, BarChart3, ExternalLink, Edit, Share2, X, Save, Camera } from 'lucide-react';


const ProfilePage = () => {
  // State to handle edit modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  
  // Initial user data
  const initialUserData = {
    name: "D ANIL KUMAR",
    title: "Environmental Activist",
    profileImage: "/api/placeholder/150/150",
    location: "Delhi, India",
    email: "anilsss895@gmail.com",
    phone: "+91 8455091372",
    website: "www.anil.org",
    joinDate: "March 2023",
    bio: "Passionate environmental advocate with 7+ years of experience in sustainability initiatives. Committed to creating positive change through community engagement and education.",
    interests: ["Environmental Conservation", "Climate Action", "Community Gardens", "Renewable Energy"],
    skills: ["Project Management", "Public Speaking", "Grant Writing", "Volunteer Coordination"],
    impact: {
      volunteeredHours: 230,
      projectsJoined: 12,
      organizationsSupported: 5,
      totalDonations: 1450
    },
    badges: [
      { name: "Climate Champion", date: "June 2024" },
      { name: "50+ Volunteer Hours", date: "April 2024" },
      { name: "Community Leader", date: "January 2024" }
    ],
    upcomingEvents: [
      { name: "Beach Cleanup", date: "April 28, 2025", location: "Oceanside Beach" },
      { name: "Tree Planting Initiative", date: "May 15, 2025", location: "Forest Park" }
    ],
    associatedNGOs: [
      { name: "GreenEarth Foundation", role: "Volunteer Coordinator" },
      { name: "Ocean Guardians", role: "Regular Volunteer" },
      { name: "City Climate Coalition", role: "Member" }
    ]
  };
  
  // User data state with the ability to update
  const [userData, setUserData] = useState(initialUserData);
  
  // State for form data while editing
  const [formData, setFormData] = useState({...userData});
  
  // Handle opening the edit modal
  const handleEditClick = () => {
    setFormData({...userData});
    setEditModalOpen(true);
  };
  
  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle nested object changes (like impact data)
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split('.');
    
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [child]: value
      }
    }));
  };
  
  // Handle array changes (skills, interests)
  const handleArrayChange = (index, value, arrayName) => {
    const newArray = [...formData[arrayName]];
    newArray[index] = value;
    
    setFormData(prev => ({
      ...prev,
      [arrayName]: newArray
    }));
  };
  
  // Add new item to array (skills, interests)
  const handleAddArrayItem = (arrayName) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], ""]
    }));
  };
  
  // Remove item from array (skills, interests)
  const handleRemoveArrayItem = (index, arrayName) => {
    const newArray = [...formData[arrayName]];
    newArray.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      [arrayName]: newArray
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    setEditModalOpen(false);
  };

  // Impact chart data (simplified)
  const impactProgress = [
    { label: "Environmental", percentage: 85, value: 85 },
    { label: "Community", percentage: 70, value: 70 },
    { label: "Education", percentage: 45, value: 45 },
    { label: "Healthcare", percentage: 20, value: 20 }
  ];

  return (
    <div className="min-h-screen bg-green-50">
      
      <div className="container mx-auto py-8 px-4">
        {/* Profile Header Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-green-600 h-32"></div>
          <div className="p-6 relative">
            <div className="absolute -top-16 left-6 border-4 border-white rounded-full overflow-hidden">
              <img src={userData.profileImage} alt={userData.name} className="w-32 h-32 object-cover" />
            </div>
            
            <div className="mt-16 md:mt-0 md:ml-40 flex flex-col md:flex-row md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-green-800">{userData.name}</h1>
                <p className="text-green-600">{userData.title}</p>
                <div className="flex items-center mt-2 text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{userData.location}</span>
                  <Calendar size={16} className="ml-4 mr-1" />
                  <span className="text-sm">Member since {userData.joinDate}</span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex space-x-3">
                <button 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition-colors"
                  onClick={handleEditClick}
                >
                  <Edit size={16} className="mr-2" /> Edit Profile
                </button>
                <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg flex items-center hover:bg-green-200 transition-colors">
                  <Share2 size={16} className="mr-2" /> Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-green-800 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-green-600 mr-3" size={20} />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-green-600 mr-3" size={20} />
                  <span>{userData.phone}</span>
                </div>
                <div className="flex items-center">
                  <Link className="text-green-600 mr-3" size={20} />
                  <a href="#" className="text-green-600 hover:underline">{userData.website}</a>
                </div>
              </div>
            </div>
            
            {/* Skills & Interests */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-green-800 mb-4">Skills & Interests</h2>
              
              <h3 className="font-semibold text-green-700 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {userData.skills.map((skill, index) => (
                  <span key={index} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="font-semibold text-green-700 mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {userData.interests.map((interest, index) => (
                  <span key={index} className="bg-green-50 text-green-800 text-sm px-3 py-1 rounded-full border border-green-200">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Associated NGOs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-green-800 mb-4">Associated Organizations</h2>
              <div className="space-y-4">
                {userData.associatedNGOs.map((ngo, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-green-100 pb-3 last:border-0">
                    <div>
                      <h3 className="font-semibold text-green-700">{ngo.name}</h3>
                      <p className="text-sm text-gray-600">{ngo.role}</p>
                    </div>
                    <a href="#" className="text-green-600 hover:text-green-800">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Middle & Right Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Bio Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-green-800 mb-4">About Me</h2>
              <p className="text-gray-700">{userData.bio}</p>
            </div>
            
            {/* Impact Meter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-green-800 mb-4">Social Impact Meter</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="bg-green-100 p-3 rounded-full inline-block mb-2">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-green-800">{userData.impact.volunteeredHours}</h3>
                  <p className="text-sm text-green-600">Hours Volunteered</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="bg-green-100 p-3 rounded-full inline-block mb-2">
                    <BarChart3 className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-green-800">{userData.impact.projectsJoined}</h3>
                  <p className="text-sm text-green-600">Projects Joined</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="bg-green-100 p-3 rounded-full inline-block mb-2">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-green-800">{userData.impact.organizationsSupported}</h3>
                  <p className="text-sm text-green-600">NGOs Supported</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="bg-green-100 p-3 rounded-full inline-block mb-2">
                    <Heart className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-green-800">${userData.impact.totalDonations}</h3>
                  <p className="text-sm text-green-600">Total Donations</p>
                </div>
              </div>
              
              <h3 className="font-semibold text-green-700 mb-4">Impact by Category</h3>
              <div className="space-y-4">
                {impactProgress.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-green-700">{item.label}</span>
                      <span className="text-sm font-medium text-green-700">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Badges & Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-green-800 mb-4">Badges & Achievements</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {userData.badges.map((badge, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="bg-green-100 p-3 rounded-full inline-block mb-2">
                      <Award className="text-green-600" size={24} />
                    </div>
                    <h3 className="font-semibold text-green-700">{badge.name}</h3>
                    <p className="text-xs text-gray-600">{badge.date}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-green-800 mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {userData.upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start border-b border-green-100 pb-4 last:border-0 last:pb-0">
                    <div className="bg-green-100 text-green-800 text-center p-2 rounded-lg mr-4 w-12">
                      <span className="text-sm font-bold">{event.date.split(', ')[0].split(' ')[1]}</span>
                      <p className="text-xs">{event.date.split(', ')[0].split(' ')[0]}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700">{event.name}</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin size={14} className="mr-1" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Edit Profile Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center border-b border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-green-800">Edit Profile</h2>
              <button 
                onClick={() => setEditModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                  {/* Basic Info */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">Basic Information</h3>
                    
                    {/* Profile Image */}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Profile Image</label>
                      <div className="flex items-center">
                        <div className="relative mr-4">
                          <img 
                            src={formData.profileImage} 
                            alt="Profile Preview" 
                            className="w-20 h-20 object-cover rounded-full" 
                          />
                          <button 
                            type="button"
                            className="absolute bottom-0 right-0 bg-green-600 text-white p-1 rounded-full hover:bg-green-700"
                          >
                            <Camera size={16} />
                          </button>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>Upload a new image</p>
                          <p>(Square image recommended)</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Name */}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    {/* Title */}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="title">Professional Title</label>
                      <input 
                        type="text" 
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    {/* Location */}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
                      <input 
                        type="text" 
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">Contact Information</h3>
                    
                    {/* Email */}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    {/* Phone */}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    {/* Website */}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="website">Website</label>
                      <input 
                        type="text" 
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">Impact Data</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="impact.volunteeredHours">Hours Volunteered</label>
                        <input 
                          type="number" 
                          id="impact.volunteeredHours"
                          name="impact.volunteeredHours"
                          value={formData.impact.volunteeredHours}
                          onChange={handleNestedChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="impact.projectsJoined">Projects Joined</label>
                        <input 
                          type="number" 
                          id="impact.projectsJoined"
                          name="impact.projectsJoined"
                          value={formData.impact.projectsJoined}
                          onChange={handleNestedChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="impact.organizationsSupported">NGOs Supported</label>
                        <input 
                          type="number" 
                          id="impact.organizationsSupported"
                          name="impact.organizationsSupported"
                          value={formData.impact.organizationsSupported}
                          onChange={handleNestedChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="impact.totalDonations">Total Donations ($)</label>
                        <input 
                          type="number" 
                          id="impact.totalDonations"
                          name="impact.totalDonations"
                          value={formData.impact.totalDonations}
                          onChange={handleNestedChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div>
                  {/* Bio */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">About Me</h3>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="bio">Bio</label>
                      <textarea 
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">Skills</h3>
                    {formData.skills.map((skill, index) => (
                      <div key={index} className="flex mb-2">
                        <input 
                          type="text"
                          value={skill}
                          onChange={(e) => handleArrayChange(index, e.target.value, 'skills')}
                          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button 
                          type="button"
                          onClick={() => handleRemoveArrayItem(index, 'skills')}
                          className="bg-red-50 text-red-500 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md hover:bg-red-100"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                    <button 
                      type="button"
                      onClick={() => handleAddArrayItem('skills')}
                      className="mt-2 text-green-600 hover:text-green-800 text-sm font-medium flex items-center"
                    >
                      + Add Skill
                    </button>
                  </div>
                  
                  {/* Interests */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">Interests</h3>
                    {formData.interests.map((interest, index) => (
                      <div key={index} className="flex mb-2">
                        <input 
                          type="text"
                          value={interest}
                          onChange={(e) => handleArrayChange(index, e.target.value, 'interests')}
                          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button 
                          type="button"
                          onClick={() => handleRemoveArrayItem(index, 'interests')}
                          className="bg-red-50 text-red-500 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md hover:bg-red-100"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                    <button 
                      type="button"
                      onClick={() => handleAddArrayItem('interests')}
                      className="mt-2 text-green-600 hover:text-green-800 text-sm font-medium flex items-center"
                    >
                      + Add Interest
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 mt-8 pt-4 border-t">
                <button 
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
                >
                  <Save size={16} className="mr-2" /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

// Clock component
const Clock = ({ className, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};