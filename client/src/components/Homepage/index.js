import React from 'react';
import BweetList from './bweetList';

class Homepage extends React.Component {
    render() {
        return (
            <BweetList bweets={this.props.bweets} />
        )
    }
}

export default Homepage;
