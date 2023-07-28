import * as React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DashboardPage} from '../../statisticContext/adapters/primaries/Dashboard';
import colors from '../../assets/colors';

import {useTranslation} from 'react-i18next';
import {VisitsFlashPage} from '../../visiteContext/adapters/primaries/Flash';
import {MenuLeftPage} from '.';
import {VisitsContainer} from '../../visiteContext/adapters/primaries/Visit/visits.container';

const Drawer = createDrawerNavigator();

export const HomeNavigation = () => {
  const {t} = useTranslation();

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <MenuLeftPage {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.griy500,
        drawerInactiveTintColor: '#333',
        drawerItemStyle: {width: '100%', marginLeft: 0, marginTop: -4},
      }}>
      <Drawer.Screen
        name={'dashboard'}
        component={DashboardPage}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.dashboard')}</Text>
          ),
          drawerIcon: () => (
            <Image
              source={require('../../assets/img/icn_dashboard.png')}
              style={[styles.icon, {height: 20, width: 24}]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={'visites'}
        component={VisitsContainer}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.visites')}</Text>
          ),
          drawerIcon: () => (
            <Image
              source={require('../../assets/img/icn_visit.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={'visit.flash'}
        component={VisitsFlashPage}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.new.visit.flash')}</Text>
          ),
          drawerIcon: () => (
            <Image
              source={require('../../assets/img/icn_visit_flash.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={'my.remarks'}
        component={DashboardPage}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.my.remarks')}</Text>
          ),

          drawerIcon: () => (
            <Image
              source={require('../../assets/img/icn_my_remarks.png')}
              style={[styles.icon, {height: 28}]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={'profile'}
        component={DashboardPage}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.profile')}</Text>
          ),

          drawerIcon: () => (
            <Image
              source={require('../../assets/img/icn_profile.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={'settings'}
        component={DashboardPage}
        options={{
          drawerLabel: () => (
            <Text style={styles.label}>{t('txt.settings')}</Text>
          ),

          drawerIcon: () => (
            <Image
              source={require('../../assets/img/icn_settings.png')}
              style={styles.icon}
            />
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
    resizeMode: 'stretch',
    marginLeft: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    height: 30,
    marginLeft: -15,
    top: 5,
    color: colors.textColor,
  },
});
