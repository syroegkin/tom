export const FRIEND_ERROR_NAME: string = 'FriendError';
export const FRIEND_ERROR_MESSAGE: string = 'Friend model error';

class FriendError extends Error {
  constructor() {
    super(FRIEND_ERROR_MESSAGE);
    this.name = FRIEND_ERROR_NAME;
  }
};

export default FriendError;
