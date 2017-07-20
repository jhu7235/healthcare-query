import React from 'react';
import { connect } from 'react-redux';
import { signUpUserTC } from '../../redux/signup';

function SignUp (props) {
	console.log('**INITIATING LOG IN');
	return (
		<form onSubmit={props.handleSubmit}>
      <label>name</label>
      <div className="form-group">
        <label>first</label>
        <input
          name="firstName"
          type="firstName"
          className="form-control"
          required
        />      
        <label>last</label>
        <input
          name="lastName"
          type="lastName"
          className="form-control"
          required
        />
      </div>

      <h2>Birthday<h2>
      <div className="form-group">
        <label>month</label>
        <input
          name="month"
          type="month"
          className="form-control"
          required
        />
        <label>date</label>
        <input
          name="date"
          type="date"
          className="form-control"
          required
        />
        <label>year</label>
        <input
          name="year"
          type="year"
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
      let birthday = new Date(event.target.year.value, event.target.month.value, event.target.date.value)
      const credential = {
        birthday: birthday,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
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
