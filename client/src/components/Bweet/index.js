import React from 'react';
import { formatDateBweet } from '../../utils/date';
import './style.scss';


class Bweet extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { user, text, timestamp, onLikeClick, likes, liked } = this.props;

        const heartClass = liked ? 'like-button liked' : 'like-button';
        return (
            <div className='container'>
                <div className='user-container'>
                    <img src={user.picture} width='70' height='70' />

                    <div className='name-container'>
                        <div className='name'>
                            {`${user.firstName} ${user.lastName}`}
                        </div>

                        <div className='handle'>
                            {`(@${user.handle})`}
                        </div>
                    </div>
                </div>
            
                <div className='text'>
                    {text}
                </div>

                <div className='timestamp'>
                    { formatDateBweet(timestamp) }
                </div>

                <div className='like-button-container'>
                    <div className={heartClass} onClick={onLikeClick} />
                    <div className='likes'>{likes}</div>
                </div>
            </div>
        )
    }
}

export default Bweet;