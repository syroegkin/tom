import { Name } from '../../src/models/Name';
import faker from 'faker';

const nameFixture: Name = {
  first: faker.name.firstName(),
  last: faker.name.lastName()
};

export default nameFixture;
