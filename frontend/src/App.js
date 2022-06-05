import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import Login from './screens/Forms/login/LoginForm'
import Signup from "./screens/Forms/signup/SignupFrom";
import {Switch}  from "react-router-dom";
import AboutUs from "./screens/about/AboutUs";
import ForgotPassword from "./screens/Forms//password/ForgotPassword"
import ResetPassword from "./screens/Forms//password/ResetPassword"
import Homee from "./screens/home/Homee";
import ActivationEmail from "./screens/Forms/password/ActivationEmail";
import ProfileAdmin from "./screens/service/pages/ProfileAdmin";
import ProfileProfissionell from "./screens/service/pages/ProfileProfissionell";
import NewServiceAdd from "./screens/service/NewServiceAdd";
function App() {
  
  
 
  
 
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      <div className="app" >
        <NewServiceAdd />
      


          

          
          
        
      </div>
    
    </Router>
  );
}

export default App;