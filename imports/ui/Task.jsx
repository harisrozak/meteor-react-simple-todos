import React from "react";

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
	return (
		<li>
			<input
				type="checkbox"
				id={task._id}
				checked={!!task.isChecked}
				onClick={() => onCheckboxClick(task)}
				readOnly
			/>
			<label htmlFor={task._id} >{task.text}</label>
			<button onClick={() => onDeleteClick(task)}>&times;</button>
		</li>
	)
}