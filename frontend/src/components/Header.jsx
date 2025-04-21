import React, { useState } from 'react';
import { 
  Heart, 
  User, 
  MessageCircle, 
  Home,
  HandHeart,
  Users,
  Menu,
  X,
  ChevronDown,
  Settings
} from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} />, href: '/dash' },
    { id: 'blog', label: 'Stories', icon: <MessageCircle size={20} />, href: '/blog' },
    { id: 'donate', label: 'Donate', icon: <HandHeart size={20} />, href: '/donate' },
    { id: 'volunteer', label: 'Volunteer', icon: <Users size={20} />, href: '/volunteer' },
    { id: 'profile', label: 'Profile', icon: <User size={20} />, href: '/profile' }
  ];

  const otherItems = [
    { id: 'animals', label: 'Animals', icon: <Heart size={20} />, href: '/animals' },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} />, href: '/settings' }
  ];

  return (
    <>
      {/* Header with Horizontal Navigation */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Heart size={28} className="mr-2" />
              <h1 className="text-xl font-bold">NGOconnect</h1>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop horizontal navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map(item => (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex items-center text-white hover:text-green-200"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </a>
              ))}
              
              {/* Dropdown for Other items */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center text-white hover:text-green-200"
                >
                  <Menu size={20} /> 
                  <span className="ml-2">Other</span>
                  <ChevronDown size={16} className={`ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {otherItems.map(item => (
                      <a
                        key={item.id}
                        href={item.href}
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50"
                      >
                        {item.icon}
                        <span className="ml-2">{item.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-green-800 bg-opacity-90 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col p-4">
          <div className="flex justify-end">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 py-8">
            {menuItems.map(item => (
              <a
                key={item.id}
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-md text-white hover:bg-green-600"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full p-3 rounded-md text-white hover:bg-green-600"
              >
                <span className="flex items-center space-x-3">
                  <Menu size={20} /> 
                  <span>Other</span>
                </span>
                <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="pl-6 space-y-2 mt-2">
                  {otherItems.map(item => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="flex items-center space-x-3 p-2 w-full rounded-md text-white hover:bg-green-600"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;