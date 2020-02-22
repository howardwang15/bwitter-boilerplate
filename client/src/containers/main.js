import React from 'react';
import { connect } from 'react-redux';
import Auth from './auth';
import Homepage from './homepage';


class MainComponent extends React.Component {
    // TODO: Render auth or homepage container
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

// TODO: add connect call
export default MainComponent;
