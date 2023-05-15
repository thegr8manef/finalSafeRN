import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Login from './src/screens/Auth/Login'
import colors from './src/assets/colors'
import SplashScreen from './src/screens/Auth/Splash/SplashScreen'
import ProfileScreen from './src/screens/Auth/Profile/ProfileScreen'

export default function App() {
  return (
    <SafeAreaView style={{flex : 1}}>
      <StatusBar backgroundColor={colors.primary} />
      <ProfileScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})