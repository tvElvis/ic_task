export default function(state={},action){

  switch(action.type){
    case 'GET_CLIENTS':
      return {...state,clients:action.payload}
    
    default:
      return state;
  }
}