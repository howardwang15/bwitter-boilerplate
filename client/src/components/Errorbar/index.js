import React from 'react';
import './styles.scss';

class Errorbar extends React.Component {
    render() {
        const { message } = this.props;
        return (
            <div className='error'>
                <span className='message'>{`Error: ${message}`}</span>
            </div>
        )
    }
}

export default Errorbar;
