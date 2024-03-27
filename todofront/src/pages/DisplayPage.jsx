import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo } from './reducers/todoSlice';

const DisplayPage = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="container">
      <h1>Todos</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            {todo.text}
            <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
            <Link className="update-link" to={`/update/${todo.id}`}>
              <button className="update-button">Update</button>
            </Link>
          </li>
        ))}
      </ul>
      <Link className="create-link" to="/create">
        <button className="add-button">Add Todo</button>
      </Link>
    </div>
  );
};

export default DisplayPage;
