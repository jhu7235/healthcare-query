'use strict';
//Defining relevant constants to be used by our reducer
export const axios = require('axios');


//Constants
const USER_LOG_IN = 'USER_LOG_IN';


//Action Creators
const loginUser = user => ({ type: USER_LOG_IN, user});
const incorrectLogin = () => ({ type: INCORRECT_LOGIN });


//Reducer
export default (state = {}, action) => {
	let newState = Object.assign({}, state);
	newState.user = action.user;
	return newState;
};


//Thunk Creators
export const loginUserTC = (credential, history) => dispatch => {
  return axios.post('/api/auth/login', credential)
    .then( user => {
      console.log('LOGIN USER TC', user);
      if (!user) dispatch(incorrectLogin());
      dispatch(loginUser(user));
      console.log(user);
      history.push('/patient');
    } )
    .catch(console.error);
};

