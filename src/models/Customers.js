import Customer from './Customer';

class Customers {
  data = [];

  constructor(pureData) {
    pureData.forEach(piece => {
      const customer = new Customer(piece);
      this.data.push(customer);
    });
  }
}

export default Customers;
