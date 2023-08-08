import React, { useState } from "react";
import TaskForm from "./TaskForm"

const NewTask = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("task")) || [])
    const [task, setTask] = useState("")

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmedTask = task.trim();
        if (trimmedTask === "") {
            return;
        }
        const newTaskObj = {
            id: crypto.randomUUID(), 
            task: trimmedTask,
            completed: false,
        }
        localStorage.setItem("task", JSON.stringify([...tasks, newTaskObj]))
        setTasks([...tasks, newTaskObj])
    }

    return (
        <>
            <TaskForm handleSubmit={handleSubmit} handleChange={handleChange}/>
        </>
    )
}

export default NewTask


