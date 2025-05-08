import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Home,
  HandHeart,
  Users,
  Bell,
  TrendingUp,
  Calendar,
  MapPin,
  Award
} from 'lucide-react';
import Header from '../components/Header';

const Dashboard = () => {
  // Sample data - in a real app, this would come from an API
  const [stats, setStats] = useState({
    activeCampaigns: 12,
    animalsSaved: 463,
    upcomingEvents: 5,
    nearbyNGOs: 8
  });

  const upcomingEvents = [
    { id: 1, title: 'Community Dog Walk', date: 'May 5, 2025', location: 'Central Park', organization: 'Paws & Hearts' },
    { id: 2, title: 'Cat Adoption Drive', date: 'May 10, 2025', location: 'City Mall', organization: 'Feline Rescue' },
    { id: 3, title: 'Wildlife Fundraiser', date: 'May 15, 2025', location: 'Grand Hotel', organization: 'Wild Life Matters' }
  ];

  const featuredNGOs = [
    { id: 1, name: 'Paws & Hearts', animals: 'Dogs & Cats', urgent: true },
    { id: 2, name: 'Wildlife Protectors', animals: 'Various Wildlife', urgent: false },
    { id: 3, name: 'Rabbit Haven', animals: 'Rabbits', urgent: true }
  ];

  const notifications = [
    { id: 1, message: 'Paws & Hearts posted a new urgent need', time: '2 hours ago' },
    { id: 2, message: 'Your monthly donation was processed successfully', time: '1 day ago' },
    { id: 3, message: 'New event near your location next week', time: '2 days ago' }
  ];

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Header />
      {/* Main content area */}
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          {/* Page header with welcome message and notifications icon */}
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-green-800">Welcome to NGOconnect</h1>
              
            </div>
            <div className="relative">
              <Bell size={24} className="text-green-700 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <TrendingUp size={24} className="text-green-600 mb-2" />
              <span className="text-2xl font-bold text-green-800">{stats.activeCampaigns}</span>
              <span className="text-sm text-gray-600">Active Campaigns</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <Heart size={24} className="text-green-600 mb-2" />
              <span className="text-2xl font-bold text-green-800">{stats.animalsSaved}</span>
              <span className="text-sm text-gray-600">Animals Saved</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <Calendar size={24} className="text-green-600 mb-2" />
              <span className="text-2xl font-bold text-green-800">{stats.upcomingEvents}</span>
              <span className="text-sm text-gray-600">Upcoming Events</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <MapPin size={24} className="text-green-600 mb-2" />
              <span className="text-2xl font-bold text-green-800">{stats.nearbyNGOs}</span>
              <span className="text-sm text-gray-600">Nearby NGOs</span>
            </div>
          </div>
          
          {/* Two column layout for desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column - takes 2/3 width on large screens */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent activity feed */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                  <Bell size={20} className="mr-2" />
                  Recent Notifications
                </h2>
                <div className="space-y-4">
                  {notifications.map(notification => (
                    <div key={notification.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <p className="text-gray-800">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-green-600 hover:text-green-800 text-sm">
                  View all notifications
                </button>
              </div>
              
              {/* Upcoming events */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                  <Calendar size={20} className="mr-2" />
                  Upcoming Events
                </h2>
                <div className="space-y-4">
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-medium text-green-800">{event.title}</h3>
                      <div className="flex items-start mt-2">
                        <div className="bg-green-100 rounded-lg p-2 mr-3">
                          <Calendar size={20} className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-700">{event.date}</p>
                          <p className="text-sm text-gray-700">{event.location}</p>
                          <p className="text-sm text-green-700 mt-1">By {event.organization}</p>
                        </div>
                      </div>
                      <button className="mt-3 text-green-600 hover:text-green-800 text-sm">
                        View details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right column - takes 1/3 width on large screens */}
            <div className="space-y-6">
              {/* Impact summary */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                  <Award size={20} className="mr-2" />
                  Your Impact
                </h2>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Monthly donations</span>
                    <span className="font-medium text-green-700">$45</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Volunteer hours</span>
                    <span className="font-medium text-green-700">12 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Animals helped</span>
                    <span className="font-medium text-green-700">8</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">Thank you for making a difference!</p>
                </div>
              </div>
              
              {/* NGOs needing urgent help */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                  <HandHeart size={20} className="mr-2" />
                  Featured NGOs
                </h2>
                <div className="space-y-3">
                  {featuredNGOs.map(ngo => (
                    <div key={ngo.id} className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-green-800">{ngo.name}</h3>
                          <p className="text-sm text-gray-600">Helps: {ngo.animals}</p>
                        </div>
                        {ngo.urgent && (
                          <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                            Urgent
                          </span>
                        )}
                      </div>
                      <button className="mt-2 text-sm text-green-600 hover:text-green-800">
                        View details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick links */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Quick Links</h2>
                <div className="grid grid-cols-2 gap-3">
                  <a href="/donate" className="bg-green-100 hover:bg-green-200 text-green-700 rounded-lg p-3 flex flex-col items-center">
                    <HandHeart size={20} className="mb-1" />
                    <span className="text-sm">Donate</span>
                  </a>
                  <a href="/volunteer" className="bg-green-100 hover:bg-green-200 text-green-700 rounded-lg p-3 flex flex-col items-center">
                    <Users size={20} className="mb-1" />
                    <span className="text-sm">Volunteer</span>
                  </a>
                  <a href="/profile" className="bg-green-100 hover:bg-green-200 text-green-700 rounded-lg p-3 flex flex-col items-center">
                    <Home size={20} className="mb-1" />
                    <span className="text-sm">Profile</span>
                  </a>
                  <a href="/blog" className="bg-green-100 hover:bg-green-200 text-green-700 rounded-lg p-3 flex flex-col items-center">
                    <MessageCircle size={20} className="mb-1" />
                    <span className="text-sm">Stories</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;