import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DashboardPage } from '@contexts/statisticContext/adapters/primaries/Dashboard';
import { VisitsFlashPage } from '@contexts/visiteContext/adapters/primaries/Flash';
import { MenuLeftPage } from './index';
import { VisitsContainer } from '@contexts/visiteContext/adapters/primaries/Visit/visits.container';
import * as utils from '@utils/index';
import { t } from 'i18next';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageSourcePropType,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// Create a Drawer navigator
const Drawer = createDrawerNavigator();

export const HomeNavigation = () => {
  // Define types for screen options
  type ScreenOptionsProps = {
    titleKey: string;
    drawerIconPath: ImageSourcePropType;
  };

  // Custom header component
  const CustomHeader: React.FC<{ title: string }> = ({ title }) => (
    <Text style={styles.page_title}>{title}</Text>
  );

  // Function to create customized screen options
  const createScreenOptions = ({
    titleKey,
    drawerIconPath,
  }: ScreenOptionsProps) => ({
    headerTitle: () => <CustomHeader title={t(titleKey)} />,
    headerTitleAlign: 'center',
    headerBackground: () => <View style={styles.backgroundHeader} />,
    headerRight: () => (
      <TouchableOpacity>
        <Image
          style={styles.flash_icn}
          source={utils.images.dashboardFlashIcon}
        />
      </TouchableOpacity>
    ),
    drawerLabel: () => <Text style={styles.label}>{t(titleKey)}</Text>,
    drawerIcon: () => (
      <Image source={drawerIconPath} style={styles.iconStyle} />
    ),
  });

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
          titleKey: 'txt.dashboard',
          drawerIconPath: utils.images.dashboardIcon,
        })}
      />
      <Drawer.Screen
        name={'visites'}
        component={VisitsContainer}
        options={createScreenOptions({
          titleKey: 'txt.visites',
          drawerIconPath: utils.images.visitIcon,
        })}
      />
      <Drawer.Screen
        name={'visit.flash'}
        component={VisitsFlashPage}
        options={createScreenOptions({
          titleKey: 'txt.new.visit.flash',
          drawerIconPath: utils.images.visitflashIcon,
        })}
      />
      <Drawer.Screen
        name={'my.remarks'}
        component={DashboardPage}
        options={createScreenOptions({
          titleKey: 'txt.my.remarks',
          drawerIconPath: utils.images.remarksIcon,
        })}
      />
      <Drawer.Screen
        name={'profile'}
        component={DashboardPage}
        options={createScreenOptions({
          titleKey: 'txt.profile',
          drawerIconPath: utils.images.profileIcon,
        })}
      />
      <Drawer.Screen
        name={'settings'}
        component={DashboardPage}
        options={createScreenOptions({
          titleKey: 'txt.settings',
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
  backgroundHeader: {
    backgroundColor: utils.colors.primary,
    flex: 1,
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
  flash_icn: {
    width: Dimensions.get('screen').width / 12,
    height: 50,
    resizeMode: 'contain',
    marginRight: 25,
  },
  page_title: {
    color: utils.colors.textColor,
    fontSize: 20,
    fontWeight: '500',
  },
});
