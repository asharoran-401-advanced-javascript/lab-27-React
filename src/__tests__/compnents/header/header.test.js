// eslint-disable-next-line strict
'use strict';

import React from 'react';
import { shallow , mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../../../components/header/header.js';

describe(' <Header />' , () =>{
    it('header is exist at start application' , () =>{
        let app = shallow(<Header />);
        expect(app.find('h1').exists).toBeTruthy();
    });
    it('render correctly',()=>{
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


