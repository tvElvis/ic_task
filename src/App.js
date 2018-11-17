import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClientsList from './components/clientsList';



class App extends Component {
  render() {
    return (
      <ClientsList/>
    )
  }
}

const mapStateToProps = (state ) => {
  return {
    prop: state.prop
  }
}

export default connect(null,null)(App);
