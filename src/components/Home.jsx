import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Login from './Login';
import Header from './Header';


class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Login/>
        );
    }
}

export default Home;
