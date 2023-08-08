import Task from "./Task";
const ContentTask = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => {
                return <Task
                    task={task}
                    key={task.id}
                />   
            })
            }
        </ul>
    )
}

export default ContentTask