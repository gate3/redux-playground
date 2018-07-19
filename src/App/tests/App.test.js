import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '../App';
import {shallow} from 'enzyme'
import InitialState from '../constants'
import thunk from 'redux-thunk'
import Pod from '../components/Pod'

const prepareProps = (props)=>({ ...InitialState, ...props })

describe('Landing Page Component', ()=>{
  it('Disconnected component renders without crashing', () => {
    let wrapper = shallow(<App />, {disableLifecycleMethods:true})
    expect(wrapper.length).toEqual(1)
  });

  describe('Connected component', () => {
    it('renders without crashing', ()=>{
      const mockFetchAllPodcastFn = jest.fn()
      let wrapper = shallow(<App fetchAllPodcasts={mockFetchAllPodcastFn}/>)
      expect(wrapper.length).toEqual(1)
    })

    it('calls fetchAllPodcasts function when mounted', ()=>{
      const mockFetchAllPodcastFn = jest.fn()
      let wrapper = shallow(<App fetchAllPodcasts={mockFetchAllPodcastFn}/>)
      expect(mockFetchAllPodcastFn).toHaveBeenCalled()
    })

    describe('displays', () => {
      const mockFetchAllPodcastFn = jest.fn()
      it('loading state', ()=>{
        let wrapper = shallow(<App 
                                {...prepareProps({fetching:true})}
                                fetchAllPodcasts={mockFetchAllPodcastFn}
                              />)
        expect(wrapper.find('.loading').length).toBe(1)
      })

      describe('podcast list of', ()=>{
        it('empty podcasts', ()=>{
          const props = {fetching:false}
          let wrapper = shallow(<App 
                                  {...prepareProps(props)}
                                  fetchAllPodcasts={mockFetchAllPodcastFn}
                                />)
          expect(wrapper.find('.loading').length).toBe(0)
          expect(wrapper.find('.empty-podcasts').length).toBe(1)          
        })

        it('empty', ()=>{
          const props = {
            fetching:false,
            podcasts:[
              // note i can just pass id only here and it will still work
              {id:1, name:'Some Podcast', description:'Some description'}
            ]
          }
          let wrapper = shallow(<App {...prepareProps(props)}
                                  fetchAllPodcasts={mockFetchAllPodcastFn}
                                />)
          expect(wrapper.find('.loading').length).toBe(0)
          expect(wrapper.find('.empty-podcasts').length).toBe(0)
          expect(wrapper.find(Pod).length).toBe(1)
        })
      })
    })
    
  })
})
