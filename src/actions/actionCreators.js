export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';

export function addProject(project){
	return {
		type: ADD_PROJECT,
		project
	};
};

export function removeProject(id){
	return {
		type: REMOVE_PROJECT,
		id
	};
};