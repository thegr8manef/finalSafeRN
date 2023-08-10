import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../../assets/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/configuration/navigation.types';
import {Profile} from '../../../domain/entity/profile';
import {User} from '../../../domain/entity/user';
import {useTranslation} from 'react-i18next';
import styles from './profile.style';
import { SimpleHeader } from '../../../../common/adapters/primaries/components/SimpleHeader';
import { DetailsContainer } from '../../../../common/adapters/primaries/components/DetailsContainer';
import { Divider } from '../../../../common/adapters/primaries/components/Divider';
import { InfoContainer } from '../../../../common/adapters/primaries/components/InfoContainer';
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
    props.loadProfileDetails(props.profile?.accessToken!!);
  }
  const handlNavigation = () => {
    if (isCompleted) {
      props.navigation.replace('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={handlNavigation}>
            <Text style={styles.txtNext}>{t('txt.next')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.text_container}>
          <SimpleHeader label_title={t('txt.profile')}></SimpleHeader>
        </View>
      </View>
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
          label_title={t('txt.region')}
          label_subtitle={props.user == undefined ? '' : props.user.region}
        />
      </View>
      <Divider />
      <View style={styles.detailsContainer}>
        <InfoContainer
          label_title={t('txt.filiale')}
          label_subtitle={props.user == undefined ? '' : props.user.function}
        />
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={{display: !isCompleted ? 'flex' : 'none'}}
        />
      </View>
      <Divider />
      <View style={styles.detailsContainer}>
        <InfoContainer
          label_title={t('txt.etablissement')}
          label_subtitle={' '}
        />
      </View>
    </SafeAreaView>
  );
};
