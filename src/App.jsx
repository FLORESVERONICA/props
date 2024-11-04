import './App.css'
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);
  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  const toggleTaskCompletion = (taskId) => { setTasks(task.map(task => task.id === taskId ? {
    ...task, completed: !task.completed
  } : task ));
};

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask= {addTask}/>
      {tasks.map(task => (
        <Task 
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion} />
      ))}
    </div>
  );
};

export default App;
