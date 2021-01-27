import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cal from "./pages/Cal";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Container} from "./components/Grid";
import About from "./pages/About";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import TodoPage from "./pages/TodoPage";



function App() {
  return (
    <Router>
      <div className="mainstyle">
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />            
            <Route path="/calendar" component={Cal} />
            <Route path="/settings" component={Settings} />   
            <Route path="/about" component={About} />  
            <Route path="/reminders" component={TodoPage} />           
        </Switch>
        <Footer />        
        </div>
    </Router>
  );
}

export default App;
