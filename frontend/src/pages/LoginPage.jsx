import React, { useState, useEffect } from 'react';
import { Leaf, TreePine } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const { login, isLoggingIn, authUser } = useAuthStore();

  // Redirect if already logged in
  useEffect(() => {
    if (authUser) {
      navigate('/dashboard');
    }
  }, [authUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-green-50 to-amber-50 flex items-center justify-center relative overflow-hidden m-0 p-0">
      {/* Animated Background Elements */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <TreePine 
            className="text-green-400 opacity-20"
            size={40 + Math.random() * 40} 
          />
        </div>
      ))}

      {/* Main Login Container */}
      <div className="w-full max-w-md relative mx-auto my-5">
        {/* Fun Interactive Border */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-amber-400 rounded-3xl opacity-50 blur-lg -m-1"></div>
        
        {/* Login Form Card */}
        <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-3xl p-8 border border-green-400 border-opacity-10 shadow-xl max-h-[calc(100vh-40px)] overflow-y-auto">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-green-50 rounded-full mb-4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <TreePine className="text-green-600 w-10 h-10" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
              Welcome Back!
            </h1>
            <p className="text-green-600">Let's make Earth greener together 🌱</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-4 rounded-xl border-2 border-green-100 outline-none focus:border-green-300 transition-all"
              placeholder="Your Email"
              required
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-4 rounded-xl border-2 border-green-100 outline-none focus:border-green-300 transition-all"
              placeholder="Password"
              required
            />

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3 bg-green-500 text-white rounded-xl border-none cursor-pointer flex items-center justify-center gap-2 transition-colors hover:bg-green-600 disabled:bg-green-300 text-base"
            >
              {isLoggingIn ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <Leaf className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center pb-2">
            <a 
              href="/forgot-password" 
              className="text-green-600 no-underline text-sm inline-block hover:underline"
            >
              Forgot password?
            </a>
            <p className="mt-4 text-gray-600 text-sm">
              New here?{' '}
              <a 
                href="/signup" 
                className="text-green-600 no-underline font-medium hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;