import React, {useContext, useState} from 'react';
import {DataContext} from './DataProvider';

export default function ListFooter(){
    const[ checkAll, setCheckAll ] = useState(false)
    const [ todos, setTodos ] = useContext(DataContext)

    const handleCheckAll = () =>{
        const newTodos = [...todos]
        newTodos.forEach(todo =>{
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

    const deleteTodo = () =>{
        const newTodos = todos.filter(todo =>{
            return todo.complete === false
        })
        setTodos(newTodos)
        setCheckAll(false)
    }

    return(
        <>
        {
            todos.length === 0 ? 
            <h3>
                Use this list to help remember the little things!
                <br/><br />
                Like prepping your meals!
                <br/><br />
                Or remembering to leave a little early to grab coffee before work!
            </h3>
        :      
            <div className="row">
                <label htmlFor="all">
                    <input type="checkbox" name="all" id="all"
                        onChange={handleCheckAll} checked={checkAll} />
                        Select All
                </label>
                <button id="delete" onClick={deleteTodo} >Remove</button>
            </div> 
        }
      </>
    )
}