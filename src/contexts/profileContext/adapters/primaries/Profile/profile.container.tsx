import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import styles from './profile.style';
import * as utils from '@utils/index';
import {StackParamList} from '@navigConfig/navigation.types';
import {Profile} from '@contexts/profileContext/domain/entity/profile';
import {User} from '@contexts/profileContext/domain/entity/user';
import {DetailsContainer} from '@common/adapters/primaries/components/DetailsContainer';
import {InfoContainer} from '@common/adapters/primaries/components/InfoContainer';
import {Divider} from '@common/adapters/primaries/components/Divider';
import {
  View,
  ActivityIndicator,
} from 'react-native';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  profile: Profile | undefined;
  user: User;
  loading: boolean;
  loadProfileDetails: (accessToken: string) => void;
}

export const ProfileContainer = (props: Props) => {
  
  const [mounted, setMounted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    if (props.loading) {
      setIsCompleted(true);
    }
    setMounted(true);
  });

  if (!mounted) {
    props.loadProfileDetails(props.profile?.accessToken!);
  }

  return (
    <>
      <View style={styles.detailsContainer}>
        {props.profile ? (
          <DetailsContainer
            name_label={props.profile?.name}
            email_label={props.profile?.email}
          />
        ) : null}
      </View>
      <Divider />
      <View style={styles.detailsContainer}>
        <InfoContainer
          title={t('txt.region')}
          subtitle={props.user?.region ?? ''}
        />
      </View>
      <Divider />
      <View style={styles.detailsContainer}>
        <InfoContainer
          title={t('txt.filiale')}
          subtitle={props.user?.function ?? ''}
        />
        {!isCompleted && (
          <ActivityIndicator size="large" color={utils.colors.primary} />
        )}
      </View>
      <Divider />
      <View style={styles.detailsContainer}>
        <InfoContainer title={t('txt.etablissement')} subtitle={' '} />
      </View>
      </>
  );
};
