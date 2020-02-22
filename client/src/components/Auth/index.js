import React from 'react';
import Register from './register';
import Login from './login';

class Auth extends React.Component {
    render() {
        const { register, onCreateClick, onLoginClick, onSigninClick, onSignupClick, onInputChange } = this.props;
        return (
            register ? 
                <Register
                    onCreateClick={onCreateClick}
                    onLoginClick={onLoginClick}
                    onInputChange={onInputChange}
                    />
            :
                <Login
                    onLoginClick={onSigninClick}
                    onSignupClick={onSignupClick}
                    onInputChange={onInputChange}
                    />
        )
    }
}

export default Auth;