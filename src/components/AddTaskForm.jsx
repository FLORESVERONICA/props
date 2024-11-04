import { useState } from "react";

const AddTaskForm = ({ addTask }) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(text);
        setText('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}/>
            <button type='submit'>Añadir Tarea</button>
        </form>
    );
};
export default AddTaskForm;