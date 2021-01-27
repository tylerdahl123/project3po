import React, {useEffect, useState} from "react";
import { Button, Nav, Navbar, Form, FormControl} from "react-bootstrap"
import "./style.css";

function NavNew () {
  
  const [newStyle, setNewStyle] = useState({})
  const[lightMode, setLightMode]= useState({
    lightOn:true
  });
  const body = document.querySelector("body")

  const activateLight = e => {
    setLightMode({...lightMode, 
      lightOn: lightMode.lightOn=true});
      localStorage.setItem('lightOn', true);
  }

  const activateDark = e => {
    setLightMode({...lightMode, 
      lightOn: lightMode.lightOn=false});
      localStorage.setItem('lightOn', false); 
  }

    const isLoggedIn = (localStorage.getItem('lightOn') === 'true');

    useEffect(() => {
    if(isLoggedIn) {
      body.removeAttribute("style")
      body.setAttribute("style", `background-color:rgb(243, 232, 232);
      background-size:cover;
      font-family:'Montserrat', sansSerif;
      letter-spacing:.2rem;
      background-image:url('https://coolbackgrounds.io/images/backgrounds/white/white-trianglify-b79c7e1f.jpg');
      background-attachment:fixed;
      background-position:center;`)
    }else{
      body.removeAttribute("style")
      body.setAttribute("style", `background-color:black;
      background-size:cover;
      color:white;
      font-family:'Montserrat', sansSerif;
      letter-spacing:.2rem;
      background-image:url('https://coolbackgrounds.io/images/backgrounds/black/black-radial-gradient-bb05ed79.jpg');
      background-attachment:fixed;
      background-position:center;`)
    }
  }, [isLoggedIn])

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

      <Navbar bg={newStyle} variant={newStyle}>
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