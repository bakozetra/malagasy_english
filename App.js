/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import HomeSreen from './src/functonality/HomeScreen';
import CategoriesProvider from "./src/Context/GlobalContext"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemDetails from './src/functonality/ItemDetails';

const Stack = createStackNavigator();
const App = () => {

  return (
    <CategoriesProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeScreen" component={HomeSreen} />
          <Stack.Screen name="Details" component={ItemDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </CategoriesProvider>
  )
}
export default App;
