import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">   
      <a className="navbar-brand">The Calendar App</a>      
      <ul className="navbar-nav w-100 justify-content-end">       
        
        <Link to="/" className={
          window.location.pathname === "/" || 
          window.location.pathname === "/login" ||
          window.location.pathname ==="/cal"
          ? "nav-link active" : "nav-link" } >
          Home
        </Link>
          
        <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        > About </Link>

      </ul>    
    </nav>
  );
}