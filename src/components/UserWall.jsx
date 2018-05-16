import React, {Component} from "react";
import {Navbar, Nav, NavItem, Grid, Row, Col, Image, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class UserWall extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props);
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
                                    Bienvenido {localStorage.getItem('USERNAME')} a tu muro
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
                                        <form action="">
                                            <FormGroup controlId="formControlsTextarea">
                                                <FormControl componentClass="textarea" rows="3"
                                                             placeholder={`¿Qué estás pensando ${ localStorage.getItem('USERNAME')}?`}/>
                                            </FormGroup>
                                        </form>
                                    </div>
                                </div>
                                <div className="share-post">
                                    <select name="select-visibility" id="post-visibility">
                                            <option value="amigos">Amigos</option>
                                            <option value="publico">Público</option>
                                    </select>

                                   <button>publicar</button>
                                </div>


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

export default  UserWall;
