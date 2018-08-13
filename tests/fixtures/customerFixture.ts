import { Customer } from '../../src/models/Customer';
import nameFactory from '../../src/models/Name';
import friendFactory from '../../src/models/Friend';

export const rawData = {
  greeting: 'Hello, Christa! You have 9 unread messages.',
  friends: [
    {
      name: 'Mai Christian',
      id: 0,
    },
    {
      name: 'England Shelton',
      id: 1,
    }
  ],
  tags: [
    'id',
    'ipsum',
    'irure',
    'enim',
    'sunt',
  ],
  longitude: '133.26332',
  latitude: '-85.11387',
  registered: 'Monday, June 22, 2015 7:33 AM',
  about: 'Sunt minim ex exercitation enim sunt ullamco proident nulla nulla laborum magna culpa proident. Elit adipisicing culpa commodo non sint. Ipsum veniam qui commodo sunt tempor qui fugiat.',
  address: '545 Elton Street, Noblestown, Vermont, 1129',
  phone: '+1 (855) 516-3861',
  email: 'christa.frederick@conferia.tv',
  company: 'CONFERIA',
  name: {
    last: 'Frederick',
    first: 'Christa',
  },
  eyeColor: 'green',
  age: 27,
  picture: 'http://placehold.it/32x32',
  balance: '$1,745.28',
  isActive: false,
  guid: '1688cb1b-b202-4b40-9a11-89309175a237',
  index: 16,
  _id: '591eec61368a454217052a1b',
};

export const customerFixture: Customer = {
  greeting: 'Hello, Christa! You have 9 unread messages.',
  friends: [
    {
      name: 'Mai Christian',
      id: 0,
    },
    {
      name: 'England Shelton',
      id: 1,
    }
  ],
  tags: [
    'id',
    'ipsum',
    'irure',
    'enim',
    'sunt',
  ],
  longitude: 133.26332,
  latitude: -85.11387,
  registered: new Date('Monday, June 22, 2015 7:33 AM'),
  about: 'Sunt minim ex exercitation enim sunt ullamco proident nulla nulla laborum magna culpa proident. Elit adipisicing culpa commodo non sint. Ipsum veniam qui commodo sunt tempor qui fugiat.',
  address: '545 Elton Street, Noblestown, Vermont, 1129',
  phone: '+1 (855) 516-3861',
  email: 'christa.frederick@conferia.tv',
  company: 'CONFERIA',
  name: nameFactory({
    last: 'Frederick',
    first: 'Christa',
  }),
  eyeColor: 'green',
  age: 27,
  picture: 'http://placehold.it/32x32',
  balance: '$1,745.28',
  isActive: false,
  guid: '1688cb1b-b202-4b40-9a11-89309175a237',
  index: 16,
  id: '591eec61368a454217052a1b',
};
