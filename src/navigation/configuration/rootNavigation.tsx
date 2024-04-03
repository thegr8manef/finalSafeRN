import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {AppState} from '@redux/appState';
import {useNavigation} from '@react-navigation/native';
import {t} from 'i18next';
import {HomeNavigation} from '../drawer/homeNavigation';
import {StackParamList} from './navigation.types';
import {Text, TouchableOpacity} from 'react-native';
import {
  LoginPage,
  ProfilePage,
  SplashPage,
} from '@contexts/profileContext/adapters/primaries';
import {HeaderOption} from '@common/adapters/primaries/components/HeaderOption';
import {PreventionVisitPage} from '@contexts/visiteContext/adapters/primaries/PreventionVisit';
import globalStyle from '@styles/globalStyle';
import {SettingsPage} from '@contexts/profileContext/adapters/primaries/Settings';
import {HierarchicalVisitPage} from '@contexts/visiteContext/adapters/primaries/components/HierarchicalVisit';
import {ConformityVisitPage} from '@contexts/visiteContext/adapters/primaries/components/ConformityVisit';
import {CurrentVisitPage} from '@contexts/visiteContext/adapters/primaries/CurrentVisit';
import {Route} from './routes';
import {CheckSiteScreen} from '@contexts/visiteContext/adapters/primaries/commonScreen/checkSiteScreen';

const Stack = createStackNavigator<StackParamList>();

type ScreenOptionsProps = {
  titleKey: string;
  buttonText?: string;
};

const RootNavigation = () => {
  const navigation = useNavigation();
  const dataState = useSelector(
    (state: AppState) => state.profile.updateLocalProfile,
  );

  const CustomHeaderButton = ({buttonText}: {buttonText: string}) => (
    <TouchableOpacity onPress={() => handleNavigation()}>
      <Text style={globalStyle.fontMediumDark15Style}>{t(buttonText)}</Text>
    </TouchableOpacity>
  );

  // Function to create customized screen options
  const createScreenOptions = ({titleKey, buttonText}: ScreenOptionsProps) => ({
    ...HeaderOption({
      titleKey,
      renderHeaderRight: <CustomHeaderButton buttonText={buttonText} />,
    }),
  });

  const handleNavigation = () => {
    if (!dataState?.loading) {
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
        options={createScreenOptions({
          titleKey: 'txt.profile',
          buttonText: 'txt.next',
        })}
      />
      <Stack.Screen name="Home" component={HomeNavigation} />
      <Stack.Screen
        name="PreventionVisit"
        component={PreventionVisitPage}
        options={createScreenOptions({
          titleKey: 'txt.new.visite.prevention',
        })}
      />
      <Stack.Screen
        name="HierarchicalVisit"
        component={HierarchicalVisitPage}
        options={createScreenOptions({
          titleKey: 'txt.new.visite.hiearchique',
        })}
      />
      <Stack.Screen
        name="ConformityVisit"
        component={ConformityVisitPage}
        options={createScreenOptions({
          titleKey: 'txt.new.visite.conformité',
        })}
      />
      <Stack.Screen
        name="CurrentVisit"
        component={CurrentVisitPage}
        options={createScreenOptions({
          titleKey: 'txt.visite.courante',
        })}
      />
      <Stack.Screen name="Settings" component={SettingsPage} />
      <Stack.Screen name={Route.CheckSiteScreen} component={CheckSiteScreen} />
    </Stack.Navigator>
  );
};

export {RootNavigation};
