import React, { Component } from 'react';

import Search from '../components/search';
import ClientsInfo from '../components/clientsInfo';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clientsListAll } from '../actions';


class ClientsContainer extends Component {

  componentWillMount(){
    this.props.clientsListAll()
  }

  getKeywords = (event) => {
    let key = event.target.value;

     this.props.clientsInfo(key)
  }

  render() { 
    console.log(this.props)
    return (
      <div>
        <Search keywords={this.getKeywords}/>
        <ClientsInfo clients={this.props.clients}/>
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