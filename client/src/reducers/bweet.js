import { INCREMENT_LIKES, DECREMENT_LIKES, SET_BWEETS } from '../actions/bweets';

export default (state = {bweets: []}, action) => {
    switch (action.type) {
        // TODO: add increment, decrement, and set cases
        default:
            return { ...state };
    }
}
