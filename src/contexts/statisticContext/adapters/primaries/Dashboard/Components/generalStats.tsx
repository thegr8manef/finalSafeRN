import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NumberCard} from '../../components/NumberCard';
import {Stat} from '../../../../domain/entity/Stat';
import {useTranslation} from 'react-i18next';
import {windowHeight} from '@styles/dimension';
import * as utils from '@utils/index';
interface Props {
  stat: Stat;
}
export const GeneralStats = (props: Props): JSX.Element => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text
          style={[
            styles.text,
            {color: 'black', fontFamily: utils.fonts.AvenirHeavy},
          ]}>
          <Text style={styles.text}>{`${t('txt.my.visits')}`}</Text>
          <Text style={[styles.text, {fontFamily: utils.fonts.AvenirHeavy}]}>
            {props?.visits ?? '-'}
          </Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.text}>{`${t('txt.visites')}: `}</Text>
          <Text style={[styles.text, {fontFamily: utils.fonts.AvenirHeavy}]}>
            {props.stat?.statVisit.visitNumber.toString() != undefined
              ? props.stat?.statVisit.visitNumber.toString()
              : '-'}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-around',
        }}>
        <NumberCard
          label={t('txt.observations')}
          value={
            props.stat?.statObservation.observationNumber.toString() !=
            undefined
              ? props.stat?.statObservation.observationNumber.toString()
              : '-'
          }
          description={
            t('txt.conform.positive') +
            props.stat?.statObservation.hintObservation
          }
          colorText={'black'}
        />
        <NumberCard
          label={t('txt.raised.reserve')}
          value={
            props.stat?.statObservation.leveeDesReservesNumber != undefined
              ? props.stat?.statObservation.leveeDesReservesNumber + '%'
              : '-'
          }
          description={
            t('txt.not.conform.negative') +
            props.stat?.statObservation.hintLevee
          }
          colorText={'green'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignSelf: 'center',
    width: '95%',
    height: windowHeight * 0.2,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-evenly',
    marginTop: 8,
  },
  card: {
    marginTop: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: utils.colors.white,
    elevation: 3,
    height: '20%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    color: utils.colors.black,
    fontFamily: utils.fonts.AvenirMedium,
  },
});
