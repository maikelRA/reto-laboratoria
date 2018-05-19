import React, {Component} from 'react';
import Confirm from 'react-confirm-bootstrap';


class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {editable: false, value: this.props.post.description}
        this.handleUpdatePost = this.handleUpdatePost.bind(this);
    }

    handleUpdatePost(postId){
        let newValue = this.refs.textareaField.value
        this.setState({editable: false, value: newValue})
        this.props.onUpdatePost(newValue, postId)
    }




    render() {
        let {post, handleRemovePost} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-body--header">
                        {this.state.editable ?
                            <textarea ref="textareaField" name={`post${post.key}`} id={`post${post.key}`} className="editable-post"
                                      rows="3" defaultValue={this.state.value} /> :
                            <div>{this.state.value}</div>}
                    </div>
                    <div className="post-actions">
                        {!this.state.editable ? <button className="action"
                                                        onClick={() => this.setState({editable: true})}>
                                Editar</button> :
                            <button className="action" onClick={() => this.handleUpdatePost(post.key)}>
                                Guardar</button>}
                        <Confirm
                            onConfirm={handleRemovePost}
                            body={`¿Está seguro que desea eliminar este post?`}
                            confirmText="Sí, estoy seguro"
                            title="Eliminando Post">
                            <button className="action">Eliminar</button>
                        </Confirm>

                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
