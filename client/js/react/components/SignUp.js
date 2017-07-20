import React from 'react';
import { connect } from 'react-redux';
import { signupUserTC } from '../../redux/signup';

function SignUp (props) {
	console.log('**INITIATING LOG IN');
	return (
		<form onSubmit={props.handleSubmit}>

      <div className="form-group">
        <div className="col-6-md">
          <label>first</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="col-6-md">
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
            name="password"
            type="password"
            className="form-control"
            required
          />
      </div>

      <div>
        <button type="submit" className="btn btn-block btn-primary">SIGN IN</button>
        <button type="button" className="btn cancelbtn">Cancel</button>
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
      let birthday = new Date(event.target.year.value, event.target.month.value, event.target.date.value);
      const credential = {
        birthday: birthday,
        firstName: event.target.fname.value,
        lastName: event.target.lname.value,
        email: event.target.email.value,
        password: event.target.password.value
      };
      console.log('REACT signup', credential);
      dispatch(signupUserTC(credential, ownProps.history));
    }
  };
};

const Container = connect(mapStateToProps, mapFunctionToProps)(SignUp);

export default Container;
