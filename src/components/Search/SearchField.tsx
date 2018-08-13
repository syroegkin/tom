import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const SearchField = ({ setSearchTerm }) => {
  let timeout = null;

  const handleOnChange = e => {
    clearTimeout(timeout);
    const { target: { value } } = e;
    timeout = setTimeout(() => setSearchTerm(value), 1000);
  };

  return (
    <section>
      <TextField
        // className={classes.margin}
        id="input-with-icon-textfield"
        label="Search"
        onChange={handleOnChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </section>
  );
};

SearchField.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchField;
