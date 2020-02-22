import React from 'react';
import Input from '../Input';
import Button from '../Button';
import './styles.scss';

class Register extends React.Component {
    render() {
        const { onCreateClick, onLoginClick, onInputChange } = this.props;
        return (
            <div className='register-container'>
                <span className='title'>Sign Up</span>
                <Input
                    type='text'
                    name='firstName'
                    placeholder='First Name...'
                    label='First Name'
                    onChange={onInputChange}
                    />
                <Input
                    type='text'
                    name='lastName'
                    placeholder='Last Name...'
                    label='Last Name'
                    onChange={onInputChange}
                    />
                <Input
                    type='text'
                    name='handle'
                    placeholder='Handle...'
                    label='Handle'
                    onChange={onInputChange}
                    />
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
                <Input
                    type='password'
                    name='passwordReenter'
                    placeholder='Password...'
                    label='Reenter your password'
                    onChange={onInputChange}
                    />

                <Button
                    text='Create!'
                    color='blue'
                    onClick={onCreateClick}
                    />
                
                <div className='signin-text'>
                    <span>Already have an account?</span>
                    <Button
                        text='Login'
                        color='gray'
                        onClick={onLoginClick}
                        />
                </div>
            </div>
        )
    }
}

export default Register;
