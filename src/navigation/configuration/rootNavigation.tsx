import {Text, View} from 'react-native';
import React, {PureComponent} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {StackParamList} from './navigation.types';
import {LoginPage} from '../../profileContext/adapters/primaries/login';
import {ProfilePage} from '../../profileContext/adapters/primaries/Profile';
import {DashboardPage} from '../../dashboardContext/adapters/primaries/Dashboard';
import {DrawerNavigation} from '../drawer/drawerNavigation';
const Stack = createStackNavigator<StackParamList>();

export default class RootNavigation extends PureComponent {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerShown: false,
        }}>
        {/* <Stack.Screen name={'Login'} component={LoginPage} />
        <Stack.Screen name={'Profile'} component={ProfilePage} /> */}
        <Stack.Screen name={'Drawer'} component={DrawerNavigation} />
      </Stack.Navigator>
    );
  }
}
