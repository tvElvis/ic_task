export default function(state={},action){

  switch(action.type){
    case 'SET_CLIENTS':
      return {...state,clients:action.payload}
    // case 'SET_CLIENT':
    //   return {}
    default:
      return state;
  }
}