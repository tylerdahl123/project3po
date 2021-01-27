import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Container} from "./components/Grid";
import About from "./pages/About";
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";

function App() {
  const [newStyle, setNewStyle] = useState({})

  const isLoggedIn = (localStorage.getItem('lightOn') === 'true');

  useEffect(() => {
  if(isLoggedIn) {
    const newLight = setNewStyle(lightMode)
    clearInterval(newLight)
  }else{
    const newDark = setNewStyle(darkMode)
  clearInterval(newDark)
  }
}, [isLoggedIn])

const lightMode = {
  backgroundColor: 'rgb(243, 232, 232)',
  backgroundSize: 'cover',
  fontFamily: "'Montserrat', sansSerif",
  letterSpacing: '.2rem',
  backgroundImage: "url('https://coolbackgrounds.io/images/backgrounds/white/white-unsplash-9d0375d2.jpg')",
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center'
}
const darkMode = {
  backgroundColor: 'black',
  backgroundSize: 'cover',
  fontFamily: "'Montserrat', sansSerif",
  letterSpacing: '.2rem',
  backgroundImage: "url('https://coolbackgrounds.io/images/unsplash/samuel-zeller-medium-b832fe04.jpg')",
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center'
}

// body.setAttribute("style", darkMode)
  return (
    <Router>
      <div className="mainstyle">
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />           
            <Route path="/about" component={About} />  
            <Route path="/reminders" component={TodoPage} />  
        </Switch>
        <Footer />        
        </div>
    </Router>
  );
}

export default App;
