import React, {PureComponent} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {StackParamList} from './navigation.types';
import {ProfilePage} from '../../profileContext/adapters/primaries/Profile';
import {HomeNavigation} from '../drawer/homeNavigation';
import { SplashPage } from '../../profileContext/adapters/primaries/Splash';
import { LoginPage } from '../../profileContext/adapters/primaries/Login';
const Stack = createStackNavigator<StackParamList>();

export default class RootNavigation extends PureComponent {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerShown: false,
        }}>
        <Stack.Screen name={'Splash'} component={SplashPage} />
        <Stack.Screen name={'Login'} component={LoginPage} />
        <Stack.Screen name={'Profile'} component={ProfilePage} />
        <Stack.Screen name={'Home'} component={HomeNavigation} />
      </Stack.Navigator>
    );
  }
}
