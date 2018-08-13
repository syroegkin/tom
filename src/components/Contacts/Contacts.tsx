import React from 'react';
import PropTypes from 'prop-types';
import ContactsList from '../ui/ContactsList';

const Contacts = ({ pageContext: { customers } }) => {
  const data = customers.toArray();
  return (
    <ContactsList data={data} />
  );
};

Contacts.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Contacts;
