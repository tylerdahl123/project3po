import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" 
            //if userlogin is false
            component={Login}  
            // if userlogin is true
            component={Home} 
          />                
        </Switch>
        <Footer />        
      </div>
    </Router>
  );
}

export default App;
