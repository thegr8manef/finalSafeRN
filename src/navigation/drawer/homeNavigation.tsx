import * as React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DashboardPage} from '@contexts/statisticContext/adapters/primaries/Dashboard';
import * as utils from '@utils/index';

import {useTranslation} from 'react-i18next';
import {VisitsFlashPage} from '@contexts/visiteContext/adapters/primaries/Flash';
import {MenuLeftPage} from './index';
import {VisitsContainer} from '@contexts/visiteContext/adapters/primaries/Visit/visits.container';
import { LocalProfilePage } from '@contexts/profileContext/adapters/primaries/LocalProfile';

const Drawer = createDrawerNavigator();

export const HomeNavigation = () => {
  const {t} = useTranslation();

  return (
    <Drawer.Navigator
    
      initialRouteName="Dashboard"
      drawerContent={props => <MenuLeftPage {...props} />}
    
      screenOptions={{
        headerShown: true,
        headerStyle : {
            backgroundColor : utils.colors.primary
        },
        drawerActiveBackgroundColor: utils.colors.griy500,
        drawerInactiveTintColor: '#333',
        drawerItemStyle: {width: '100%',   marginLeft: 0, marginTop: -4},
      }}>
      <Drawer.Screen
        name={t('txt.dashboard')}
        component={DashboardPage}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.dashboard')}</Text>
          ),
          drawerIcon: () => (
            <Image
              source={utils.images.dashboardIcon}
              style={[styles.icon]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={t('txt.visites')}
        component={VisitsContainer}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.visites')}</Text>
          ),
          drawerIcon: () => (
            <Image source={utils.images.visitIcon} style={styles.icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={t('txt.new.visit.flash')}
        component={VisitsFlashPage}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.new.visit.flash')}</Text>
          ),
          drawerIcon: () => (
            <Image source={utils.images.visitflashIcon} style={styles.icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={t('txt.my.remarks')}
        component={DashboardPage}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.my.remarks')}</Text>
          ),

          drawerIcon: () => (
            <Image
              source={utils.images.remarksIcon}
              style={[styles.icon]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={t('txt.profile')}
        component={LocalProfilePage}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.profile')}</Text>
          ),

          drawerIcon: () => (
            <Image source={utils.images.profileIcon} style={styles.icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={t('txt.settings')}
        component={DashboardPage}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.settings')}</Text>
          ),

          drawerIcon: () => (
            <Image source={utils.images.settingsIcon} style={styles.icon} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    resizeMode :"contain",
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
});
