import React, {useEffect, useState} from "react";
import { Button, Nav, Navbar, Form, FormControl} from "react-bootstrap"
import "./style.css";

function NavNew () {
  
  const [newStyle, setNewStyle] = useState({})
  const[lightMode, setLightMode]= useState({
    lightOn:true
  });

  const activateLight = e => {
    e.preventDefault()
    setLightMode({...lightMode, 
      lightOn: lightMode.lightOn=true});
      localStorage.setItem('lightOn', true);   
  }

  const activateDark = e => {
    e.preventDefault()
    setLightMode({...lightMode, 
      lightOn: lightMode.lightOn=false});
      localStorage.setItem('lightOn', false);   
  }


    // const isLoggedIn = (localStorage.getItem('login') === 'true');

    // let showsettings;

    // if (isLoggedIn) {
    //   showsettings = 
    //   <li className="nav-item">      
    //   <Link
    //   onClick={this.toggleNav}
    //   className={window.location.pathname === "/settings" ? "nav-link active" : "nav-link color"}
    //   to="/settings"
    //   >
    //   Settings
    //   </Link>   
    // </li>   
    // } else {
    //   showsettings = ""
    // }


    return (
    <div>

      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/" >New App Name</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/" >Home</Nav.Link>
          <Nav.Link href="/calendar" >Calendar</Nav.Link>
          <Nav.Link href="/about" >About</Nav.Link>
        </Nav>
        <Form inline>
        <Button variant="light" href="#" onClick={activateLight}>Light Mode</Button> <Button variant="dark" href="#" onClick={activateDark}>Dark Mode</Button>{' '}
        </Form>
      </Navbar>
    </div>
     
    );
  }


export default NavNew;