import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-green-800 text-white py-12 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">NGO Finder</h4>
            <p className="text-green-200">
              Connecting passionate individuals with impactful organizations
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white">Browse NGOs</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">How It Works</a></li>
              <li><a href="/aboutus" className="text-green-100 hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="text-green-200">support@ngofinder.org</p>
            <p className="text-green-200">+1 (555) 123-4567</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer;
