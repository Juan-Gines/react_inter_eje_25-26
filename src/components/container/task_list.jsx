import React, { useContext } from 'react';
import TaskForm from '../pure/forms/taskForm';
import TaskContext from '../context/task/TaskContext';
import TaskComponent from '../pure/task';
import { FILTER } from '../../models/filter.enum';

// Importamos los estilos
import '../../styles/task.css';

const TaskListComponent = () => {
	const { tasks, filter, filterTasks } = useContext(TaskContext);

	const filterTask = (task, index) => {
		if (filter !== FILTER.ALL) {
			if (filter === FILTER.COMPLETED && task.completed) {
				return <TaskComponent key={index} task={task}></TaskComponent>;
			} else if (filter === FILTER.PENDING && !task.completed) {
				return <TaskComponent key={index} task={task}></TaskComponent>;
			} else {
				return null;
			}
		} else {
			return <TaskComponent key={index} task={task}></TaskComponent>;
		}
	};
	const Table = () => {
		return (
			<table className="mb-3">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Description</th>
						<th scope="col">Priority</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task, index) => {
						return filterTask(task, index);
					})}
				</tbody>
			</table>
		);
	};

	let taskTable;

	if (tasks.length > 0) {
		taskTable = <Table></Table>;
	} else {
		taskTable = (
			<div>
				<h3>There are no tasks to show</h3>
				<h4>Please, create one</h4>
			</div>
		);
	}

	return (
		<div>
			<div className="col-12">
				<div className="card mb-3">
					<div className="card-header p-3">
						<h5>Your Tasks:</h5>
					</div>
					<div
						className="card-body"
						data-mdb-perfect-scrollbar="true"
						style={{ position: 'relative' }}
					>
						{taskTable}
					</div>
					<div className="card-foot mb-3 d-flex justify-content-center">
						<div>
							<button
								className="btn btn-primary mx-1"
								onClick={() => filterTasks(FILTER.ALL)}
								disabled={filter === FILTER.ALL}
							>
								All
							</button>
							<button
								className="btn btn-success mx-1"
								onClick={() => filterTasks(FILTER.COMPLETED)}
								disabled={filter === FILTER.COMPLETED}
							>
								Completed
							</button>
							<button
								className="btn btn-danger mx-1"
								onClick={() => filterTasks(FILTER.PENDING)}
								disabled={filter === FILTER.PENDING}
							>
								Pendent
							</button>
						</div>
					</div>
				</div>
				<TaskForm></TaskForm>
			</div>
		</div>
	);
};

export default TaskListComponent;

