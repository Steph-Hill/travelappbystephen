import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Getstart from './pages/Getstart'
import Home from './pages/Home'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
 
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='accueil'>

          <Stack.Screen name="start" component={Getstart} />
          <Stack.Screen name="accueil" component={Home} />
          
        
      </Stack.Navigator>

  </NavigationContainer>


  )
}

export default App

const styles = StyleSheet.create({})