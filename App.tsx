import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { reduxStore } from "./src/redux_configuration/store.redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from './src/navigation/configuration/rootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const store = reduxStore();




export default function App() {
  return (
  <Provider store={store}>

    <SafeAreaProvider style={{flex : 1}}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
      </SafeAreaProvider>

  </Provider>
  )
  }
  
  const styles = StyleSheet.create({
  container : {
  flex: 1
  }
  })