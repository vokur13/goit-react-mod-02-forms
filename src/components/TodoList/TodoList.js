import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';

export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }, index) => (
        <li
          key={index}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <input
            type="checkbox"
            className="TodoList__checkbox"
            checked={completed}
            onChange={() => {
              onToggleCompleted(id);
            }}
          />
          <p className="TodoList__text">{text}</p>
          <button
            type="button"
            className="TodoList__btn"
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
