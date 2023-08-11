import React, { useState } from "react";
import TaskForm from "./TaskForm"
import ContentTask from "./ContentTask";

const NewTask = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("task")) || [])
    const [task, setTask] = useState("")
    const [filter, setFilter] = useState("Todas");

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    
    const handleSubmit = () => {
        const trimmedTask = task.trim();
        if (trimmedTask === "") {
            return;
        }
        const newTaskObj = {
            id: crypto.randomUUID(), 
            task: trimmedTask,
            completed: false,
        }
        const updatedTasks = [...tasks, newTaskObj];
    
        localStorage.setItem("task", JSON.stringify(updatedTasks));
        setTasks([...tasks, newTaskObj])
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === "Todas") {
            return tasks
        } else if (filter === "Completas") {
            return task.completed;
        } else if (filter === "Incompletas") {
            return !task.completed;
        }
    })

    const checkTask = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        localStorage.setItem("task", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    }

    return (
        <>
            <TaskForm handleSubmit={handleSubmit} handleChange={handleChange} handleFilterChange={handleFilterChange} task={task} />
            <ContentTask tasks={filteredTasks} setTasks={setTasks} checkTask={checkTask}/>
        </>
    )
}

export default NewTask