import React from 'react';

import ClientsContainer from '../containers/clients_container';
import {Container} from 'semantic-ui-react'



const clientsList = (props) => { 
  return (
    <Container>
      <ClientsContainer {...props}/>
    </Container>
    
  )
}

export default clientsList;