import React, {useEffect, useState} from "react";
import { Button, Nav, Navbar, Form, FormControl} from "react-bootstrap"
import { Login } from "./../Login"
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
      window.location.reload(false)
  }

  const activateDark = e => {
    setLightMode({...lightMode, 
      lightOn: lightMode.lightOn=false});
      localStorage.setItem('lightOn', false); 
      window.location.reload(false)
  }

    const isLoggedIn = (localStorage.getItem('lightOn') === 'true');

    const login = (localStorage.getItem('login') === 'true');

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
      font-family:'Montserrat', sansSerif;
      letter-spacing:.2rem;
      background-image:url('https://coolbackgrounds.io/images/backgrounds/black/black-radial-gradient-bb05ed79.jpg');
      background-attachment:fixed;
      background-position:center;`)
    }
  }, [isLoggedIn])


  useEffect(() => {
    if(isLoggedIn) {
      const newLight = setNewStyle("light")
      clearInterval(newLight)
    }else{
      const newDark = setNewStyle("dark")
    clearInterval(newDark)
    }
  }, [isLoggedIn])

    let showReminders;

    if (login) {
      showReminders =           
      <Nav.Link href="/reminders"> Reminders </Nav.Link> 
    } else {
      showReminders = ""
    }



    return (

    <div>

      <Navbar bg={newStyle} variant={newStyle}>
        <Navbar.Brand href="/" >Early Bird</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/" >Home</Nav.Link>
          <Nav.Link href="/about" >About</Nav.Link>
          {showReminders} 
          <Login />
        </Nav>
       
        <Form inline>
        <Button variant="light" href="#" onClick={activateLight}>Light Mode</Button> <Button variant="dark" href="#" onClick={activateDark}>Dark Mode</Button>{' '}
        </Form>
      </Navbar>
    </div>
     

    );
  }


export default NavNew;