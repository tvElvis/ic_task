import React, { Component } from 'react';

import Search from '../components/search';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clientsListAll } from '../actions';


class ClientsContainer extends Component {

  componentWillMount(){
    this.props.clientsListAll()
  }

  render() {    
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({clientsListAll},dispatch)
  
}


export default connect(mapStateToProps,mapDispatchToProps)(ClientsContainer);