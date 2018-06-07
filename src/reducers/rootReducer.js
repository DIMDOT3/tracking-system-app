import { ADD_PROJECT, REMOVE_PROJECT, UPDATE_PROJECT } from '../actions/actionCreators';
import projects from '../seeds';

const initialState = {
	// projects value imported from seeds.js file
	projects: projects,
	id: 0
}

export default function rootReducer(state=initialState, action){
	let newState = { ... state };
	switch(action.type){
		case ADD_PROJECT:
			newState.id++;
			return {
				...newState,
				projects: [...newState.projects, { ...action.project, id: newState.id}]
			};
		case REMOVE_PROJECT:
			let projects = newState.projects.filter(project => project.id !== action.id);
			return { ...newState, projects };
		default:
			return state;
	}
}