import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Login from './Login';


class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Reto Laboratoria</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Signup
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Login
                        </NavItem>
                    </Nav>
                </Navbar>
                <Login/>
            </div>

        );
    }
}

export default Home;
