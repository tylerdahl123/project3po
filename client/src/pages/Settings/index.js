import React, {useState} from 'react';
import { Button, Card, Header, Title, Text, Footer, Body, Dropdown, DropdownButton } from 'react-bootstrap';
import "./style.css"
import { Login }  from "../../components/Login.js";
const Settings = () => {
  const [newStyle, setNewStyle] = useState('text-center')
  const activateLight = e => {
    e.preventDefault()
    const newLight = setNewStyle("text-center")
    return() => clearInterval(newLight)
  }
  const activateDark = e => {
    e.preventDefault()
    const newDark = setNewStyle("text-center-dark")
    return() => clearInterval(newDark)
  }
    return (
      <div>
        <Card className={newStyle}>
          <Card.Header>Customize</Card.Header>
          <Card.Body>
          <Button variant="light" href="#" onClick={activateLight}>Light Mode</Button> <Button variant="dark" href="#" onClick={activateDark}>Dark Mode</Button>{' '}   
          </Card.Body> 
        </Card>
        <br/>
        <Card className={newStyle}>
          <Card.Header>Customize your setting #2</Card.Header>
          <Card.Body>
          <DropdownButton id="dropdown-basic-button" title="Setting 2" style={{color: "red"}}>
            <br></br>
          <Dropdown.Item href="#/action-1">option 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">option 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">option 3</Dropdown.Item>
          </DropdownButton>   
          </Card.Body> 
        </Card>
        <br/>
        <Card className={newStyle}>
          <Card.Header>Customize your setting #2</Card.Header>
          <Card.Body>
          <DropdownButton id="dropdown-basic-button" title="Setting 3" style={{color: "red"}}>
            <br></br>
          <Dropdown.Item href="#/action-1">option 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">option 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">option 3</Dropdown.Item>
          </DropdownButton>
          </Card.Body> 
        </Card>
        <Card>
          <Card.Body>
            <Login />
          </Card.Body>
        </Card>
      </div>
    )
}
export default Settings