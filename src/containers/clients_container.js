import React, { Component } from 'react';
import { Grid, Item } from 'semantic-ui-react';

import Search from '../components/search';
import ClientsInfo from '../components/clientsInfo';
import styles from './container.css';

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
      <Grid columns={2} divided container={false} >
        <Grid.Column computer={5} className="culumn_left">
          <Search keywords={this.getKeywords} />
          <ClientsInfo clients={this.props.clients} onItemClick={this.onItemClick} />
        </Grid.Column>
        <Grid.Column computer={11} className="culumn_right">
        {client ? (
          <Item  >
          <Item.Image size='large' src={client.general.avatar} />

          <Item.Content>
            <Item.Header as='a' className="client_header">{client.general.firstName} {client.general.lastName}</Item.Header>
            <Item.Meta className="client_meta">
              {client.job.title} <br/>
              Company: {client.job.company}
            </Item.Meta>
            <Item.Description>              
              Country: {client.address.country} <br/>
              City: {client.address.city} <br/>
              Street: {client.address.street} <br/>
              Zip Code: {client.address.zipCode} <br/>            
            </Item.Description>
            <Item.Extra>
              Email: {client.contact.email} <br/>  
              Phone: {client.contact.phone}
            </Item.Extra>
          </Item.Content>
        </Item>
        ): null}
          
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