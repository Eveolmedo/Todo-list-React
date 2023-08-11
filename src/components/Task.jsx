import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Task = ({ task:{ task, id, completed }, tasks, setTasks, checkTask}) => {

    const filterTask = () => {
        checkTask(id)
    }
    
    const deleteTask = () => {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        localStorage.setItem("task", JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
    }
    
    return (
        <li className="flex justify-around aling-center w-4/5 bg-white mb-3 md:w-1/2">
            <p className={`text-2xl flex-1 p-2 ${completed ? "line-through text-gray-500" : ""}`}>{task} </p>
            <button className={`p-5 ${completed ? "bg-gray-600 text-white": "bg-[#ADF1D2]"}`} onClick={filterTask}><FaCheck /></button>
            <button className="p-5 text-white bg-[#69585F]" onClick={deleteTask}><FaTrash /></button>
        </li>
    )
}

export default Task