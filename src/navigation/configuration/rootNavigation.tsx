import {Text, View} from 'react-native';
import React, {PureComponent} from 'react';
import {
  CardAnimationContext,
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {StackParamList} from './navigation.types';
import {LoginPage} from '../../profileContext/adapters/primaries/login';
import {ProfilePage} from '../../profileContext/adapters/primaries/Profile';
const Stack = createStackNavigator<StackParamList>();

export default class RootNavigation extends PureComponent {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerShown: false,
        }}>
        <Stack.Screen name={'Profile'} component={ProfilePage} />
        <Stack.Screen name={'Login'} component={LoginPage} />
      </Stack.Navigator>
    );
  }
}
