import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'google-maps-react';

const ContactMarker = ({
  name,
  lat,
  lng,
}) =>
  <Marker
    title={name}
    position={{ lat, lng }}
    name={name}
  />;

ContactMarker.propTypes = {
  name: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default ContactMarker;
