import React from 'react';
import ReactDOM from 'react-dom';
import {Podcast} from './Podcast';
import {shallow} from 'enzyme'

describe('Test Podcast Component', ()=>{

  it('renders without crashing', () => {
    let wrapper = shallow(<Podcast />)
    expect(wrapper.length).toEqual(1)
  });

})
