import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Task = ({ task:{ task, id, completed }, tasks, setTasks}) => {
    
    const deleteTask = () => {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        localStorage.setItem("task", JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
    }

    const checkTask = () => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
        localStorage.setItem("task", JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
    }
    
    return (
        <li className="flex justify-around aling-center w-1/2 bg-white mb-2">
            <p className={`text-3xl flex-1 p-2 ${completed ? "line-through text-gray-500" : ""}`}>{task} </p>
            <button className={`p-5 text-xl text-white ${completed ? "bg-gray-600": "bg-[#ADF1D2]"}`} onClick={checkTask}><FaCheck /></button>
            <button className="p-5 text-xl text-white bg-[#69585F]" onClick={deleteTask}><FaTrash /></button>
        </li>
    )
}

export default Task