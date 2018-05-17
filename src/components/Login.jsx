import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel, Panel, HelpBlock} from "react-bootstrap";
import {CommonValidation} from '../utils/CommonValidation';
import Header from './Header';
import {users} from '../usersForLogin';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailValidation: {withError: false, withMessage: ''},
            passwordValidation: {withError: false, withMessage: ''},
            authenticationError: {withError: false, withMessage: ''}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    isValidEmail(email){

        if (email.length === 0) {
            this.setState({emailValidation: {withError: true, withMessage: "El campo de usuario no puede estar en blanco"}});
            return false;
        } else {
            if(!CommonValidation.isEmail(email)){
                this.setState({emailValidation: {withError: true, withMessage: "El campo de usuario no es un email válido"}});
                return false;
            }
            this.setState({emailValidation: {withError: false, withMessage: ""}});
        }
       return true;
    }

    isValidPassword(password){
        if (password.length === 0) {
            this.setState({passwordValidation: {withError: true, withMessage: "El campo de password no puede estar en blanco"}});
            return false;
        } else {
            this.setState({passwordValidation: {withError: false, withMessage: ""}});
        }
        return true;
    }

    validateForm() {

        return (this.isValidEmail(this.state.email) && this.isValidPassword(this.state.password));

    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.validateForm()) {
            const user = users.filter((user) => user.email === this.state.email)[0];

            if(user){
                if(user.password === this.state.password){
                    localStorage.setItem('CURRENT_USER', JSON.stringify(user));
                    this.setState({authenticationError: {withError: false, withMessage: ""}});
                    this.props.history.push({pathname: '/user-wall'})

                } else {
                    this.setState({authenticationError: {withError: true, withMessage: "Email o password son incorrectos"}});
                }
            } else {
                this.setState({authenticationError: {withError: true, withMessage: "No coincide con ninguna cuenta"}});
            }

        } else {
            console.log("Tiene errores")
        }
    }

    render() {
        let {emailValidation, passwordValidation, authenticationError} = this.state;
        return (
            <div className="container">
                <Header/>
                <div className="Login">
                    <Panel bsStyle="info">
                        <Panel.Heading>Welcome back, please Sign In </Panel.Heading>
                        <Panel.Body>


                            <form onSubmit={this.handleSubmit}>
                                <FormGroup controlId="email" bsSize="large"
                                           className={emailValidation.withError ? 'has-error' : ''}>
                                    <ControlLabel>Email:</ControlLabel>
                                    <FormControl
                                        autoFocus
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    {emailValidation.withError && <HelpBlock>{emailValidation.withMessage}</HelpBlock>}
                                </FormGroup>
                                <FormGroup controlId="password" bsSize="large"
                                           className={passwordValidation.withError ? 'has-error' : ''}>
                                    <ControlLabel>Password:</ControlLabel>
                                    <FormControl
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        type="password"
                                    />
                                    {passwordValidation.withError &&
                                    <HelpBlock>{passwordValidation.withMessage}</HelpBlock>}
                                </FormGroup>
                                <div className={authenticationError.withError ? 'has-error text-center' : ''}>
                                    {authenticationError.withError &&
                                    <HelpBlock>{authenticationError.withMessage}</HelpBlock>}
                                </div>
                                <Button
                                    block
                                    bsSize="large"
                                    bsStyle="success"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </form>


                        </Panel.Body>
                    </Panel>

                </div>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        router: state.router
    }
};


export default withRouter(connect(mapStateToProps)(Login));
