import { COMPLETE, CREATE, DELETE, FILTER } from '../actions';

export const taskReducer = (state, action) => {
	const { payload, type } = action;

	switch (type) {
		case CREATE:
			return {
				...state,
				tasks: payload,
			};
		case DELETE:
			return {
				...state,
				tasks: payload,
			};
		case COMPLETE:
			return {
				...state,
				tasks: payload,
			};
		case FILTER:
			return {
				...state,
				filter: payload,
			};
		default:
			return state;
	}
};
