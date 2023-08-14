import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Profile} from '@contexts/profileContext/domain/entity/profile';
import * as utils from '@utils/index';
import {useEffect} from 'react';



interface Props {
  profile: Profile | undefined;
  loadProfileLocal: () => void;
}


export const MenuLeft = (props: Props) => {

  useEffect(()=>{
    props.loadProfileLocal();
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.username}>{props.profile?.name}</Text>
            <Text style={styles.email}>{props.profile?.email}</Text>
          </View>
          <View style={styles.logoutBtn}>
            <Image source={utils.images.logoutIcon} style={styles.icn_logout} />
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: utils.colors.white,
  },

  header: {
    flex: 0.2,
    backgroundColor: utils.colors.primary,
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
    color: utils.colors.textColor,
  },
  email: {
    top: 5,
    fontSize: 16,
    fontWeight: '500',
    color: utils.colors.textColor,
  },
  icn_logout: {
    width: 35,
    height: 30,
    resizeMode: 'stretch',
    marginTop: 60,
  },
});
