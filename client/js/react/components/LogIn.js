import React from 'react';
import { connect } from 'react-redux';
import { loginUserTC } from '../../redux/login';

function LogIn (props) {
	console.log('**INITIATING LOG IN');
	return (
		<form onSubmit={props.handleSubmit}>

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

      <div>
        <button type="submit" className="btn btn-block btn-primary">LOG IN</button>
        <button type="button" className="btn cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
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
      const credential = {
        email: event.target.email.value,
        password: event.target.password.value
      };
      console.log('REACT LOGIN', credential);
      dispatch(loginUserTC(credential, ownProps.history));
    }
  };
};

const Container = connect(mapStateToProps, mapFunctionToProps)(LogIn);

export default Container;
