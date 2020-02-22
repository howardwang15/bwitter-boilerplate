import React from 'react';
import './styles.scss';

class Input extends React.Component {
    render() {
        const { label, type, name, placeholder, onChange } = this.props;
        return (
            <div className='input-container'>
                <span>{label}</span>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange} />
            </div>
        )
    }
}

export default Input;