import Task from "./Task";
const ContentTask = ({ tasks, setTasks, checkTask }) => {
    return (
        <ul className="flex flex-col items-center w-full mt-8">
            {tasks.map((task) => {
                return <Task
                    tasks={tasks}
                    setTasks={setTasks}
                    checkTask={checkTask}
                    task={task}
                    completed={task.completed}
                    key={task.id}
                />   
            })
            }
        </ul>
    )
}

export default ContentTask