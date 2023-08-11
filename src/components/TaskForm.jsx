import React, { useState } from "react";

const TaskForm = ( { handleSubmit, handleChange, handleFilterChange, task } ) => {
    const [isActive, setIsActive] = useState(false)
      
    const handleFocus = () => {
        setIsActive(true)
    }
      
    const handleBlur = () => {
        setIsActive(false)
    }
      
    const errorMessage = isActive && task.replace(/\s/g, '').length < 5 ? "Ingresar más de 5 caracteres" : ""

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center md:flex-row flex-wrap justify-center">
            <fieldset className="w-full flex justify-center">
                <fieldset className="flex flex-col w-4/5 md:w-2/5 mr-16">
                    <input
                        type="text"
                        placeholder="Ingrese una tarea"
                        onChange={handleChange}
                        className="p-2 rounded md:h-12"
                        onFocus={handleFocus}
                        onBlur={handleBlur}>
                    </input>
                    <span className="text-red-800 font-bold my-3 text-center">{errorMessage}</span>
                </fieldset>
                <select onChange={handleFilterChange} className="w-4/5 p-2 md:w-2/5 h-12 p-2">
                    <option value="Todas">Todas</option>
                    <option value="Incompletas">Incompletas</option>
                    <option value="Completas">Completas</option>
                </select>
            </fieldset>
            <input
                type="submit"
                value="Send"
                className="p-3 my-5 bg-[#69585F] text-white rounded md:w-48">
            </input>
        </form>
    )
}

export default TaskForm
