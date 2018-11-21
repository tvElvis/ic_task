import React, { Component } from 'react';
import { Grid, Item } from 'semantic-ui-react';

import Search from '../components/search';
import ClientsInfo from '../components/clientsInfo';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setClients, setClient} from '../actions';


class ClientsContainer extends Component {


  componentDidMount(){
    this.props.setClients()
  }

  getKeywords = (event) => {
    let key = event.target.value;

    this.props.setClients(key)
  }

  onItemClick = (client) => {
    this.props.setClient(client)
  }

  render() {
    const client = this.props.selectedClient;
    return (
      <Grid columns={2} divided>
        <Grid.Column computer={5}>
          <Search keywords={this.getKeywords} />
          <ClientsInfo clients={this.props.clients} onItemClick={this.onItemClick} />
        </Grid.Column>
        <Grid.Column computer={11}>
        {client ? (
          <Item  >
          <Item.Image size='tiny' src={client.general.avatar} />

          <Item.Content>
            <Item.Header as='a'>{client.general.firstName} {client.general.lastName}</Item.Header>
            <Item.Meta>{client.job.title}</Item.Meta>

          </Item.Content>
        </Item>
        ): "Netyy"}
          
        </Grid.Column>
      </Grid>

    );
  }
}

const mapStateToProps = (state) => {  
  return {
    clients: state.clients.clientList,
    selectedClient: state.clients.selectedClient
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setClients,setClient},dispatch)
  
}


export default connect(mapStateToProps,mapDispatchToProps)(ClientsContainer);