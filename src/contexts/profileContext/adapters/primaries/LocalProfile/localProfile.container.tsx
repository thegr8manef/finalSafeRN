import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Profile } from '@contexts/profileContext/domain/entity/profile';
import { useTranslation } from 'react-i18next';
import { DetailsContainer } from '@common/adapters/primaries/components/DetailsContainer';
import { Divider } from '@common/adapters/primaries/components/Divider';
import { InfoContainer } from '@common/adapters/primaries/components/InfoContainer';
import * as utils from '@utils/index';


interface Props {
   
    profile: Profile | undefined;
  }

  
export const LocalProfile = (props: Props) =>  {
    const {t} = useTranslation();

  return (
    <View style={styles.container}>
   
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
     subtitle={props.profile?.region!!}
      />
    </View>
    <Divider />
    <View style={styles.detailsContainer}>
      <InfoContainer
        title={t('txt.filiale')}
        subtitle={""}
      />
     
    </View>
    <Divider />
    <View style={styles.detailsContainer}>
      <InfoContainer title={t('txt.etablissement')} subtitle={' '} />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_container: {
    flexDirection: 'row-reverse',
    height: 60,
  },
  button_container: {
    backgroundColor: utils.colors.primary,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text_container: {
    flex: 3,
    backgroundColor: utils.colors.primary,
    justifyContent: 'center',

    height: '100%',
  },
  txtNext: {
    marginRight: 15,
    fontSize: 15,
    color: utils.colors.textColor,
    fontWeight: '600',
  },
  detailsContainer: {
    height: '15%',
    backgroundColor: utils.colors.white,
  },
});