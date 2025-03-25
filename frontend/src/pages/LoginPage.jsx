import React, { useState } from 'react';
import { Leaf, TreePine } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <TreePine 
            style={{ color: '#4ade80', opacity: 0.2 }} 
            size={40 + Math.random() * 40} 
          />
        </div>
      ))}

      {/* Main Login Container */}
      <div style={{ 
        width: '90%',
        maxWidth: '400px',
        position: 'relative',
        margin: '20px auto'
      }}>
        {/* Fun Interactive Border */}
        <div style={{
          position: 'absolute',
          inset: '-5px',
          background: 'linear-gradient(45deg, #4ade80 0%, #fbbf24 100%)',
          borderRadius: '1.5rem',
          opacity: '0.5',
          filter: 'blur(15px)',
        }} />
        
        {/* Login Form Card */}
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
          {/* Logo and Header */}
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
              Welcome Back!
            </h1>
            <p style={{ color: '#16a34a' }}>Let's make Earth greener together 🌱</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.25rem'
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                border: '2px solid #dcfce7',
                outline: 'none',
                transition: 'all 0.3s',
                boxSizing: 'border-box'
              }}
              placeholder="Your Email"
              required
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                border: '2px solid #dcfce7',
                outline: 'none',
                transition: 'all 0.3s',
                boxSizing: 'border-box'
              }}
              placeholder="Password"
              required
            />

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
                fontSize: '1rem'
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
                  <span>Sign In</span>
                  <Leaf style={{ width: '1.25rem', height: '1.25rem' }} />
                </>
              )}
            </button>
          </form>

          {/* Links */}
          <div style={{ 
            marginTop: '1.5rem', 
            textAlign: 'center',
            paddingBottom: '0.5rem'
          }}>
            <a 
              href="/signup" 
              style={{ 
                color: '#16a34a', 
                textDecoration: 'none', 
                fontSize: '0.875rem',
                display: 'inline-block'
              }}
            >
              Forgot password?
            </a>
            <p style={{ 
              marginTop: '1rem', 
              color: '#4b5563',
              fontSize: '0.875rem'
            }}>
              New here?{' '}
              <a 
                href="/signup" 
                style={{ color: '#16a34a', textDecoration: 'none', fontWeight: 500 }}
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