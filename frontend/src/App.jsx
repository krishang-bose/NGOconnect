import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './index.css';
import SignupPage from './pages/SignUp';
import LoginPage from './pages/LoginPage';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogSpot';
import { useAuthStore } from './store/useAuthStore';
import NGOSearchPage from './pages/NGOSearchPage';
import AnimalShelterDirectory from './pages/Jobs';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import DonationPage from './pages/Donation';


function App() {
  const { authUser, checkAuth, isCheckingAuth} = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log({authUser});
  if(isCheckingAuth && authUser === null){ return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  )}
  return (
  <div>
      <Routes>
        <Route path="/" element={authUser?<HomePage />: <Navigate to= "login/"/>} />
        <Route path="/signup" element={!authUser? <SignupPage />: <Navigate to="/"/>} />
        <Route path="/login" element={!authUser? <LoginPage />: <Navigate to="/"/>} />
        <Route path="/aboutus" element={authUser?<AboutUs />: <Navigate to="login/"/>} />
        <Route path="/blog" element={authUser?<BlogPage />: <Navigate to="login/"/>} />
        <Route path="/ngos" element={authUser?<NGOSearchPage />: <Navigate to="login/"/>} />
        <Route path="/volunteer" element={<AnimalShelterDirectory/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/donate" element={<DonationPage />}/>
      </Routes>
    <Toaster/>
  </div>
  );
}

export default App;
