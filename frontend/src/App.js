import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import Login from './screens/Forms/login/LoginForm'
import Signup from "./screens/Forms/signup/SignupFrom";

import AboutUs from "./screens/More/AboutUs";

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
          
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;