import React from 'react';
import { connect } from 'react-redux';
import AuthComponent from '../components/Auth';
import Errorbar from '../components/Errorbar';
import { API_URL, REGISTER_USER_ROUTE, LOGIN_USER_ROUTE } from '../config';
import { setUser } from '../actions/user';

class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            register: true,
            email: '',
            password: '',
            passwordReenter: '',
            firstName: '',
            lastName: '',
            handle: '',
            error: ''
        };
    }


    /**
     * @param register: object containing fields used to register
     * 
     * @returns: object contain valid (true/false) and error (string) fields
     */
    validateSignup = register => {
        for (let key of Object.keys(register)) {
            if (register[key] === '') {
                return {
                    valid: false,
                    error: 'Fields can\'t be empty'
                };
            }
        }

        if (register.password !== register.passwordReenter) {
            return {
                valid: false,
                error: 'Passwords don\'t match'
            };
        }

        return {
            valid: true,
            error: null
        };
    }

    validateLogin = login => {
        for (let key of Object.keys(login)) {
            if (login[key] === '') {
                return {
                    valid: false,
                    error: 'Fields can\'t be empty'
                };
            }
        }
        return {
            valid: true,
            error: null
        };
    }


    /**
     * Auth inputs updates
     */
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    /**
     * Switch to login click
     */
    onLoginClick = () => {
        this.setState(prevState => ({
            register: false,
            error: ''
        }));
    }

    /**
     * Register click
     */
    onCreateClick = async () => {
        let signup = {
            email: this.state.email,
            password: this.state.password,
            passwordReenter: this.state.passwordReenter,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            handle: this.state.handle
        };
        const validation = this.validateSignup(signup);
        if (!validation.valid) {
            this.setState(prevState => ({
                error: validation.error
            }));
            return;
        }

        const { passwordReenter, ...register } = signup;
        
        // TODO: make API call to register user
    }

    /**
     * Switch to signup button click
     */
    onSignupClick = () => {
        this.setState(prevState => ({
            register: true,
            error: ''
        }));
    }

    /**
     * Login click
     */
    onSigninClick = async () => {
        const login = {
            email: this.state.email,
            password: this.state.password
        };

        // TODO: validate the login

        // TODO: make the API call to login the user
    }

    render() {
        return (
            <div>
                <AuthComponent
                    onLoginClick={this.onLoginClick}
                    onCreateClick={this.onCreateClick}
                    onSigninClick={this.onSigninClick}
                    onSignupClick={this.onSignupClick}
                    register={this.state.register}
                    onInputChange={this.onInputChange}
                    />
                { this.state.error ? <Errorbar message={this.state.error}/> : null }
            </div>
        )
    }
}

// TODO: add map state and map dispatch and connect to redux store

export default Auth;
