import { MESSAGES_RECEIVED, MESSAGES_LOADING, NEW_MESSAGE } from './constants';

export const createMessagesReceivedAction = (messages) => ({ type: MESSAGES_RECEIVED, messages});

export const createLoadingAction = () => ({ type: MESSAGES_LOADING});

export const createNewMessageAction = (message) => ({ type: NEW_MESSAGE, message});
