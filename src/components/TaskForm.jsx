import React, { useState } from "react";
const TaskForm = ( { handleSubmit, handleChange, handleFilterChange, task } ) => {
    const [isActive, setIsActive] = useState(false)
      
    const handleFocus = () => {
        setIsActive(true);
    }
      
    const handleBlur = () => {
        setIsActive(false);
    }
      
    const errorMessage = isActive && task.replace(/\s/g, '').length < 5 ? "No puede ser menos de 5 caracteres" : "";

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-12">
            <input
                type="text"
                placeholder="Ingrese una tarea"
                onChange={handleChange}
                className="w-2/5 h-12 p-2 mr-16 rounded"
                onFocus={handleFocus}
                onBlur={handleBlur}>
            </input>
            <span >{errorMessage}</span>
            <select onChange={handleFilterChange}>
                <option value="Todas">Todas</option>
                <option value="Incompletas">Incompletas</option>
                <option value="Completas">Completas</option>
            </select>
            <input
                type="submit"
                value="Send"
                className="w-40 bg-[#69585F] rounded">
            </input>
        </form>
    )
}

export default TaskForm
