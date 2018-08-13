import FriendError from '../exception/FriendError';

export interface Friend {
  name: string;
  id: number;
}

const friendFactory = (obj: any): Friend => {
  if (!obj) throw new FriendError();
  // @todo: shall validate and throw more if any
  return {
    name: obj.name,
    id: obj.id
  };
}

export default friendFactory;
