import { MESSAGES_RECEIVED, MESSAGES_LOADING, NEW_MESSAGE } from './constants';

const initialState = {
	messagesLoading: false,
	messages: [],
};

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch(action.type) {

		case MESSAGES_LOADING:
			return newState;

		case MESSAGES_RECEIVED:
			newState.messages = action.messages
			return newState;

		case NEW_MESSAGE:
			newState.messages = newState.messages.concat( action.message)
			return newState;
	}

    return state;
};
