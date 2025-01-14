import { useEffect } from 'react';
import { Route, Routes,useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

// Import pages
import Dashboard from '../pages/Dashboard';
import SignInForm from '../pages/Auth/SignIn';
import SignUpFrom from '../pages/Auth/SignUp';

const AppRouter = () => {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change


  return (
    <Routes>
      <Route path="/" exact element={<Dashboard/>} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<SignUpFrom/>} />
      <Route path="/login" element={<SignInForm/>} />
    </Routes>
  );
};

export default AppRouter;
