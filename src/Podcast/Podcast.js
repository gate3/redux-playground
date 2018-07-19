import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppLayout from '../layouts/AppLayout';

export class Podcast extends Component {
  render = () => (
    <AppLayout showFooter={false}>

    </AppLayout>
  )
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Podcast);
