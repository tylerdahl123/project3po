import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cal from "./pages/Cal";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Container} from "./components/Grid";
import About from "./pages/About";
import Main from "./pages/Main";
import Settings from "./pages/Settings";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Container>
            <Route exact path="/" component={Main} /> 
            <Route path="/calendar" component={Cal} />
            <Route path="/settings" component={Settings} />    
            <Route path="/about" component={About} />      
          </Container>
        </Switch>
        <Footer />        
      </div>
    </Router>
  );
}

export default App;
