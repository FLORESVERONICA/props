import { useState } from "react";

const AddTaskForm = ({ addTask }) => {
    const [task, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        addTask(task);
        setTask('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder="introducr una nueva tarea"
            value={task}
            onChange={(e) => setText(e.target.value)}/>
            <button type='submit'>Añadir Tarea</button>
        </form>
    );
};
export default AddTaskForm;