import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body:'',
            recipient: '',
            subject: ''
        }
        this.handleChangeRecipient = this.handleChangeRecipient.bind(this)
        this.handleChangeSubject = this.handleChangeSubject.bind(this)
        this.handleChangeBody = this.handleChangeBody.bind(this)
    }

    handleChangeRecipient(event) {
        // console.log(event.target)
        this.setState({recipient: event.target.value, subject: event.target.name})
    }

    handleChangeSubject(event) {
        // console.log(event.target)
        this.setState({subject: event.target.value})
    }

    handleChangeBody(event) {
        // console.log(event.target)
        this.setState({body: event.target.value})
    }

    render() {
        // console.log(this.props)
        return (
            <form onSubmit={() => {this.props.onSend(this.state)}}>
                <div className="form-group">
                    <label>To:</label>
                    <input  onChange={this.handleChangeRecipient} type="text" id="recipient-field" name="recipient" />
                </div>
                <div className="form-group">
                    <label>Subject:</label>
                    <input onChange={this.handleChangeSubject} type="text" id="subject-field" name="subject" />
                </div>
                <div className="form-group">
                    <label>Body:</label>
                    <textarea onChange={this.handleChangeBody}id="body-field" name="body" />
                </div>
                <button type="submit">Send Message</button>
            </form>
        );
    }

}
