'use strict';
//Defining relevant constants to be used by our reducer
export const axios = require('axios');


// ACTION CONSTANTS
const USER_SIGN_UP = 'USER_SIGN_UP';


//Action Creators
const signupUser = user => ({ type: USER_SIGN_UP, user});


// ACTION CREATORS
export default (state = {}, action) => {
	let newState = Object.assign({}, state);
	newState.user = action.user;
	return newState;
};


//Thunk Creators
export const signupUserTC = (credential, history) => dispatch => {
	console.log('LOGIN USER TC', credential);
  return axios.post('/api/auth/signup', credential)
    .then( user => {
      if (!user) {console.err('NO USE SIGNED UP');}//should show a pop-up text
      else {
        dispatch(signupUser(user));
        console.log(user);
        history.push('/patient');
      }
    })
    .catch(console.log('asdfalkdsjfalsd'));
};

