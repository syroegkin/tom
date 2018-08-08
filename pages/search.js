import React from 'react';
import Footer from '../src/components/ui/Footer';
import Header from '../src/components/ui/Header';
import Search from '../src/components/Search';

const SearchPage = (props) =>
  <React.Fragment>
    <Header />
    <Search {...props} />
    <Footer />
  </React.Fragment>;

export default SearchPage;
