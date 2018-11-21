export default function(state={clientList:[],selectedClient:null},action){

  switch(action.type){
    case 'SET_CLIENTS':
      return {...state,clientList:action.payload}
    case 'SELECT_CLIENT':
      return {...state,selectedClient:action.payload}
    default:
      return state;
  }
}