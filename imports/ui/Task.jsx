import React from 'react';

export default function Task({ task, onCheckboxClick, onDeleteClick }) {
  return (
    <li>
      <input
        type="checkbox"
        id={task._id}
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      <label htmlFor={task._id}>{task.text}</label>
      <button type="button" onClick={() => onDeleteClick(task)}>&times;</button>
    </li>
  );
}
