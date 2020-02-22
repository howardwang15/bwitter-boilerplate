import React from 'react';
import { connect } from 'react-redux';
import HomepageComponent from '../components/Homepage';
import ActionBar from '../components/ActionBar';
import Modal from '../components/Modal';
import { getAllBweets, addNewBweet } from '../utils/fetcher';


class HomePage extends React.Component {
    // TODO: add code to fetch all bweets

    updateLikeCount(e, liked, id) {
        if (liked) {
            this.props.decrementLikes(id);
        } else {
            this.props.incrementLikes(id);
        }
    }

    onNewBweet = async (bweet) => {
        // TODO: add code to make API call to add new bweet
    }

    render() {
        // TODO: Add onclick handler to open modal, add onclick handler to close modal, add bweets from redux state to homepage component
        return (
            <div>
                <ActionBar onButtonClick={() => console.log("open modal")}/>
                <HomepageComponent
                    onBweetLikeClick={this.updateLikeCount}
                    bweets={null}
                    />
                {/* <Modal onSubmitClick={this.onNewBweet} onClose={this.closeModal} /> */}
            </div>
        )
    }
}

// TODO: add code to add state to props
const mapStateToProps = state => {

};

// TODO: add functions to dispatch actions
const mapDispatchToProps = dispatch => {

};

export default HomePage;
