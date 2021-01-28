import React, {useState, useContext, useRef, useEffect} from 'react';
import {DataContext} from './DataProvider'

export default function TaskInput(){
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const taskInput = useRef();

    const addTodo = e =>{
        e.preventDefault();
        setTodos([...todos, {name: todoName, complete: false}])
        setTodoName('');
        taskInput.current.focus();
    }

    useEffect(() =>{
        taskInput.current.focus();
    },[])

    return(
        <form autoComplete="off" onSubmit={addTodo}>
            <input 
                type="text" 
                name="todos" 
                id="todos"
                ref={taskInput}
                placeholder="Need a Reminder?" 
                value={todoName}  onChange={e => setTodoName(e.target.value)}       
            />
            <button type="submit">Add to List</button>
        </form>
    )
}