/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
'use strict';

import React from 'react';
import './app.scss';
// import the child compnent that I when to pass them in my applcation
// so here I need (footer,counter, footer)

import Header from './components/header/header.js';
import Counter from './components/counter/counter.js';
import Footer from './components/footer/footer.js';


class App extends React.Component{
  render(){ // is a built in method to render(deliver) the data
    return( // piece of react
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
