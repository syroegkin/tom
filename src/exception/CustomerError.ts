export const CUSTOMER_ERROR_NAME: string = 'CustomerError';
export const CUSTOMER_ERROR_MESSAGE: string = 'Customer model error';

class CustomerError extends Error {
  constructor() {
    super(CUSTOMER_ERROR_MESSAGE);
    this.name = CUSTOMER_ERROR_NAME;
  }
};

export default CustomerError;
