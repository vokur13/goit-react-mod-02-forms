import React from 'react';
import './TodoList.css';

export const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text }, index) => (
        <li key={index} className="TodoList__item">
          <p className="TodoList__text">{text}</p>
          <button
            onClick={() => {
              onDeleteTodo(id);
            }}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
