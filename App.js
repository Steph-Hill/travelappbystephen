import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboard from './components/Onboard';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
   <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="Board" component={Onboard} />

      </Stack.Navigator>

   </NavigationContainer>
  )
}

export default App