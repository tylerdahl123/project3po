import React, {Component, useState, setState } from 'react';
import {Container, Row, Col} from './../components/Grid';
import tasks from "../TaskList.json";
import ToDoList from "../components/ToDoList";
import ToDoForm from '../components/ToDoForm';

function TodoPage(){

  const [ toDoList, setToDoList ] = useState(tasks);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const addTask = (userInput ) => {
    let newTask = [...toDoList];
    newTask = [...newTask, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(newTask);
  }
    
    return(
        <div>
        <Container>
        <div className="remtitle">
            <p> Reminders and Tips </p>
        </div>
        <div className="page-container">             
            <div className="content-wrap">                    
                <Container>                   
                    <Row>
                        <Col size="md-12">
                            <h1>To Do List</h1>
                            <br />
                            <div className="todoexplain">
                            Use this to help remember the little things!
                            <br/>
                            Like prepping your meals!
                            <br/>
                            Or remembering to leave a little early to grab coffee before work!
                            </div>                                                        
                            <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
                            <ToDoForm addTask={addTask}/>                                                      
                        </Col>
                    </Row>                     
                    <br />
                    <br />
                    <Row>
                        <Col size="md-12">
                            <h1>Tips and Tricks!</h1>
                            <br />
                            <div className="tiplist">
                                <p> Need some help getting there on time? We all do sometimes!</p><p> Break your routine down into steps 
                                    like getting ready, packing/prepping anything you need to bring, getting anything done you need to do before you leave 
                                    (feeding pets, getting the slowcooker ready, taking medication, etc.), grabbing your keys, and set smaller reminders for yourself
                                    so the act of leaving doesn't feel like such a huge task! It helps you remember what you need to do and gets rid of the anxiety 
                                    that you forgot something that can hold you up at the door.</p><p> Notice you're low on gas? Add it to your reminders so you 
                                    remember to leave a little bit earlier the next day or grab it on the way back from your event! No more worries!
                                    </p>
                                    <p>
                                    Feels good to get organized, doesn't it? 😉
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>  
        </div>
        </Container>
        </div>
    )
}

export default TodoPage;