import React, { useState } from 'react';
import { Leaf, TreePine, User, Mail, Lock, Globe } from 'lucide-react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #f0fff4 0%, #fff8e1 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      margin: 0,
      padding: 0
    }}>
      {/* Animated Background Elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s infinite`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          <TreePine 
            style={{ color: '#4ade80', opacity: 0.2 }} 
            size={40 + Math.random() * 40} 
          />
        </div>
      ))}

      {/* Main Signup Container */}
      <div style={{ 
        width: '90%',
        maxWidth: '450px',
        position: 'relative',
        margin: '20px auto'
      }}>
        {/* Gradient Border Effect */}
        <div style={{
          position: 'absolute',
          inset: '-5px',
          background: 'linear-gradient(45deg, #4ade80 0%, #fbbf24 100%)',
          borderRadius: '1.5rem',
          opacity: '0.5',
          filter: 'blur(15px)',
        }} />
        
        {/* Signup Form Card */}
        <div style={{
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          borderRadius: '1.5rem',
          padding: '2rem',
          border: '1px solid rgba(74, 222, 128, 0.1)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          maxHeight: 'calc(100vh - 40px)',
          overflowY: 'auto'
        }}>
          {/* Header Section */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '1rem',
              background: '#f0fff4',
              borderRadius: '50%',
              marginBottom: '1rem',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}>
              <TreePine style={{ color: '#16a34a', width: '2.5rem', height: '2.5rem' }} />
            </div>
            <h1 style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 1.875rem)', 
              fontWeight: 'bold',
              color: '#166534',
              marginBottom: '0.5rem'
            }}>
              Join Our Mission
            </h1>
            <p style={{ color: '#16a34a' }}>Together we can make a difference 🌎</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.25rem'
          }}>
            {/* Input Field Groups */}
            <div style={{ position: 'relative' }}>
              <User style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#16a34a',
                width: '1.2rem'
              }} />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  borderRadius: '0.75rem',
                  border: '2px solid #dcfce7',
                  outline: 'none',
                  transition: 'all 0.3s',
                  boxSizing: 'border-box'
                }}
                placeholder="Full Name"
                required
              />
            </div>

            <div style={{ position: 'relative' }}>
              <Mail style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#16a34a',
                width: '1.2rem'
              }} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  borderRadius: '0.75rem',
                  border: '2px solid #dcfce7',
                  outline: 'none',
                  transition: 'all 0.3s',
                  boxSizing: 'border-box'
                }}
                placeholder="Email Address"
                required
              />
            </div>

            <div style={{ position: 'relative' }}>
              <Globe style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#16a34a',
                width: '1.2rem'
              }} />
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  borderRadius: '0.75rem',
                  border: '2px solid #dcfce7',
                  outline: 'none',
                  transition: 'all 0.3s',
                  boxSizing: 'border-box'
                }}
                placeholder="Organization (Optional)"
              />
            </div>

            <div style={{ position: 'relative' }}>
              <Lock style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#16a34a',
                width: '1.2rem'
              }} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  borderRadius: '0.75rem',
                  border: '2px solid #dcfce7',
                  outline: 'none',
                  transition: 'all 0.3s',
                  boxSizing: 'border-box'
                }}
                placeholder="Password"
                required
              />
            </div>

            <div style={{ position: 'relative' }}>
              <Lock style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#16a34a',
                width: '1.2rem'
              }} />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  borderRadius: '0.75rem',
                  border: '2px solid #dcfce7',
                  outline: 'none',
                  transition: 'all 0.3s',
                  boxSizing: 'border-box'
                }}
                placeholder="Confirm Password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: '#22c55e',
                color: 'white',
                borderRadius: '0.75rem',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'background 0.3s',
                fontSize: '1rem',
                marginTop: '0.5rem'
              }}
            >
              {isLoading ? (
                <div style={{ 
                  width: '1.25rem', 
                  height: '1.25rem', 
                  border: '2px solid white',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
              ) : (
                <>
                  <span>Create Account</span>
                  <Leaf style={{ width: '1.25rem', height: '1.25rem' }} />
                </>
              )}
            </button>
          </form>

          {/* Footer Links */}
          <div style={{ 
            marginTop: '1.5rem', 
            textAlign: 'center',
            paddingBottom: '0.5rem'
          }}>
            <p style={{ 
              color: '#4b5563',
              fontSize: '0.875rem'
            }}>
              Already have an account?{' '}
              <a 
                href="/login" 
                style={{ color: '#16a34a', textDecoration: 'none', fontWeight: 500 }}
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