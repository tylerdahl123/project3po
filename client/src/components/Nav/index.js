import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state={
    loginState: false,
    login: ""
  }


  handleLoginChange = loginState => {
    this.setState({ login: this.state.login });
  };

  renderLogin = () => {
    if (this.state.loginState === false){
      return "Login" 
    } else if (this.state.loginState === true){
     return  "Logout" 
    } 
  }

  render(){
  return (
    <nav className="navbar navbar-expand-lg">   
      <a className="navbar-brand">The Calendar App</a>      
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
          <Link to="/login" 
            loginState = {this.state.loginState}
            handleLoginChange={this.state.handleLoginChange}
          > 
            { this.renderLogin() }
          </Link>
          </button>
      </ul>    
    </nav>
  );
}
}

export default Nav;