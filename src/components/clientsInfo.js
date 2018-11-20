import React from 'react';
import { Grid, Card, Image, Divider } from 'semantic-ui-react';

const ClientsInfo = (props) => {
  return (
    <div>
      <Grid columns={2}>
       { props.clients.clients && props.clients.clients.length > 0 ?
          props.clients.clients.map( item => (
            <Card>
              <Image src={item.general.avatar}/>
              <Card.Header>{item.general.firstName} {item.general.lastName}</Card.Header>
            </Card>
          )) : null

       }
      </Grid>
    </div>
  );
};

export default ClientsInfo;