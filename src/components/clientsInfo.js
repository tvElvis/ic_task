import React from 'react';
import { Item, Image } from 'semantic-ui-react';

const ClientsInfo = (props) => {
  return (
    <div>
      <Item.Group>
       { props.clients && props.clients.length > 0 ?
          props.clients.map( client => (            
            <Item key={client.contact.email} onClick={()=>props.onItemClick(client)}>
            <Item.Image size='tiny' src={client.general.avatar} />
      
            <Item.Content>
              <Item.Header as='a'>{client.general.firstName} {client.general.lastName}</Item.Header>
              <Item.Meta>{client.job.title}</Item.Meta>
                          
            </Item.Content>
          </Item>
          )) : null

       }
      </Item.Group>
    </div>
  );
};

export default ClientsInfo;