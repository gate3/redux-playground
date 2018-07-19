import React from 'react'
import PageInfo from './PageInfo'
import {shallow} from 'enzyme'

describe('PageInfo component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<PageInfo />) 
        expect(wrapper.length).toEqual(1)
    });
});