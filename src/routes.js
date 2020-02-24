import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Stack = createStackNavigator();
const screenOptions = {
  header: navigation => <Header {...navigation} />,
  cardStyle: {
    backgroundColor: '#000',
  },
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
