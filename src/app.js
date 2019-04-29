import React from 'react';

import SearchBar from './search-bar';

// import css from './app.module.css'

export default class BlacklistApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(a, b) {
    console.log(a, b)
    alert(a, b);
  }

  render() {
    return (
      <SearchBar onSearch={this.handleSearch} />
    );
  }
}
