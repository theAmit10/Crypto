import {View, Text} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation';
import {Provider} from 'react-redux';
import RTStore from './stores/theme/RTStore';

const App = () => {
  return (
    <Provider store={RTStore}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
