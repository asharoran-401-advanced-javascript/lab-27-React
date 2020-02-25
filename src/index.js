/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

// impore App after create it
import App from './app.js';

class Main extends React.Component{ // pass the  main as a component in react --> render it --> return this compnent
  render(){
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main /> , rootElement);

