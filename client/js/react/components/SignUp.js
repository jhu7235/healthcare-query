import React from 'react';
import { connect } from 'react-redux';
import { signupUserTC } from '../../redux/signup';

function SignUp (props) {
	console.log('**INITIATING LOG IN');
	return (
		<form onSubmit={props.handleSubmit}>

      <div className="form-group">
        <div className="col-md-6">
          <label>first</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <label>last</label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>birthday</label>
        <input
          name="date"
          type="date"
          className="form-control"
          required
        />
      </div>


      <div className="form-group">
        <label>phone</label>
        <input
          name="phone"
          type="tel"
          className="form-control"
        />
      </div>

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

      <div className="form-group">
          <label>re-enter password</label>
          <input
            name="re-password"
            type="password"
            className="form-control"
            required
          />
      </div>

      <div>
        <button type="submit" className="btn btn-block btn-primary">SIGN IN</button>
      </div>

		</form>
	);
}

const mapStateToProps = function (state) {
  return {
    user: state.user
  };
};

const mapFunctionToProps = function (dispatch, ownProps) {
  return {
    handleSubmit(event) {
      event.preventDefault();
      let birthday = new Date(event.target.date.value);
      const credential = {
        birthday: birthday,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        password: event.target.password.value,
        phone: event.target.phone.value
      };
      console.log('REACT signup', credential);
      dispatch(signupUserTC(credential, ownProps.history));
    }
  };
};

const Container = connect(mapStateToProps, mapFunctionToProps)(SignUp);

export default Container;
