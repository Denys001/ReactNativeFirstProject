/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import Tab from './src/Navigators/Tab'
import Stack from './src/Navigators/Stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab></Tab>
        {/* <Stack></Stack> */}
      </NavigationContainer>
    </Provider>
  );
};


export default App;
