import React, { useContext, useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import TaskContext from '../../context/task/TaskContext';

const TaskForm = () => {
	const nameRef = useRef('');
	const descriptionRef = useRef('');
	const levelRef = useRef(LEVELS.NORMAL);
	const { addTask, tasks } = useContext(TaskContext);
	const length = tasks.length;

	function add(e) {
		e.preventDefault();
		const newTask = new Task(
			nameRef.current.value,
			descriptionRef.current.value,
			false,
			levelRef.current.value
		);
		nameRef.current.value = descriptionRef.current.value = '';
		addTask(newTask);
	}

	return (
		<form onSubmit={add} className="d-flex justify-content-center align-items-center mb-4">
			<div className="form-outline flex-fill">
				<input
					ref={nameRef}
					id="inputName"
					type="text"
					className="form-control form-control-lg mb-3"
					required
					placeholder="Task name"
				/>
				<input
					ref={descriptionRef}
					id="inputDescription"
					type="text"
					className="form-control form-control-lg mb-3"
					required
					placeholder="Task description"
				/>
				<select
					className="form-control form-control-lg mb-3"
					ref={levelRef}
					defaultValue={LEVELS.NORMAL}
					id="selectLevel"
				>
					<option className="text-primary" value={LEVELS.NORMAL}>
						Normal
					</option>
					<option className="text-warning" value={LEVELS.URGENT}>
						Urgent
					</option>
					<option className="text-danger" value={LEVELS.BLOCKING}>
						Blocking
					</option>
				</select>
				<button type="submit" className="btn btn-success btn-lg ms-2">
					{length > 0 ? 'Add New Task' : 'Create your first Task'}
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
