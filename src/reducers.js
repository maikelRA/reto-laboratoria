import {POSTS_LIST, ADD_POST} from './actionTypes';

const posts = (state = [], action) => {
	switch (action.type) {
		case POSTS_LIST:
			return action.posts;
        case ADD_POST:
            return state.concat(action.post);
		default:
			return state;
	}
};



export {posts};

