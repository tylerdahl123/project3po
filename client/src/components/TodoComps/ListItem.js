import React, {useState} from "react";

export default function ListItem({ todo, id, checkComplete, handleEditTasks }){
    const [editing, setEditing] = useState(false)
    const [taskEdit, setTaskEdit] = useState(todo.name)

    const handleEditing = () =>{
        setEditing(true)
    }

    const handleSave = id =>{
        setEditing(false)
        if(taskEdit){
            handleEditTasks(taskEdit, id)
        }else{
            setTaskEdit(todo.name)
        }
    }

    if(editing){
        return(
            <li>               
                <input 
                    type="text" 
                    id="taskEdit" 
                    value={taskEdit}
                    name="taskEdit"
                    onChange={e => setTaskEdit(e.target.value)}
                />                
                <button onClick={()=> handleSave(id)}>Save</button>
            </li>
        )
    } else {
        return(
            <li>
                <label htmlFor={id} className={todo.complete ? "active" : ""}>
                    <input type="checkbox" id={id} checked={todo.complete}
                    onChange={()=> checkComplete(id) }/>
                    {todo.name}
                </label>
                <button disabled={todo.complete} onClick={handleEditing}>Edit</button>
            </li>
        )
    } 
}