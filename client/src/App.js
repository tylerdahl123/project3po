import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Cal from "./pages/Cal";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Container, Col, Row } from "./components/Grid";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Container>
            <Route exact path="/" component={Login} /> 
            <Route exact path="cal" component={Cal} />   
            <Route exact path="about" component={About} />         
          </Container>
        </Switch>
        <Footer />        
      </div>
    </Router>
  );
}

export default App;
