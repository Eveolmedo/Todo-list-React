import React, { useState } from "react";

const TaskForm = () => {
    const [task, setTask] = useState("")

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    return (
        <>
            <form>
                <input
                    type="text" 
                    placeholder="Ingrese una tarea" 
                    onChange={handleChange}
                />
                <input type="submit" value="Send"></input>
            </form>
        </>
    )
}

export default TaskForm
