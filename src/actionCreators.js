
import {ADD_POST, POSTS_LIST} from './actionTypes';
import {database, auth} from './Firebase';
import {snapshotToArray} from './helpFunctions';

const posts = () => {
    const current_user = JSON.parse(localStorage.getItem('CURRENT_USER'));
    return dispatch => {
        let postsRef = database.ref('/'+current_user.id + '/posts');
        postsRef.once('value').then(snapshot => {
            console.log("Snapshopt",'/'+current_user.id + '/posts' )
            return dispatch({
                type: POSTS_LIST,
                posts: snapshotToArray(snapshot)
            });
        })

    }
}


const addPost = (newPost) => {
    let {email, password, id} = JSON.parse(localStorage.getItem('CURRENT_USER'));
    return dispatch => {
        auth.signInWithEmailAndPassword(email, password).then((user) => {
            if (user) {
                database.ref().child(id).child('posts').push().set(newPost).then(() => {
                    return dispatch({
                        type: ADD_POST,
                        post: newPost
                    });
                });
            }
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorMessage);
        });

    }
}

export  {posts, addPost};
