import React from 'react';
import PropTypes from 'prop-types';
import SearchField from './SearchField';
import ContactsList from '../ui/ContactsList';

class Search extends React.Component {
  state = {
    term: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { term } = this.state;
    return term !== nextState.term;
  }

  setSearchTerm = (term) => {
    this.setState({
      term: term.replace(/^\s+|\s+$/g, ''),
    });
  }

  render() {
    const { pageContext: { customers } } = this.props;
    const { term } = this.state;
    const data = customers.search(term);

    return (
      <React.Fragment>
        <SearchField setSearchTerm={this.setSearchTerm} />
        <ContactsList data={data} />
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Search;
