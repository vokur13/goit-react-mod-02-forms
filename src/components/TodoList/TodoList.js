import React from 'react';
import classNames from 'classnames';
import { Todo } from 'components/Todo';
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
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() => {
              onToggleCompleted(id);
            }}
            onDelete={() => {
              onDeleteTodo(id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
