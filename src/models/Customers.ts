// import lunr from 'lunr';
import customerFactory, { Customer } from './Customer';
import search from '../services/Search';

class Customers {
  readonly data: Map<string, Customer> = new Map();
  // readonly index: lunr.Index;
  readonly age: number = 0;
  readonly total: number = 0;
  readonly search: Function;

  constructor(pureData) {
    let age = 0;
    pureData.forEach(piece => {
      const customer: Customer = customerFactory(piece);
      this.data.set(customer.id, customer);
      age += customer.age;
    });
    this.total = this.data.size;
    this.age = Math.round(age / this.total);
    this.search = search(this.toArray());
  }

  getById(id: string): Customer {
    return this.data.get(id);
  }

  toArray(): Array<Customer> {
    return Array.from(this.data.values());
  }

  getTotal(): number {
    return this.total;
  }

  getAverageAge(): number {
    return this.age;
  }
}

export default Customers;
