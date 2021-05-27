import {createStore} from 'redux';
import Reducers from './reducers';


const configureStore = () => {
  let store = createStore(Reducers);

  return store;
};

export default configureStore;
