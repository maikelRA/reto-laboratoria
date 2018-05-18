import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel, Panel, HelpBlock} from "react-bootstrap";
import {CommonValidation} from '../utils/CommonValidation';
import Header from './Header';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailValidation: {withError: false, withMessage: ''},
            passwordValidation: {withError: false, withMessage: ''}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

        } else {

        }
    }

    render() {
        let {emailValidation, passwordValidation} = this.state;
        return (
            <div className="container">
                <Header/>
                <div className="Login">
                    <Panel bsStyle="info">
                        <Panel.Heading>Sign Up </Panel.Heading>
                        <Panel.Body>
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup controlId="email" bsSize="large"
                                           className={emailValidation.withError ? 'has-error' : ''}>
                                    <ControlLabel>Email:</ControlLabel>
                                    <FormControl
                                        autoFocus
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                    {emailValidation.withError && <HelpBlock>{emailValidation.withMessage}</HelpBlock>}
                                </FormGroup>
                                <FormGroup controlId="password" bsSize="large"
                                           className={passwordValidation.withError ? 'has-error' : ''}>
                                    <ControlLabel>Password:</ControlLabel>
                                    <FormControl
                                        value={this.state.password}
                                        onChange={this.handleChange.bind(this)}
                                        type="password"
                                    />
                                    {passwordValidation.withError &&
                                    <HelpBlock>{passwordValidation.withMessage}</HelpBlock>}
                                </FormGroup>
                                <FormGroup controlId="re-password" bsSize="large"
                                           className={passwordValidation.withError ? 'has-error' : ''}>
                                    <ControlLabel>Password:</ControlLabel>
                                    <FormControl
                                        value={this.state.password}
                                        onChange={this.handleChange.bind(this)}
                                        type="password"
                                    />
                                    {passwordValidation.withError &&
                                    <HelpBlock>{passwordValidation.withMessage}</HelpBlock>}
                                </FormGroup>
                                <Button
                                    block
                                    bsSize="large"
                                    bsStyle="success"
                                    type="submit"
                                >
                                    Signup
                                </Button>
                            </form>
                        </Panel.Body>
                    </Panel>
                </div>
            </div>

        );
    }
}

export default  Signup;
