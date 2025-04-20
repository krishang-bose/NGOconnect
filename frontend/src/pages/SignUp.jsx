import React, { useState, useEffect } from 'react';
import { Leaf, TreePine, User, Mail, Lock, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: ''
  });
  
  const navigate = useNavigate();
  const { signup, isSigningIn, authUser } = useAuthStore();

  useEffect(() => {
    if (authUser) {
      navigate('/dashboard');
    }
  }, [authUser, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    
    await signup({
      fullName: formData.fullName, // Ensure this matches the backend field name
      email: formData.email,
      password: formData.password,
      organization: formData.organization
    });
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-green-50 to-amber-50 flex items-center justify-center relative overflow-hidden m-0 p-0">
      {/* Animated Background Elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          <TreePine 
            className="text-green-400 opacity-20"
            size={40 + Math.random() * 40} 
          />
        </div>
      ))}

      {/* Main Signup Container */}
      <div className="w-full max-w-lg relative mx-auto my-5">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-amber-400 rounded-3xl opacity-50 blur-lg -m-1"></div>
        
        {/* Signup Form Card */}
        <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-3xl p-8 border border-green-400 border-opacity-10 shadow-xl max-h-[calc(100vh-40px)] overflow-y-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-green-50 rounded-full mb-4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <TreePine className="text-green-600 w-10 h-10" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
              Join Our Mission
            </h1>
            <p className="text-green-600">Together we can make a difference 🌎</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Input Field Groups */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full py-3 px-4 pl-12 rounded-xl border-2 border-green-100 outline-none focus:border-green-300 transition-all"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 px-4 pl-12 rounded-xl border-2 border-green-100 outline-none focus:border-green-300 transition-all"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full py-3 px-4 pl-12 rounded-xl border-2 border-green-100 outline-none focus:border-green-300 transition-all"
                placeholder="Organization (Optional)"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full py-3 px-4 pl-12 rounded-xl border-2 border-green-100 outline-none focus:border-green-300 transition-all"
                placeholder="Password"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full py-3 px-4 pl-12 rounded-xl border-2 border-green-100 outline-none focus:border-green-300 transition-all"
                placeholder="Confirm Password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSigningIn}
              className="w-full py-3 bg-green-500 text-white rounded-xl border-none cursor-pointer flex items-center justify-center gap-2 transition-colors hover:bg-green-600 disabled:bg-green-300 text-base mt-2"
            >
              {isSigningIn ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Create Account</span>
                  <Leaf className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center pb-2">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <a 
                href="/login" 
                className="text-green-600 no-underline font-medium hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;