import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DashboardPage} from '../../dashboardContext/adapters/primaries/Dashboard';
import colors from '../../assets/colors';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useTranslation} from 'react-i18next';

const Drawer = createDrawerNavigator();

const Header = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.username}>Hiba Souissi</Text>
            <Text style={styles.email}>
              hsouissi@mobelitedev.onmicrosoft.com
            </Text>
          </View>
          <View style={styles.logoutBtn}>
            <Image
              source={require('../../assets/img/icn_logout.png')}
              style={styles.icn_logout}
            />
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export const DrawerNavigation = () => {
  const {t} = useTranslation();

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <Header {...props} />}
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
        component={DashboardPage}
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
        component={DashboardPage}
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
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    flex: 0.2,
    backgroundColor: colors.primary,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  userInfo: {
    flex: 0.75,
    marginLeft: 25,
    marginTop: 30,
  },
  logoutBtn: {
    flex: 0.25,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'AvenirLTStdHeavy',
    color: colors.textColor,
  },
  email: {
    top: 5,
    fontSize: 16,
    fontWeight: '500',
    color: colors.textColor,
  },
  icn_logout: {
    width: 35,
    height: 30,
    resizeMode: 'stretch',
    marginTop: 60,
  },
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
