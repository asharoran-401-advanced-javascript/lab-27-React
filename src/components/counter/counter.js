// eslint-disable-next-line strict
'use strict';
import React from 'react';
import '../counter/counter.scss';

class Counter extends React.Component{ // functinal component
  constructor(props){
    super(props); // give me access to use the react methods
    this.state = { count : 0}; // in the start we can pass what ever we went
  }

  handleUp = e =>{
    let count = this.state.count;
    count++;
    this.handleUpdate(count);
  }
  handleDown = e => {
    let count = this.state.count;
    count--;
    this.handleUpdate(count);
  }
  handleUpdate(count){ // I need this method because I'm dealing with the same counter
    let polarity = ''; //to check if counter is incr or decr
    if(count > 0){
      polarity = 'positive';
    }else if(count < 0){
      polarity = 'negative';
    }
    this.setState({count , polarity}); // so here we set a counter and polarity on my state (update the data on it)
  }
  render(){
    let classes = ['count' ,this.state.polarity].join(' '); // to print the count + polarity-value
    return(
      /* section is a parent component */
      <section className = "counter">
        <span className ="down clicker" onClick ={this.handleDown}>-</span>
        <span className ={classes}>{this.state.count}</span>
        <span className ="up clicker" onClick ={this.handleUp}>+</span>
      </section>
    );

  }
}

export default Counter;
