import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Statistics = ({ pageContext: { customers } }) =>
  <ul>
    <li>
      <Typography variant="display1" gutterBottom>
        Average age:{' '}
        <span>{customers.averageAge}</span>
      </Typography>
    </li>
    <li>
      <Typography variant="display1" gutterBottom>
        Total:{' '}
        <span>{customers.total}</span>
      </Typography>
    </li>
  </ul>;

Statistics.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Statistics;
