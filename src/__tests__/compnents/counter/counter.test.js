/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
'use strict';
// snapshots mean () :the current UI is compared to the existing
import React from 'react';
import {shallow , mount} from 'enzyme'; //he mount function is used to render our component and then allow us to inspect the output and make assertions on it//
import renderer from 'react-test-renderer';
import Counter from '../../../components/counter/counter.js';

describe('<Counter />' , () =>{
  it('counter should exists at application start',()=>{
    let app = shallow(<Counter />); // the perent component to give access to
    //https://www.sitepoint.com/test-react-components-jest/ // help me to put dot befor up and down
    expect(app.find('counter').exists).toBeTruthy();
    expect(app.find('.down').exists()).toBeTruthy();
    expect(app.find('.up').exists()).toBeTruthy();
    expect(app.find('.count').exists()).toBeTruthy();
  });
  it('increase and decreases count when buttons are clicked' ,()=>{
    //mount(): used to render our component and then allow us to inspect the output and make assertions on it (for the child compnent).
    let app = mount(<Counter />);
    let buttonUp = app.find('.up');
    let buttonDown = app.find('.down');
    buttonUp.simulate('click');
    //simulate() function on the button variable can simulate a number of DOM events on an elemen
    expect(app.state('count')).toBe(1);
    buttonDown.simulate('click');
    expect(app.state('count')).toBe(0);

  });

  it('render correctly',()=>{
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});