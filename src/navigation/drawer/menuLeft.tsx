import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Profile } from '@contexts/profileContext/domain/entity/profile';
import * as utils from '@utils/index';
import { useEffect } from 'react';
import globalStyle from '@styles/globalStyle';

interface Props {
  profile: Profile | undefined;
  loadProfileLocal: () => void;
}

export const MenuLeft = (props: Props) => {

  useEffect(() => {
    props.loadProfileLocal();
  }, [])

  return (
    <View style={globalStyle.containerStyle}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={styles.userInfo}>
            <Text style={globalStyle.fontBoldDark20Style}>{props.profile?.name}</Text>
            <Text style={globalStyle.fontMediumDark15Style}>{props.profile?.email}</Text>
          </View>
          <View style={styles.logoutBtn}>
            <Image source={utils.images.logoutIcon} style={styles.icn_logout} />
          </View>
        </View>
      </View>
      <DrawerContentScrollView
        style={styles.DrawerContentStyle}
        {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  DrawerContentStyle: {
    top: -30
  },
  header: {
    paddingTop: '10%',
    flex: 0.2,
    backgroundColor: utils.colors.primary,
  },
  headerContainer: {
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
  icn_logout: {
    width: 35,
    height: 30,
    resizeMode: 'contain',
    marginTop: 60,
  },
});
