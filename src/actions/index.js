import clients from '../clients.json';

export function clientsListAll() {
  
  const clientList = clients;

  return {
    type:'GET_CLIENTS',
    payload:clientList
  }
}