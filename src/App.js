import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import TaskState from './components/context/task/TaskState';

function App() {
	return (
		<TaskState>
			<TaskListComponent />
		</TaskState>
	);
}

export default App;

