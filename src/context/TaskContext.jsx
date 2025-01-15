import { createContext, useEffect, useState } from 'react';
import { tasks as data } from '../db';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(taskTitle, description) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: taskTitle,
        description,
      },
    ]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}>
      {props.children}
    </TaskContext.Provider>
  );
}
