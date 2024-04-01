import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DashboardPage} from '@contexts/statisticContext/adapters/primaries/Dashboard';
import {VisitsFlashPage} from '@contexts/visiteContext/adapters/primaries/Flash';
import {MenuLeftPage} from './index';
import * as utils from '@utils/index';
import {t} from 'i18next';
import {HeaderOption} from '@common/adapters/primaries/components/HeaderOption';
import globalStyle from '@styles/globalStyle';
import {
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {LocalProfilePage} from '@contexts/profileContext/adapters/primaries/LocalProfile';
import {VisitsPage} from '@contexts/visiteContext/adapters/primaries/Visit';
import {SettingsPage} from '@contexts/profileContext/adapters/primaries/Settings';
import {TRANSLATE} from '@common/translateConstants';

// Create a Drawer navigator
const Drawer = createDrawerNavigator();
interface Props {
  navigation: any;
}
export const HomeNavigation = (props: Props) => {
  // Define types for screen options
  type ScreenOptionsProps = {
    titleKey: string;
    drawerIconPath: ImageSourcePropType;
  };

  // Function to create customized screen options
  const createScreenOptions = ({
    titleKey,
    drawerIconPath,
  }: ScreenOptionsProps) => ({
    ...HeaderOption({
      titleKey,
      renderHeaderRight: headerRightContent,
    }),
    drawerLabel: () => (
      <Text style={globalStyle.fontBoldDark15Style}>{t(titleKey)}</Text>
    ),
    drawerIcon: () => (
      <Image source={drawerIconPath} style={styles.iconStyle} />
    ),
  });

  const headerRightContent = (
    <TouchableOpacity onPress={() => props.navigation.navigate('visit.flash')}>
      <Image
        style={styles.flashIcon}
        source={utils.images.dashboardFlashIcon}
      />
    </TouchableOpacity>
  );
  // Return the Drawer Navigator
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <MenuLeftPage {...props} />}
      screenOptions={styles.drawerStyle}>
      <Drawer.Screen
        name={'dashboard'}
        component={DashboardPage}
        options={createScreenOptions({
          titleKey: TRANSLATE.DASHBOARD,
          drawerIconPath: utils.images.dashboardIcon,
        })}
      />
      <Drawer.Screen
        name={'visites'}
        component={VisitsPage}
        options={createScreenOptions({
          titleKey: TRANSLATE.VISITS,
          drawerIconPath: utils.images.visitIcon,
        })}
      />
      <Drawer.Screen
        name={'visit.flash'}
        component={VisitsFlashPage}
        options={createScreenOptions({
          titleKey: TRANSLATE.VISIT_FLASH,
          drawerIconPath: utils.images.visitflashIcon,
        })}
      />
      <Drawer.Screen
        name={'my.remarks'}
        component={DashboardPage}
        options={createScreenOptions({
          titleKey: TRANSLATE.REMARKS,
          drawerIconPath: utils.images.remarksIcon,
        })}
      />
      <Drawer.Screen
        name={'profile'}
        component={LocalProfilePage}
        options={createScreenOptions({
          titleKey: TRANSLATE.PROFILE,
          drawerIconPath: utils.images.profileIcon,
        })}
      />
      <Drawer.Screen
        name={'settings'}
        component={SettingsPage}
        options={createScreenOptions({
          titleKey: TRANSLATE.SETTINGS,
          drawerIconPath: utils.images.settingsIcon,
        })}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    drawerActiveBackgroundColor: utils.colors.griy500,
    drawerItemStyle: {
      width: '100%',
      marginLeft: 0,
      marginTop: -4,
    },
  },
  iconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    height: 30,
    marginLeft: -15,
    top: 5,
    color: utils.colors.textColor,
  },
  flashIcon: {
    width: Dimensions.get('screen').width / 12,
    height: 50,
    resizeMode: 'contain',
    marginRight: 25,
  },
});
