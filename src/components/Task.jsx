const Task = ({ task }) => {
    return (
        <li>
            <p>{task.task} </p>
            <button>check</button>
            <button>delete</button>
        </li>
    )
}

export default Task