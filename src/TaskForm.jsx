import { useState } from 'react';

import { useContext } from 'react';
import { TaskContext } from './context/TaskContext';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createTask } = useContext(TaskContext);

  const handleSubmit = event => {
    event.preventDefault();
    createTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Formulario de tareas</h1>
      <form
        onSubmit={handleSubmit}
        className="form-control"
        style={{
          width: '50%',
          margin: 'auto',
          backgroundColor: '#2A2D43',
          color: 'white',
        }}>
        <label className="form-label" htmlFor="title">
          Titulo
        </label>
        <br />
        <input
          onChange={e => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
          value={title}
          required
          className="form-control"
          style={{ backgroundColor: '#8690DF', color: 'white' }}
        />
        <br />
        <label className="form-label" htmlFor="description">
          Descripcion
        </label>
        <br />
        <textarea
          onChange={e => setDescription(e.target.value)}
          type="text"
          id="description"
          name="description"
          value={description}
          required
          className="form-control"
          style={{ backgroundColor: '#8690DF', color: 'white' }}
        />
        <br />
        <button className="btn btn-primary">Guardar</button>
      </form>
    </>
  );
}
