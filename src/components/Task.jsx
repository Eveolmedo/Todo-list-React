import React, { useState } from "react";
const Task = ({ task:{ task, id }, tasks, setTasks}) => {
    
    const deleteTask = () => {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        localStorage.setItem("task", JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
    }



    return (
        <li>
            <p>{task} </p>
            <button>check</button>
            <button onClick={deleteTask}>delete</button>
        </li>
    )
}

export default Task