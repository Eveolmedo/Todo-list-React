const TaskForm = ( {handleSubmit, handleChange} ) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese una tarea"
                onChange={handleChange}>
            </input>
            {/* ACA VA EL COMPONENTE SELECT */}
            <input
                type="submit"
                value="Send">
            </input>
        </form>
    )
}

export default TaskForm
