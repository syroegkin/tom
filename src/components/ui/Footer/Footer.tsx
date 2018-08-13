import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    clear: 'both',
  },
  copy: {
    ...theme.typography.body2,
    lineHeight: `${theme.spacing.unit * 6}px`,
    display: 'inline-block',
    fontWeight: 400,
    color: theme.palette.common.white,
  },
});

const Footer = ({ classes }) =>
  <footer className={classes.root}>
    <span className={classes.copy}>
      &copy;me I am a footer
    </span>
  </footer>;

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
