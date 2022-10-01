import React from 'react';
import { IconButton } from 'components/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

export const Todo = ({ text, completed, onToggleCompleted, onDelete }) => {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      <button type="button" className="TodoList__btn" onClick={onDelete}>
        Remove
      </button>
      {/* <IconButton>
        <DeleteIcon width="32px" height="32px" fill="#fff" />
      </IconButton> */}
    </>
  );
};
