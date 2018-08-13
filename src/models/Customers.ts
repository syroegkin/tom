import lunr from 'lunr';
import customerFactory, { Customer } from './Customer';

class Customers {
  data: Map<string, Customer>;
  index: lunr.Index;
  age: number = 0;
  total: number = 0;

  constructor(pureData) {
    pureData.forEach(piece => {
      const customer: Customer = customerFactory(piece);
      this.data.set(customer.id, customer);
      this.age += customer.age;
    });
    this.total = this.data.size;
    this.age = this.age / this.total;
    this.index = lunr((obj) => {
      obj.field('about');
      obj.field('company');
      obj.field('address');
      obj.field('id');
      obj.field('name.first');
      obj.field('name.last');
      obj.field('email');
      this.toArray().forEach(contact => obj.add(contact));
    });
  }

  search(term: string): Array<any> {
    const searchResults = [];
    if (!this.index || !term) {
      return searchResults;
    }
    const results = this.index.search(term);
    if (results && results.length > 0) {
      Object.keys(results).forEach(index => {
        searchResults.push(this.data.get(results[index].ref));
      });
    }
    return searchResults;
  }

  toArray(): Array<Customer> {
    return Array.from(this.data.values());
  }
}

export default Customers;
