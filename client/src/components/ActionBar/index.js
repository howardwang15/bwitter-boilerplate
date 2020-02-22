import React from 'react';
import Button from '../Button';
import './styles.scss';

class ActionBar extends React.Component {
    render() {
        const { onButtonClick } = this.props;
        return (
            <div className='actionbar-container'>
                {/**
                 * TODO: Add create bweet button
                 */}
            </div>
        )
    }
}

export default ActionBar;
