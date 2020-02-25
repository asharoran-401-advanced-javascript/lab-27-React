// eslint-disable-next-line strict
'use strict';
import React from 'react';
import '../header/header.scss';

class Header extends React.Component { // to pass it as component in react
  render() {
    return (
      <header>
        <h1>Counter for React Application</h1>
      </header>
    );
  }
}

export default Header;
