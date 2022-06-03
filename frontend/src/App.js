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
function App() {
  
  
 
  
 
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      <div className="app" >
        
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={AboutUs} />
          <Route exact path='/homee' component= {Homee} />
          <Route exact path='/password/forgot' component= {ForgotPassword} />
          <Route exact path='/password/reset/:token' component={ResetPassword} />
          <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

          
          
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;