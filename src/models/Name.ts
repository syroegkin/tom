import NameError from '../exception/NameError';

export interface Name {
  first: string;
  last: string;
}

const nameFactory = (obj: any): Name => {
  if (!obj) throw new NameError();
  // @todo: shall validate and throw more if any
  return {
    first: obj.first,
    last: obj.last
  };
}

export default nameFactory;
