
import React from 'react';
import {Provider} from 'react-redux';
import Home from './src/components/Home';
import configureStore from './src/redux/configureStore';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
