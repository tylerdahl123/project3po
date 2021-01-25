import React from 'react';
import { Button, Card, Header, Title, Text, Footer, Body, Dropdown, DropdownButton } from 'react-bootstrap';
import "./style.css"
import { Login }  from "../../components/Login.js";

function Settings() {
    return (
      <div>
        <Card className="text-center">

          <Card.Header>Customize</Card.Header>
          <Card.Body>
          <DropdownButton id="dropdown-basic-button" title="Color Scheme" style={{olor: "red"}}>

            <br></br>
          <Dropdown.Item href="#/action-1">Dark Mode</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Theme 1</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Theme 2</Dropdown.Item>
          </DropdownButton>    
          </Card.Body> 
        </Card>

        <br/>

        <Card className="text-center">
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

        <Card className="text-center">
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
