import React from 'react'
import Pod from './Pod'
import {shallow} from 'enzyme'

describe('Pod component', () => {
    it('renders without crashing', () => {
        const props = {id:1, name:'Some name', description:'Some description'}
        const wrapper = shallow(<Pod podcast={props} />) 
        expect(wrapper.length).toEqual(1)
    });
});