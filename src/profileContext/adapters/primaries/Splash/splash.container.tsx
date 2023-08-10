import {View, Image, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/configuration/navigation.types';
import colors from '../../../../assets/colors';
import {Profile} from '../../../domain/entity/profile';
import styles from './splash.style';
import * as utils from '../../../../utils';
import {ProgressBarCard} from '../../../../statisticContext/adapters/primaries/components/ProgressBarCard';
import {t} from 'i18next';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  loading: boolean;
  connectionStatus: boolean | undefined;
  profile: Profile | undefined;
  loadLocalProfile: () => void;
  loadSychronisationData: (accessToken: string) => void;
}

export const SplashContainer = (props: Props) => {
  const [mountedSyn, setMountedSyn] = useState(false);

  useEffect(() => {
    setTimeout(handleNavigation, 3000);
    props.loadLocalProfile();
  }, []);

  const handleNavigation = () => {
    if (props.profile) {
      if (props.profile?.email != '') {
        if (props.connectionStatus) {
          if (!mountedSyn) {
            setMountedSyn(true);
            console.log('mount syncro');
            props.loadSychronisationData(props.profile?.accessToken!!);
          }
          if (props.loading == false && mountedSyn) {
            props.navigation.replace('Home');
          }
        } else {
          props.navigation.replace('Home');
        }
      }
    } else {
      props.navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_logo_splash}>
        <Image style={styles.logo_splash} source={utils.images.splashSLogo} />
        <View>
          <View style={styles.progressContainer}>
            {mountedSyn && (
              <>
                <ProgressBarCard
                  color={colors.primary}
                  width={200}
                  indeterminate={true}
                  borderRadius={3}
                  height={4}
                  unfilledColor={colors.yellow800}
                />
                <Text style={styles.txtSynchro}>
                  {t('txt.synchronise.en.cours')}
                </Text>
              </>
            )}
          </View>
        </View>
      </View>
      <View style={styles.container_squares_splash_img}>
        <Image
          style={styles.squares_splash_img}
          source={utils.images.splashSquares}
        />
        <Image source={utils.images.eiffageLogo} style={styles.logo_eiffage} />
      </View>
    </View>
  );
};
