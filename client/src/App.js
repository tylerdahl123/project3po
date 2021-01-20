import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Cal from "./pages/Cal";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Container} from "./components/Grid";
import About from "./pages/About";
import Main from "./pages/Main";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Container>
            <Route exact path="/" component={Main} /> 
            <Route path="/calendar" component={Cal} />   
            <Route path="/about" component={About} />
            <Route path="/login" component={LoginPage} />        
          </Container>
        </Switch>
        <Footer />        
      </div>
    </Router>
  );
}

export default App;
