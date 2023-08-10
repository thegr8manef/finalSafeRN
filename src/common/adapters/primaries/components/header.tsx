import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import colors from '../../../../assets/colors';
import React from 'react';

interface Props {
  title: string;
  navigation: any;
}
export const Header = (props: Props): JSX.Element => {
  return (
    <View style={styles.header}>
      <View style={styles.header_title}>
        <Pressable
          style={styles.pressable_sidbar}
          onPress={() => props.navigation.openDrawer()}>
          <Image
            style={styles.sidbar_icn}
            source={require('../../../../assets/img/sidenav.png')}
          />
        </Pressable>
        <Text style={styles.page_title}>{props.title}</Text>
      </View>
      <View style={styles.header_icn_flash}>
        <Pressable style={styles.pressable_flash}>
          <Image
            style={styles.flash_icn}
            source={require('../../../../assets/img/icon_flash_dashboard.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const dimensions = Dimensions.get('screen');
const styles = StyleSheet.create({
  header: {
    height: dimensions.height / 15,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sidbar_icn: {
    width: '30%',
    height: '40%',
    marginStart: 15,
  },
  pressable_sidbar: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
  },
  page_title: {
    color: colors.textColor,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  pressable_flash: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  header_title: {
    flex: 3,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_icn_flash: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flash_icn: {
    width: '30%',
    height: '70%',
    resizeMode: 'contain',
    marginRight: 25,
  },
});
