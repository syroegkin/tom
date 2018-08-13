import { expect } from 'chai';
import searchService from '../../src/services/Search';

const search = searchService([]);

const searchFixture = {
  1: { ref: 100 },
  2: { ref: 200 },
  3: { ref: 300 },
};
const resultsFixture = [100, 200, 300];

class lunrMock {
  success: boolean = false;
  results: any;
  constructor(
    public makeSuccessfull: boolean,
    public searchResults?: any
  ) {
    this.success = makeSuccessfull;
    this.results = searchResults;
  }
  search() {
    if (this.success) {
      return this.results;
    }
    return [];
  }
}

describe('Search service', () => {
  describe('search', () => {
    it('should get empty results if nothing has been found', () => {
      const lunr = new lunrMock(false);
      expect(search('fix', lunr)).to.be.deep.equal([]);
    })
    it('should return search results', () => {
      const lunr = new lunrMock(true, searchFixture);
      expect(search('me', lunr)).to.be.deep.equal(resultsFixture);
    });
  });
});
