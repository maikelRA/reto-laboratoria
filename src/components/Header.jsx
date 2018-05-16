import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedKey: 2};
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedKey) {
        return this.setState({selectedKey: selectedKey})
    }

    render() {

        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Reto Laboratoria</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/signup" className={this.props.router.location.pathname === '/signup' ? 'active' : ''}>

                                Signup

                        </NavItem>
                        <NavItem eventKey={2} href="/login" className={this.props.router.location.pathname === '/login' ? 'active' : ''} >

                                Login

                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}
const mapStateToProps = state => {
    return {
        router: state.router
    }
};


export default connect(mapStateToProps)(Header);
