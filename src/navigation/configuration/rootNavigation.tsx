import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { AppState } from '@redux/appState';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { HomeNavigation } from '../drawer/homeNavigation';
import { StackParamList } from './navigation.types';
import * as utils from '@utils/index';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  LoginPage,
  ProfilePage,
  SplashPage,
} from '@contexts/profileContext/adapters/primaries';
import { HeaderOption } from '@common/adapters/primaries/components/HeaderOption';
import { PreventionVisitPage } from '@contexts/visiteContext/adapters/primaries/PreventionVisit';

const Stack = createStackNavigator<StackParamList>();

type ScreenOptionsProps = {
  titleKey: string;
  buttonText: string;
};

const RootNavigation = () => {
  const navigation = useNavigation();
  const dataState = useSelector((state: AppState) => state.profile.updateLocalProfile);

  const CustomHeaderButton = ({ buttonText }: { buttonText: string }) => (
    <TouchableOpacity onPress={() => handleNavigation()}>
      <Text style={styles.txtNext}>{t(buttonText)}</Text>
    </TouchableOpacity>
  );

  // Function to create customized screen options
  const createScreenOptions = ({
    titleKey,
    buttonText,
  }: ScreenOptionsProps) => ({
    ...HeaderOption({
      titleKey,
      renderHeaderRight: (<CustomHeaderButton buttonText={buttonText} />),
    }),
  });

  const handleNavigation = () => {
    if (!(dataState?.loading)) {
      navigation.navigate('Home');
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={
          createScreenOptions({
            titleKey: 'txt.profile',
            buttonText: 'txt.next',
          })}
      />
      <Stack.Screen name="Home" component={HomeNavigation} />
      <Stack.Screen name="PreventionVisit" component={PreventionVisitPage} options={{ headerShown: true }} />

    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerBarStyle: {
    backgroundColor: utils.colors.primary,
  },
  textCentre: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  txtNext: {
    marginRight: 15,
    fontSize: 15,
    color: utils.colors.textColor,
    fontWeight: '600',
  },
});

export { RootNavigation };
