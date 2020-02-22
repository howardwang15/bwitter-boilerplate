import React from 'react';
import './styles.scss';

class Button extends React.Component {
    render() {
        // TODO: get the properties from props and hidden CSS attribute
        return (
            <button className={`button-red`} onClick={() => console.log('clicked!')}>TEXT</button>
        )
    }
}

export default Button;
