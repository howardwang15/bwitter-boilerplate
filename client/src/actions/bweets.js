export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const DECREMENT_LIKES = 'DECREMENT_LIKES';
export const SET_BWEETS = 'SET_BWEETS';

export const incrementLikeCount = id => {
    return {
        type: INCREMENT_LIKES,
        payload: id
    };
}

export const decrementLikeCount = id => {
    return {
        type: DECREMENT_LIKES,
        payload: id
    };
}

export const setBweets = bweets => {
    // TODO: return action to set bweets list
    
};
