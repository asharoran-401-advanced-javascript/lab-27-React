// eslint-disable-next-line strict
'use strict';

import React from 'react';
import {shallow , mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../../../components/footer/footer.js';

describe(' <Footer />' , () =>{
    it('header is exist at start application' , () =>{
        let app = shallow(<Footer />);
        expect(app.find('footer').exists).toBeTruthy();
    });
    it('render correctly',()=>{
        const tree = renderer.create(<Footer />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});