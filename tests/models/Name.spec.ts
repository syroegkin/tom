import { expect } from 'chai';
import nameFactory from '../../src/models/Name';
import { NAME_ERROR_MESSAGE } from '../../src/exception/NameError';
import nameFixture from '../fixtures/nameFixture';

describe('Name model', () => {
  it('should throw the exception when empty object is provided', () => {
    expect(() => nameFactory(null)).to.throw(NAME_ERROR_MESSAGE);
  });
  it('should create name model object', () => {
    expect(nameFactory(nameFixture)).to.be.deep.equal(nameFixture);
  });
});
