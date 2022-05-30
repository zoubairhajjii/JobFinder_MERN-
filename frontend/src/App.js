import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import store from './store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './screens/home/Home'
import Footer from './components/footer/Footer'
import Checkout from './screens/checkout/Checkout'
import Login from './screens/Forms/login/LoginForm'
import Signup from "./screens/Forms/signup/SignupFrom";
import ForgotPassword from './screens/Forms/ForgotPassword'

import AboutUs from "./screens/More/AboutUs";
import ForgotPassSuccess from "./screens/User/ForgotPassSuccess";

function App() {
  
  
 
  
 
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      <div className="app" >
        
        <Switch>
          <Route exact path='/password/forgot' component={ForgotPassword} />
          <Route exact path='/forgot/:id' component={ForgotPassSuccess} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={AboutUs} />
          
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;