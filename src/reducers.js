import {POSTS_LIST, ADD_POST, REMOVE_POST, LOADING} from './actionTypes';

const posts = (state = [], action) => {
	switch (action.type) {
		case POSTS_LIST:
			return action.posts;
        case ADD_POST:
            return state.concat(action.post);
        case REMOVE_POST:
            const postsResult = state.filter((post) => post.key !== action.id);
            return postsResult;
		default:
			return state;
	}
};

const loading = (state = false, action) => {
    switch (action.type) {
        case LOADING:
            return action.loading;
        default:
            return state;
    }
};



export {posts, loading};

