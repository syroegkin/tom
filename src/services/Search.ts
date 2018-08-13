import lunr from 'lunr';
import { Customer } from '../models/Customer';

let index: lunr.Index;

const buildIndex = (customers: Array<Customer>): lunr.Index => lunr((builder: lunr.Builder) => {
  builder.field('about');
  builder.field('company');
  builder.field('address');
  builder.field('id');
  builder.field('name.first');
  builder.field('name.last');
  builder.field('email');
  customers.forEach(contact => builder.add(contact));
});

export const search = (term: string, searchIndex: any = index): Array<string> => {
  const searchResults: Array<string> = [];
  if (!searchIndex || !term) {
    return searchResults;
  }
  const results: Array<lunr.Index.Result> = searchIndex.search(term);
  if (!results || results.length === 0) {
    return searchResults;
  }
  Object.keys(results).forEach(resultIndex => {
    searchResults.push(results[resultIndex].ref);
  });
  return searchResults;
}

export default (customers: Array<Customer>) => {
  index = buildIndex(customers);
  return search;
};
