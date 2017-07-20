//Defining relevant constants to be used by our reducer
export const axios = require('axios');


// ACTION CONSTANTS
const USER_LOG_IN = 'USER_LOG_IN';


//Action Creators
const loginUser = user => ({ type: USER_LOG_IN, user});
const incorrectLogin = () => ({ type: INCORRECT_LOGIN });


// ACTION CREATORS
export default (state = {}, action) => {
	let newState = Object.assign({}, state);

	switch (action.type) {

		case USER_LOG_IN:
			newState.user = action.user;
			break;

		default:
			return newState;
	}
    return newState;
};


//Thunk Creators
export const loginUserTC = (credential, history) => dispatch => {
	console.log('LOGIN USER TC', credential);
  return axios.post('/api/auth/login', credential)
    .then( user => {
      if (!user) dispatch(incorrectLogin());
      dispatch(loginUser(user));
      console.log(user);
      history.push('/dashboard');
    } )
    .catch(console.error);
};

