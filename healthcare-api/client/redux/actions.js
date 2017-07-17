import { MESSAGES_RECEIVED } from './constants';

export const createMessagesReceivedAction = (messages) => ({ type: MESSAGES_RECEIVED, messages});

