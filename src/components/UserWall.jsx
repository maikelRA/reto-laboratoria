import React, {Component} from "react";
import {Navbar, Nav, NavItem, Grid, Row, Col, Image, FormGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {posts, addPost, removePost, updatePost} from '../actionCreators';
import {SyncLoader} from 'react-spinners';
import Post from './Post';


class UserWall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: JSON.parse(localStorage.getItem('CURRENT_USER')),
            postDescription: '',
            hasError: false,
            errorMessage: "El campo no puede estar vacío",
            postVisibility: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.onUpdatePost = this.onUpdatePost.bind(this);
    }

    componentWillMount() {
        this.props.getPosts();
    }

    handleSelect(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
        if (event.target.value.length > 0) {
            this.setState({hasError: false});
        } else {
            this.setState({hasError: true});
        }
    }

    onUpdatePost(value, postId) {
        this.props.updatePost(value, postId);
    }

    isValidTextarea() {
        return this.state.postDescription.length > 0
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.isValidTextarea()) {
            const {postDescription, postVisibility} = this.state;
            let newPost = {description: postDescription, visibility: postVisibility}
            this.props.addPost(newPost);
            this.setState({postDescription: ''});
        } else {
            this.setState({hasError: true});
        }
    }


    render() {
        const {posts} = this.props;
        const {name} = this.state.currentUser;
        return (
            <div >
                <div className="container">
                    <Navbar collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#brand">Reto Laboratoria</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} disabled>
                                    Bienvenido {name} a tu muro
                                </NavItem>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <Grid>
                    <Row className="show-grid mb-2">
                        <Col xs={12} md={8}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-body--header">
                                        <FormGroup controlId="postDescription"
                                                   className={this.state.hasError ? 'has-error' : ''}>
                                            <FormControl componentClass="textarea" rows="3"
                                                         onChange={this.handleChange}
                                                         value={this.state.postDescription}
                                                         placeholder={`¿Qué estás pensando ${ name }?`}/>
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="share-post">
                                    <select name="select-visibility" id="postVisibility" onChange={this.handleSelect}>
                                        <option value="0">Amigos</option>
                                        <option value="1">Público</option>
                                    </select>

                                    <button onClick={this.handleSubmit}>publicar</button>
                                </div>
                            </div>

                            { posts.length > 0 && <div className="filter-actions">
                                <button className="btn action">All</button>
                                <button className="btn action">Amigos</button>
                                <button className="btn action">Público</button>
                            </div>}

                            {!this.props.loading && posts.map(
                                (post) => {
                                    return (
                                        <Post key={post.key} post={post} onUpdatePost={this.onUpdatePost}
                                              handleRemovePost={() => this.props.removePost(post.key)}/>
                                    );
                                }
                            )}

                            <div className='sweet-loading'>
                                <SyncLoader
                                    color={'#80d6b7'}
                                    loading={this.props.loading}
                                    size={10}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-body--header">
                                        <div className="card-body--title">Historias</div>

                                        <Row className="mt-1 history">
                                            <Col xs={1} md={1}>
                                                <Image src="./public/user-incognito.jpg" rounded className="img-small"/>
                                            </Col>
                                            <Col xs={6} md={11}>
                                                <span>Arturo Benitez Lopez</span>
                                            </Col>
                                        </Row>
                                        <Row className="mt-1 history">
                                            <Col xs={1} md={1}>
                                                <Image src="./public/user-incognito.jpg" rounded className="img-small"/>
                                            </Col>
                                            <Col xs={6} md={11}>
                                                <span>Belkis Rivera Medina</span>
                                            </Col>
                                        </Row>

                                        <Row className="mt-1 history">
                                            <Col xs={1} md={1}>
                                                <Image src="./public/user-incognito.jpg" rounded className="img-small"/>
                                            </Col>
                                            <Col xs={6} md={11}>
                                                <span>Dlenia Martinez Hillera</span>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-body--header birthday">
                                        Hoy es el cumpleaños de <b>Mariana</b>, felicítala.
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        posts: state.posts,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPosts(){
            return dispatch(posts());
        },
        addPost(newPost){
            return dispatch((addPost(newPost)));
        },
        removePost(postId){
            return dispatch((removePost(postId)));
        },
        updatePost(value, postId){
            return dispatch((updatePost(value, postId)));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserWall);

