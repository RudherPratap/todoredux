import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './reducers/todoSlice';
import { Link } from 'react-router-dom'; 


const CreatePage = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  };

  return (
    <div className='container'>
      <h1>Create Todo</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="input-field" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button className="add-button" type="submit">Add Todo</button>
      </form>
      <Link className='display-button' to="/">Go to Display Page</Link>
    </div>
  );
};

export default CreatePage;
