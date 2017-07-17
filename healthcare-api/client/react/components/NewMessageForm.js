import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props)
        return (
            <form onSubmit={() => {this.props.onSend(this.state);}}>
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
