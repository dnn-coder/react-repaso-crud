import Taskcard from './Taskcard';

import { useContext } from 'react';
import { TaskContext } from './context/TaskContext';

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 style={{ color: 'white', textAlign: 'center' }}>No hay tareas</h1>
    );
  }

  return (
    <>
      <h1>lista de tareas</h1>
      <div className="d-flex flex-wrap ">
        {tasks.map(task => {
          return <Taskcard key={task.id} task={task} />;
        })}
      </div>
    </>
  );
}
