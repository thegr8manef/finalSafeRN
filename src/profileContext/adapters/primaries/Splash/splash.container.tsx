import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/configuration/navigation.types';
import colors from '../../../../assets/colors';
import * as Progress from 'react-native-progress';
import {useTranslation} from 'react-i18next';
import {Profile} from '../../../domain/entity/profile';

interface Props {
  userConncted: boolean;
  navigation: StackNavigationProp<StackParamList>;
  profile: Profile | null;
  checkUserConnected: () => void;
  loadSychronisationData: (accessToken: string) => void;
  loading: boolean;
}

export const SplashScreen: React.FC<Props> = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const [mountedCheck, setMountedCheck] = useState(true);

  const [mountedSyn, setMountedSyn] = useState(false);

  const {t} = useTranslation();

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      if (
        props.userConncted === true &&
        mountedCheck === true &&
        props.profile
      ) {
        if (!mountedSyn) {
          setMountedSyn(true);
          props.loadSychronisationData(props.profile.accessToken);
        }
        if (props.loading == true) {
          setMountedCheck(false);

          props.navigation.replace('Home');
        }
      }
      if (props.userConncted === false && mountedCheck === true) {
        setMountedCheck(false);

        props.navigation.replace('Login');
      }
    }, 3000);
  }, [mountedCheck,mountedSyn]);

  if (!mounted) {
    props.checkUserConnected();
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />

      <View style={styles.container_logo_splash}>
        <Image
          style={styles.logo_splash}
          source={require('../../../../assets/img/logo_splash.png')}
        />
        <View>
          <View
            style={{
              marginTop: 15,
              display: mountedSyn ? 'flex' : 'none',
              alignItems: 'center',
            }}>
            <Progress.Bar
              color={colors.primary}
              width={200}
              indeterminate={true}
              borderRadius={3}
              height={4}
              borderWidth={0}
              unfilledColor={colors.yellow800}
            />
            <Text style={styles.txtSynchro}>
              {t('txt.synchronise.en.cours')}
            </Text>
          </View>
        </View>
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
  txtSynchro: {
    fontSize: 13,
    marginTop: 5,
  },
});
