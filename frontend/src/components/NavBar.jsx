import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ authUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white text-xl font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 14v6m-3-3h6M9 4.45l6 2.36m-6 3.82l6 2.36M9 14.45l6 2.36M6 6a3 3 0 0 0-3 3v12h6m9-12a3 3 0 0 1 3 3v12h-6"/>
                </svg>
                TreeFund
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              {authUser ? (
                <>
                  <Link to="/" className="text-green-100 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link to="/aboutus" className="text-green-100 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                  <Link to="/blog" className="text-green-100 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                  <Link to="/ngos" className="text-green-100 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">NGOs</Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-green-100 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                  <Link to="/signup" className="text-green-100 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
                </>
              )}
              <Link to="/volunteer" className="text-green-100 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Volunteer</Link>
              <Link to="/dashboard" className="text-green-100 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              <Link to="/donate" className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-md text-sm font-medium">Donate</Link>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-100 hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          {authUser && (
            <div className="hidden md:flex md:items-center">
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <button className="bg-green-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      {authUser.displayName ? authUser.displayName.charAt(0).toUpperCase() : 'U'}
                    </div>
                  </button>
                  <span className="ml-2 text-white">{authUser.displayName || 'User'}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {authUser ? (
              <>
                <Link to="/" className="text-green-100 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                <Link to="/aboutus" className="text-green-100 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
                <Link to="/blog" className="text-green-100 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                <Link to="/ngos" className="text-green-100 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">NGOs</Link>
              </>
            ) : (
              <>
                <Link to="/login" className="text-green-100 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                <Link to="/signup" className="text-green-100 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign Up</Link>
              </>
            )}
            <Link to="/volunteer" className="text-green-100 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Volunteer</Link>
            <Link to="/dashboard" className="text-green-100 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
            <Link to="/donate" className="bg-white text-green-700 hover:bg-green-100 block px-3 py-2 rounded-md text-base font-medium mt-2">Donate</Link>
          </div>
          {authUser && (
            <div className="pt-4 pb-3 border-t border-green-800">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                    {authUser.displayName ? authUser.displayName.charAt(0).toUpperCase() : 'U'}
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{authUser.displayName || 'User'}</div>
                  <div className="text-sm font-medium text-green-300">{authUser.email}</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <button className="block px-3 py-2 rounded-md text-base font-medium text-green-100 hover:text-white hover:bg-green-600">Sign out</button>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}