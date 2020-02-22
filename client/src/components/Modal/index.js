import React from 'react';
import './styles.scss';
import Button from '../Button';

class Modal extends React.Component {
    constructor() {
        super();
        // TODO: Add state for storing message in modal
    }

    handleInputChange = e => {
        const message = e.target.value;
        // TODO: Add setState to set message state to input
    }

    onSubmitBweet = () => {
        // TODO: submit the message
    }

    render() {
        // TODO: Get the message state and onClose prop
        // TODO: Add onClose to close div, add message.length to character count
        return (
            <div className="modal-container">
                <div className="modal-wrapper show-modal">
                    <div className="modal-header">
                        Compose new Bweet
                    </div>
                    <div className="close" onClick={() => console.log("onClose()")}/>
                    <div className="modal">
                        <div className="modal-body">
                            <textarea type="text" rows="4" maxLength="140" placeholder="What's happening?" onChange={this.handleInputChange}/>
                        </div>
                        <div className="submit">
                            <div className="count">
                                {0}/140
                            </div>
                            
                            <Button
                                text="Tweet"
                                color="blue"
                                onClick={this.onSubmitBweet}
                                />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Modal;
