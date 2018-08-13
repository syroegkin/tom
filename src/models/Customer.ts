import nameFactory, { Name } from './Name';
import friendFactory, { Friend } from './Friend';
import CustomerError from '../exception/CustomerError';

export interface Customer {
  greeting: string;
  friends: Array<Friend>;
  tags: Array<string>;
  longitude: number;
  latitude: number;
  registered: Date;
  about: string;
  address: string;
  phone: string;
  email: string;
  company: string;
  name: Name;
  eyeColor: string;
  age: number;
  picture: string;
  balance: string;
  isActive: Boolean;
  guid: string;
  index: number;
  id: string;
}

const customerFactory = (obj: any): Customer => {
  if (!obj) throw new CustomerError();
  // @todo: validate and throw more if any
  return {
    greeting: obj.greetings,
    friends: obj.friends.map((friend): Friend => friendFactory(friend)),
    tags: obj.tags,
    longitude: parseFloat(obj.longitude),
    latitude: parseFloat(obj.latitude),
    registered: new Date(obj.registered),
    about: obj.about,
    address: obj.address,
    phone: obj.phone,
    email: obj.email,
    company: obj.company,
    name: nameFactory(obj.name),
    eyeColor: obj.eyeColor,
    age: obj.age,
    picture: obj.picture,
    balance: obj.balance,
    isActive: obj.isActive,
    guid: obj.guid,
    index: obj.index,
    id: obj._id, // eslint-disable-line no-underscore-dangle
  };
};

export default customerFactory;
