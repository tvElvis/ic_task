import { combineReducers } from 'redux';
import clients from './clients_reducer';
import test from './test_reducer';

const rootReduser = combineReducers({
  clients,
  test
})

export default rootReduser;