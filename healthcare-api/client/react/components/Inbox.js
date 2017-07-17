import React from 'react';
import Message from './Message';
import store from '../../redux/store';

export default class extends React.Component {

    constructor() {
        super();
        this.state={messages:[]}
    }

    render() {
        return (
            <div>
                <h1>Inbox</h1>
                {this.state.messages.map( message => (
                    <Message fullMessage={message}/>
                    ))
                }
            </div>

        );
    }

}