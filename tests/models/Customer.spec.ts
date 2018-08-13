import { expect } from 'chai';
import customerFactory from '../../src/models/Customer';
import { CUSTOMER_ERROR_MESSAGE } from '../../src/exception/CustomerError';
import {
  customerFixture,
  rawData
 } from '../fixtures/customerFixture';

describe('Customer model', () => {
  it('should throw the exception when empty object is provided', () => {
    expect(() => customerFactory(null)).to.throw(CUSTOMER_ERROR_MESSAGE);
  });
  it('should create customer model object', () => {
    const customer = customerFactory(rawData);
    expect(customer.id).to.be.equal(customerFixture.id);
    expect(customer.friends).to.be.deep.equal(customerFixture.friends);
  });
});
