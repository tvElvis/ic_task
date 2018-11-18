import { combineReducers } from 'redux';
import clients from './clients_reducer';


const rootReduser = combineReducers({
  clients
})

export default rootReduser;