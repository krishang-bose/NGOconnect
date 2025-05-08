import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './index.css';
import SignupPage from './pages/SignUp';
import LoginPage from './pages/LoginPage';
import AboutUs from './pages/AboutUs';
import BlogSpot from './pages/BlogSpot';
import { useAuthStore } from './store/useAuthStore';
import NGOSearchPage from './pages/NGOSearchPage';
import AnimalShelterDirectory from './pages/Jobs';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import DonationPage from './pages/Donation';
import ProfilePage from './pages/Profile';
import Header from './components/Header';
import Footer from './components/footer';


function App() {
  const { authUser, checkAuth, isCheckingAuth} = useAuthStore();
  const hideNavBar = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/" || location.pathname === "/ngos" ||location.pathname === "/dashboard";
  const hideFooter = location.pathname === "/login" || location.pathname === "/signup";
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
    {!hideNavBar && <Header />}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={!authUser? <SignupPage />: <Navigate to="/dashboard"/>} />
        <Route path="/login" element={!authUser? <LoginPage />: <Navigate to="/dashboard"/>} />
        <Route path="/aboutus" element={authUser?<AboutUs />: <Navigate to="login/"/>} />
        <Route path="/blog" element={authUser?<BlogSpot />: <Navigate to="login/"/>} />
        <Route path="/ngos" element={<NGOSearchPage/>} />
        <Route path="/volunteer" element={authUser?<AnimalShelterDirectory/>: <Navigate to="login/"/>}/>
        <Route path="/dashboard" element={authUser?<Dashboard/>: <Navigate to="login/"/>}/>
        <Route path="/donate" element={authUser?<DonationPage />: <Navigate to="login/"/>}/>
        <Route path="/profile" element={authUser?<ProfilePage />: <Navigate to="login/"/>}/>
      </Routes>
      {!hideFooter && <Footer/>}
    <Toaster/>
  </div>
  );
}

export default App;
