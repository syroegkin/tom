import React from 'react';
import PropTypes from 'prop-types';
import {
  GoogleApiWrapper,
  Map,
  Marker,
} from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
  state = {
    showingInfoWindow: false,
  };

  onMapClick = () => {
    const { showingInfoWindow } = this.state;
    if (showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
      });
    }
  }
  render() {
    const { pageContext: { customers }, google } = this.props;
    const data = customers.toArray();
    return (
      <Map
        item
        xs={12}
        google={google}
        onClick={this.onMapClick}
        zoom={2}
        initialCenter={{ lat: 39.648209, lng: -75.711185 }}
      >
        {data.map(contact => (
          <Marker
            key={`contact-${contact.id}`}
            title={`${contact.name.first} ${contact.name.last}`}
            position={{
              lat: contact.latitude,
              lng: contact.longitude,
            }}
            name={`${contact.name.first} ${contact.name.last}`}
          />
        ))}
      </Map>
    );
  }
}

GoogleMapsContainer.propTypes = {
  pageContext: PropTypes.object.isRequired,
  google: PropTypes.any.isRequired,
};

export default GoogleApiWrapper({
  api: (process.env.GOOGLE_API_KEY_GOES_HERE),
})(GoogleMapsContainer);
