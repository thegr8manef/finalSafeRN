import {View, StyleSheet, SafeAreaView, StatusBar, Image} from 'react-native';
import React, {useEffect, useRef, Component, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/configuration/navigation.types';
import colors from '../../../../assets/colors';
import {Profile} from '../../../domain/entity/profile';
import * as Progress from 'react-native-progress';

interface Props {
  profile: Profile | undefined;
  navigation: StackNavigationProp<StackParamList>;
  getUserInfo: () => void;
}

export default function SplashScreen(props: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Login');
    }, 3000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />

      <View style={styles.container_logo_splash}>
        <Image
          style={styles.logo_splash}
          source={require('../../../../assets/img/logo_splash.png')}
        />
      </View>

      <View style={styles.container_squares_splash_img}>
        <Image
          style={styles.squares_splash_img}
          source={require('../../../../assets/img/img_squares_splash.png')}
        />
        <Image
          style={styles.logo_eiffage}
          source={require('../../../../assets/img/logo_eiffage.png')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
  },
  container_logo_splash: {
    flex: 3,
    alignItems: 'center',
  },
  logo_splash: {
    marginTop: 110,
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  logo_eiffage: {
    width: 130,
    height: 40,
    resizeMode: 'stretch',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  container_squares_splash_img: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
  },
  squares_splash_img: {
    width: 20,
    height: 100,
    resizeMode: 'stretch',
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
