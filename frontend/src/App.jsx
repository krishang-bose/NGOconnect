import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './index.css';
import SignupPage from './pages/SignUp';
import LoginPage from './pages/LoginPage';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogSpot';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<BlogPage/>} />
      </Routes>
  );
}

export default App;
