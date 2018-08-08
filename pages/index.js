import React from 'react';
import Header from '../src/components/ui/Header';
import Footer from '../src/components/ui/Footer';
import Statistics from '../src/components/Statistics';

const IndexPage = (props) =>
  <React.Fragment>
    <Header />
    <Statistics {...props} />
    <Footer />
  </React.Fragment>;

export default IndexPage;
