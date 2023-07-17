import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, Component, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/configuration/navigation.types';
import colors from '../../../../assets/colors';
import {Profile} from '../../../domain/entity/profile';
import * as Progress from 'react-native-progress';

interface Props {
  userConncted: boolean;
  navigation: StackNavigationProp<StackParamList>;
  checkUserConnected: () => void;
  synchronisation: (accessToken: string) => void;
  loading: boolean;
}

export const SplashScreen: React.FC<Props> = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      if (props.userConncted == true && props.userConncted != undefined) {
        if (props.loading != false) {
        }
        props.navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      }
      if (props.userConncted == false && props.userConncted != undefined) {
        props.navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }
    }, 3000);
  });

  if (!mounted) {
    props.checkUserConnected();
    props.synchronisation(' ');
  }

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
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={{display: props.loading ? 'flex' : 'none'}}
        />
        <Image
          style={styles.logo_eiffage}
          source={require('../../../../assets/img/logo_eiffage.png')}
        />
      </View>
    </SafeAreaView>
  );
};

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
