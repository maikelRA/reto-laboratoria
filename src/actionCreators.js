import {ADD_POST, POSTS_LIST, REMOVE_POST, UPDATE_POST, LOADING} from './actionTypes';
import {database, auth} from './Firebase';
import {snapshotToArray} from './helpFunctions';

const posts = () => (dispatch) => {

    dispatch({
        type: LOADING,
        loading: true
    });

    const current_user = JSON.parse(localStorage.getItem('CURRENT_USER'));

    let postsRef = database.ref('/' + current_user.id + '/posts');
    return postsRef.once('value').then(snapshot => {
        dispatch({
            type: LOADING,
            loading: false
        });
        dispatch({
            type: POSTS_LIST,
            posts: snapshotToArray(snapshot)
        });

        return snapshotToArray(snapshot)
    });


};


const addPost = (newPost) => {
    let {email, password, id} = JSON.parse(localStorage.getItem('CURRENT_USER'));
    return dispatch => {
        auth.signInWithEmailAndPassword(email, password).then((user) => {
            if (user) {
                const postRef = database.ref().child(id).child('posts').push();
                newPost['key'] = postRef.key;
                postRef.set(newPost).then(() => {
                    return dispatch({
                        type: ADD_POST,
                        post: newPost
                    });
                });
            }
        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });

    }
};


const removePost = (postId) => {
    let {id} = JSON.parse(localStorage.getItem('CURRENT_USER'));
    return dispatch => {
        database.ref().child(id).child('posts').child(postId).set(null).then(() => {
            return dispatch({
                type: REMOVE_POST,
                id: postId
            });
        });
    }
};


const updatePost = (value,postId) => {
    let {id} = JSON.parse(localStorage.getItem('CURRENT_USER'));
    return dispatch => {
        database.ref().child(id +'/posts/'+ postId).update({description: value}).then(() => {
            return dispatch({
                type: UPDATE_POST,
                post: {key: postId, description: value}
            });
        });
    }
};

export  {posts, addPost, removePost, updatePost};
