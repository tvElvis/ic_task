import clients from '../clients.json';

export function setClient(client) {
  return {
    type:"SELECT_CLIENT",
    payload:client
  }
}


export function setClients(keywords){

  if(!keywords){
    return {
      type:'SET_CLIENTS',
      payload:clients
    }
  } 

  const filteredClients = clients.filter(client => searchObj(client,keywords))

    return {
      type:'SET_CLIENTS',
      payload:filteredClients
    }
} 

// export function clientsListAll() {
  
//   // const clientList = clients;

//   return {
//     type:'GET_CLIENTS_ALL',
//     payload:clients
//   }
// }

const searchObj = (obj, query) => {

  for (const key in obj) {
      const value = obj[key];

      if (typeof value === 'object') {
          return searchObj(value, query);
      }

      return value.toString().includes(query)
 
  }

}