
import React, {Component} from 'react';
import AppLayout from '../layouts/AppLayout';
//import {push} from 'connected-react-router'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PageInfo from './components/PageInfo';
import {fetchAll} from './actions/action';
import Pod from './components/Pod';
import {isArray} from '../modules/utilities';

import podObject from './modules/podObject';

export class App extends Component {

  componentDidMount = () => {
    this.props.fetchAllPodcasts();
  }

  renderEmptyPodcastList () {
    return <h1 className="empty-podcasts">No Podcasts Yet</h1>;
  }

  createPodcastList () {
    return this.props.podcasts.map((podcast)=> (
      <Pod key={podcast.id} podcast={new podObject(podcast)}/>
    ));
  }

  podcastsValidityCheck () {
    return this.props.podcasts && isArray(this.props.podcasts);
  }

  renderPodcasts () {
    if (this.podcastsValidityCheck()){
      return this.props.podcasts.length > 0 ? this.createPodcastList() : this.renderEmptyPodcastList();
    } else {
      return null;
    }
  }

  render = ()=>(
    <AppLayout>
      <PageInfo />
      <section className="episodes">
        {
          this.props.fetching ? <h1 className="loading">...Loading</h1> : this.renderPodcasts()
        }
      </section>
    </AppLayout>
  )
}

const mapStateToProps = ({appReducer}) => ({
  podcasts: appReducer.podcasts,
  fetched: appReducer.fetched,
  fetching: appReducer.fetching,
  error: appReducer.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchAllPodcasts: ()=> fetchAll(),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
