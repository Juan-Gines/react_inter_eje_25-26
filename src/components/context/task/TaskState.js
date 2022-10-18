import TaskContext from './TaskContext';
import React, { useReducer } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { taskReducer } from './TaskReducer';
import { COMPLETE, CREATE, DELETE, FILTER } from '../actions';

const TaskState = (props) => {
	const initialState = {
		filter: 'show_all',
		tasks: [
			new Task('Example1', 'Description 1', true, LEVELS.NORMAL),
			new Task('Example2', 'Description 2', false, LEVELS.URGENT),
			new Task('Example3', 'Description 3', false, LEVELS.BLOCKING),
		],
	};

	const [state, dispatch] = useReducer(taskReducer, initialState);

	function addTask(task) {
		const tasks = [...state.tasks];
		tasks.push(task);
		dispatch({
			type: CREATE,
			payload: tasks,
		});
	}

	function deleteTask(task) {
		const index = state.tasks.indexOf(task);
		const tasks = [...state.tasks];
		tasks.splice(index, 1);
		dispatch({
			type: DELETE,
			payload: tasks,
		});
	}

	function completeTask(task) {
		const index = state.tasks.indexOf(task);
		const tasks = [...state.tasks];
		tasks[index].completed = !tasks[index].completed;
		dispatch({
			type: COMPLETE,
			payload: tasks,
		});
	}

	function filterTasks(filter) {
		dispatch({
			type: FILTER,
			payload: filter,
		});
	}

	return (
		<TaskContext.Provider
			value={{
				tasks: state.tasks,
				filter: state.filter,
				addTask,
				deleteTask,
				completeTask,
				filterTasks,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
};

export default TaskState;
