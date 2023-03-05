import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './header.css';
import logo1 from '../Images/logo.png';
import Home from "../Home";
import About from "../About";
import Service from "../Service";
import Blog from "../Blog";
import Contact from "../Contact";
export default function Header() {
    return (
      <Router>
        <div className="navbar">
            <div className="logoarea">
                <ul>
                <li><Link to="/" className="text-link">
                    <img src={logo1} alt="" />
                    </Link></li>
                </ul>
            </div>
        <ul className="nav-area">
          <li><Link to="/" className="text-link">Home</Link></li>
          <li><Link to="/about" className="text-link">About</Link></li>
          <li><Link to="/service" className="text-link">Service</Link></li>
          <li><Link to="/blog" className="text-link">Blog</Link></li>
          <li><Link to="/contact" className="text-link">Contact</Link></li>
        </ul>
        <ul className="login-area">
        <li>
            <button className="loginbtn">LOGIN</button>
          </li>
          <li>
            <button className="signbtn">SIGN UP</button>
          </li>
        </ul>

        </div>

        <Switch>

          <Route exact path="/" render={()=>{
                  return (
                      <>
                          <Home />
                      </>
                  )
              }}>
              </Route>

          <Route exact path="/about" render={()=>{
                  return (
                      <>
                          <About />
                      </>
                  )
              }}>
              </Route>

              <Route exact path="/service" render={()=>{
                  return (
                      <>
                          <Service />
                      </>
                  )
              }}>
              </Route>

              <Route exact path="/blog" render={()=>{
                  return (
                      <>
                          <Blog />
                      </>
                  )
              }}>
              </Route>

              <Route exact path="/contact" render={()=>{
                  return (
                      <>
                          <Contact />
                      </>
                  )
              }}>
              </Route>

        </Switch>
      </Router>
    );
}






