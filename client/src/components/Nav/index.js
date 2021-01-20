import React, { useState, setState } from "react";
import { Link } from "react-router-dom";

export default function Nav(){  
  const [loginState, setLoginState] = useState(); 

  const renderLogin = () => {
    if (!loginState){
      return "Login" 
    } else if (loginState){
     return  "Logout" 
    } 
  }

  return (
    <nav className="navbar navbar-expand-lg">   
      <p className="navbar-brand">The Calendar App</p>      
      <ul className="navbar-nav w-100 justify-content-end">       
        
        <Link to="/" className={
          window.location.pathname === "/"
          ? "nav-link active" : "nav-link" } >
          Home
        </Link>
        <Link to="/cal" className={window.location.pathname === "/cal" ? "nav-link active": "nav-link"}>
        Calendar </Link>
          
        <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        > About </Link>


        <button className="login">
          <Link to="/login"> 
             { renderLogin() }
          </Link>
          </button>
      </ul>    
    </nav>
  );

}