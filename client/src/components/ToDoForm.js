import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="todoinput" value={userInput} type="text" onChange={handleChange} placeholder="Need A Reminder?"/>
            <br/>
            <button className="addbtn">Add to List</button>
        </form>
    );
};

export default ToDoForm;