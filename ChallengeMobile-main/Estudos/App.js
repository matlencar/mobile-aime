import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/Navigation/StackNav';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#e42b37' barStyle="light-content"/>
      <AppNavigator />
    </NavigationContainer>
  );
}
