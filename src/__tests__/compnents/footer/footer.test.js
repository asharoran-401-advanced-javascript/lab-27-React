/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
'use strict';

import React from 'react';
import {shallow} from 'enzyme';
// is designed to test components and it’s a great way to write assertions (or scenarios) that simulate actions that confirm the front-end UI is working correctly
import renderer from 'react-test-renderer';
import Footer from '../../../components/footer/footer.js';

describe(' <Footer />' , () =>{
  it('header is exist at start application' , () =>{
    let app = shallow(<Footer />);
    expect(app.find('footer').exists).toBeTruthy();
  });
  //renderer is a package that’s able to take a React component and render it as a pure JavaScript object.
  it('render correctly',()=>{
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});