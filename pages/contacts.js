import React from 'react';
import Footer from '../src/components/ui/Footer';
import Header from '../src/components/ui/Header';
import Contacts from '../src/components/Contacts';

const ContactsPage = (props) =>
  <React.Fragment>
    <Header />
    <Contacts {...props} />
    <Footer />
  </React.Fragment>;

export default ContactsPage;
