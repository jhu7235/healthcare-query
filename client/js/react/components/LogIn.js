import React from 'react';
import store from '../../store';

export default class LogIn extends React.Component {
	constructor (){
		super();
		this.state = store.getState();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
    event.preventDefault();
    const credential = {
      email: event.target.email.value,
      password: event.target.password.value
    };
    
	}

	render() {
		console.log('**INITIATING LOG IN');
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
          <label>email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
            <label>password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              required
            />
        </div>
        <button type="submit" className="btn btn-block btn-primary">LOG IN</button>
			</form>
			);
	}
}
