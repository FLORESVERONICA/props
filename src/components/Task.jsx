const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
    return (
        <div>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none '}}
            onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
    );
};
export default Task;