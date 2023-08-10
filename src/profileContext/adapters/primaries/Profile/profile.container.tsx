import React, {PureComponent, ReactNode, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {DetailsContainer} from '../../../../assets/components/DetailsContainer';
import {Divider} from '../../../../assets/components/Divider';
import {Header} from '../../../../assets/components/Header';
import {InfoContainer} from '../../../../assets/components/InfoContainer';
import colors from '../../../../assets/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/configuration/navigation.types';
import {Profile} from '../../../domain/entity/profile';
import {User} from '../../../domain/entity/user';
import {useTranslation} from 'react-i18next';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  profile: Profile | undefined;
  loadProfileDetails: (accessToken: string) => void;
  user: User;
  loading: boolean;
}

export const ProfileContainer: React.FC<Props> = (props: Props) => {
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
          <Header label_title={t('txt.profile')}></Header>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
  },
  header_container: {
    flexDirection: 'row-reverse',
    height: 60,
  },
  button_container: {
    backgroundColor: colors.primary,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text_container: {
    flex: 3,
    backgroundColor: colors.primary,
    justifyContent: 'center',

    height: '100%',
  },
  txtNext: {
    marginRight: 15,
    fontSize: 15,
    color: colors.textColor,
    fontWeight: '600',
  },
  detailsContainer: {
    height: '15%',
    backgroundColor: colors.white,
  },
});
