import React from 'react';
import Input from '../Input';
import Button from '../Button';
import './styles.scss';

class Login extends React.Component {
    render() {
        const { onLoginClick, onSignupClick, onInputChange } = this.props;
        return (
            <div className='login-container'>
                <span className='title'>Login</span>
                <Input
                    type='text'
                    name='email'
                    placeholder='Email...'
                    label='Email'
                    onChange={onInputChange}
                    />
                <Input
                    type='password'
                    name='password'
                    placeholder='Password...'
                    label='Password'
                    onChange={onInputChange}
                    />
                
                <Button
                    text='Login!'
                    color='blue'
                    onClick={onLoginClick}
                    />
                
                <div className='signup-text'>
                    <span>Don't have an account?</span>
                    <Button
                        text='Sign Up'
                        color='gray'
                        onClick={onSignupClick}
                        />
                </div>
            </div>
        )
    }
}

export default Login;