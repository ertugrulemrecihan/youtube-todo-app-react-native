import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';

function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

export default App;
