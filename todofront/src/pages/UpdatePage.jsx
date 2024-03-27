import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { updateTodo } from './reducers/todoSlice';

const UpdatePage = () => {
  const { id } = useParams();
  const todo = useSelector((state) => state.todo.find((todo) => todo.id === parseInt(id)));
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: parseInt(id), text }));
    alert('Task updated succesfully')
  };

  return (
    <div className="container">
      <h1>Update Todo</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="input-field" type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="update-button" type="submit">Update Todo</button>
      </form>
      <Link className="display-button" to="/">Go to Display Page</Link>
    </div>
  );
};

export default UpdatePage;
