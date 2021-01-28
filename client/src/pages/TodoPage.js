import React, {Component, useState, setState } from 'react';
import {Container, Row, Col} from './../components/Grid';

import TaskInput from './../components/TodoComps/TaskInput';
import List from './../components/TodoComps/List';
import ListFooter from './../components/TodoComps/ListFooter';
import {DataProvider} from './../components/TodoComps/DataProvider';
import './../components/TodoComps/style.css';


function TodoPage(){ 
    
    return(
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
                                <DataProvider>
                                    <div className="todoList">                                    
                                        <TaskInput />
                                        <List />
                                        <ListFooter />
                                    </div>
                                </DataProvider>                           
                            </div>                                                                                                            
                        </Col>
                    </Row>                    
                   
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
    )
}

export default TodoPage;