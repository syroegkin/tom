import React from 'react';
import Header from '../src/components/ui/Header';
import Footer from '../src/components/ui/Footer';
import Statistics from '../src/components/Statistics';
import ContactsMap from '../src/components/ContactsMap';

const IndexPage = (props) =>
  <React.Fragment>
    <Header />
    <Statistics {...props} />
    <ContactsMap {...props} />
    <Footer />
  </React.Fragment>;

export default IndexPage;
