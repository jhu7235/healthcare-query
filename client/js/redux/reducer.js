import { MESSAGES_RECEIVED } from './constants';

const initialState = {
	messagesLoading: false,
	messages: [],
};

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type) {

		case MESSAGES_RECEIVED:
			newState.messages = action.messages;
			return newState;

	}

    return state;
};
