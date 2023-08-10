const TaskForm = ( { handleSubmit, handleChange } ) => {
    
    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-12">
            <input
                type="text"
                placeholder="Ingrese una tarea"
                onChange={handleChange}
                className="w-2/5 h-12 p-2 mr-16 rounded">
            </input>
            {/* ACA VA EL COMPONENTE SELECT */}
            <input
                type="submit"
                value="Send"
                className="w-40 bg-[#69585F] rounded">
            </input>
        </form>
    )
}

export default TaskForm
