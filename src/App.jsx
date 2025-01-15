import TaskForm from './TaskForm';
import TaskList from './TaskList';

import { useContext } from 'react';
import { TaskContext } from './context/TaskContext';

function App() {
  useContext(TaskContext);

  return (
    <div
      className="container mt-4 p-4"
      style={{ backgroundColor: '#1C1D27', color: 'white' }}>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
