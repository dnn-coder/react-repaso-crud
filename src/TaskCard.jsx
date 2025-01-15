import { useContext } from 'react';
import { TaskContext } from './context/TaskContext';

export default function Taskcard({ task = [] }) {
  const { deleteTask } = useContext(TaskContext);
  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <div
      className="card m-2 p-3"
      style={{ width: '18rem', backgroundColor: '#2A2D43', color: 'white' }}>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <button onClick={handleDeleteTask} className="btn btn-danger">
        Eliminar
      </button>
    </div>
  );
}
