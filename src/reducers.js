import {ADD_POST} from './action_types';

const posts = (state = [], action) => {
	switch (action.type) {
		case ADD_POST:
			return action;
		default:
			return state;
	}
};


export {posts};

