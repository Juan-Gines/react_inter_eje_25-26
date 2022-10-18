import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskContext from '../context/task/TaskContext';

//Importamos la hoja de estilos de task.css
import '../../styles/task.css';

const TaskComponent = ({ task }) => {
	const { completeTask, deleteTask } = useContext(TaskContext);

	function taskLevelBadge() {
		switch (task.level) {
			case LEVELS.NORMAL:
				return (
					<h6 className="mb-0">
						<span className="badge bg-primary">{task.level}</span>
					</h6>
				);
			case LEVELS.URGENT:
				return (
					<h6 className="mb-0">
						<span className="badge bg-warning">{task.level}</span>
					</h6>
				);
			case LEVELS.BLOCKING:
				return (
					<h6 className="mb-0">
						<span className="badge bg-danger">{task.level}</span>
					</h6>
				);
			default:
				break;
		}
	}

	/**
	 * 	Function tht returns icon depending on completion of the task
	 */
	function taskCompletedIcon() {
		if (task.completed) {
			return (
				<i
					onClick={() => completeTask(task)}
					className="bi-toggle-on task-action"
					style={{ color: 'green' }}
				></i>
			);
		} else {
			return (
				<i
					onClick={() => completeTask(task)}
					className="bi-toggle-off task-action"
					style={{ color: 'grey' }}
				></i>
			);
		}
	}

	const taskCompleted = {
		color: 'gray',
		fontWeight: 'bold',
		textDecoration: 'line-through',
	};

	const taskPending = {
		color: 'tomato',
		fontWeight: 'bold',
	};

	return (
		// <tr className={task.completed ? 'fw-normal task-completed' : 'fw-normal task-pending'}>
		<tr className="fw-normal" style={task.completed ? taskCompleted : taskPending}>
			<th>
				<span className="ms-2">{task.name}</span>
			</th>
			<td className="align-middle">
				<span>{task.description}</span>
			</td>
			<td className="align-middle">
				{/* Execution of function to return badge element */}
				{taskLevelBadge()}
			</td>
			<td className="align-middle">
				{/* Iconos para aciones*/}

				{/*versión en el mismo componente */}
				{/* {task.completed ? (
					<i className="bi-toggle-on" style={{ color: 'green' }}></i>
				) : (
					<i className="bi-toggle-on" style={{ color: 'grey' }}></i>
				)} */}

				{/* versión con función desde fuera*/}
				{/*Execution of function to return icon depending on completion*/}
				{taskCompletedIcon()}
				<i
					className="bi-trash task-action"
					style={{ color: 'tomato', fontSize: '20px' }}
					onClick={() => deleteTask(task)}
				></i>
			</td>
		</tr>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task).isRequired,
};

export default TaskComponent;

