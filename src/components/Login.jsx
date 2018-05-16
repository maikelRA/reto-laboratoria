import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel, Panel, HelpBlock} from "react-bootstrap";

class Login extends Component {
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

    validateForm() {
        this.state.email.length === 0 ?
            this.setState({emailValidation: {withError: true, withMessage: "El email es obligatorio."}})
            :
            this.setState({emailValidation: {withError: false, withMessage: ""}});

        this.state.password.length === 0 ?
            this.setState({passwordValidation: {withError: true, withMessage: "El password es obligatorio."}})
            :
            this.setState({passwordValidation: {withError: false, withMessage: ""}});

    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.validateForm();
    }

    render() {
        let {emailValidation, passwordValidation} = this.state;
        return (
            <div className="Login">
                <Panel bsStyle="info">
                    <Panel.Heading>Welcome back, please Sign In </Panel.Heading>
                    <Panel.Body>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="email" bsSize="large"
                                       className={emailValidation.withError ? 'has-error' : ''}>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange.bind(this)}
                                />
                                {emailValidation.withError && <HelpBlock>{emailValidation.withMessage}</HelpBlock>}
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large"
                                       className={passwordValidation.withError ? 'has-error' : ''}>
                                <ControlLabel>Password</ControlLabel>
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
                                Login
                            </Button>
                        </form>
                    </Panel.Body>
                </Panel>

            </div>
        );
    }
}
;

export default  Login;
