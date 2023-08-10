import Task from "./Task";
const ContentTask = ({ tasks, setTasks }) => {
    return (
        <ul className="flex flex-col items-center">
            {tasks.map((task) => {
                return <Task
                    tasks={tasks}
                    setTasks={setTasks}
                    task={task}
                    key={task.id}
                />   
            })
            }
        </ul>
    )
}

export default ContentTask