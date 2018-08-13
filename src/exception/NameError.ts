export const NAME_ERROR_NAME: string = 'NameError';
export const NAME_ERROR_MESSAGE: string = 'Name model error';

class NameError extends Error {
  constructor() {
    super(NAME_ERROR_MESSAGE);
    this.name = NAME_ERROR_NAME;
  }
};

export default NameError;
