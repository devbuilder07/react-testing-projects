import React from 'react';
import { Link } from "react-router-dom";
import './header.css';
import logo1 from '../Images/logo.png';

export default function Header(props) {
    return (
      
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
               <ul>
                <li className="navbar-brand">
                    <Link to="/" className="text-link">
                    <img src={logo1} alt="" /></Link>
                </li>
              </ul>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/service">Service</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
        <Link className="nav-link" to="/contact">Contact</Link>

      </div>
    </div>
  </div>
</nav>

   
    );
}






