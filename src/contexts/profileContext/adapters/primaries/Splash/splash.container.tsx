import { View, Image, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './splash.style';
import { t } from 'i18next';
import { StackParamList } from '@navigConfig/navigation.types';
import { Profile } from '@contexts/profileContext/domain/entity/profile';
import * as utils from '@utils/index';
import { ProgressBarCard } from '@contexts/statisticContext/adapters/primaries/components/ProgressBarCard';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  loading: boolean;
  connectionStatus: boolean | undefined;
  profile: Profile | undefined;
  loadLocalProfile: () => void;
  loadSychronisationData: (accessToken: string, lastUpdate : string) => void;
}

export const SplashContainer = (props: Props) => {
  const [mountedSyn, setMountedSyn] = useState(false);

  useEffect(() => {
    props.loadLocalProfile();
  }, []);

  useEffect(() => {
    setTimeout(handleNavigation, 3000);
  }, [props.profile, props.loading]);

  const handleNavigation = () => {
    if (props.profile) {
      if (props.profile?.email != '') {
        if (props.connectionStatus) {
          if (!mountedSyn) {
            setMountedSyn(true);
            props.loadSychronisationData(props.profile?.accessToken, props.profile?.lastUpdate);
          }
          if (props.loading == false && mountedSyn) {
            resetNavigation('Home');
          }
        } else {
          resetNavigation('Home');
        }
      } else {
        resetNavigation('Login');
      }
    }
  };

  const resetNavigation = (componentName: keyof StackParamList) => {
    props.navigation.reset({
      index: 0,
      routes: [{ name: componentName }],
    });
  };

  return (
    <View style={styles.container} testID='splash-container'>
      <View style={styles.container_logo_splash}>
        <Image style={styles.logo_splash} source={utils.images.splashSLogo} />
        <View>
          <View style={styles.progressContainer}>
            {mountedSyn && (
              <>
                <ProgressBarCard
                  color={utils.colors.primary}
                  width={200}
                  indeterminate={true}
                  borderRadius={3}
                  height={4}
                  unfilledColor={utils.colors.yellow800}
                />
                <Text style={styles.txtSynchro} testID='synchro-text'>
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
