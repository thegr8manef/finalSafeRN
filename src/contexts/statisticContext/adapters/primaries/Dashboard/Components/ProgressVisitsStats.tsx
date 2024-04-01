import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import {ProgressBarCard} from '../../components/ProgressBarCard';
import {StatVisit} from '../../../../domain/entity/statVisit';
import {useTranslation} from 'react-i18next';
import {windowWidth} from '@styles/dimension';

interface Props {
  title: string;
  statsVisit: StatVisit | undefined;
}
export const ProgressVisitsStats = (props: Props) => {
  const {t} = useTranslation();

  let arr = [
    props.statsVisit?.visitFlash,
    props.statsVisit?.visitPrevention,
    props.statsVisit?.visitConformity,
    props.statsVisit?.visitHierarchical,
  ];
  // get total list
  const total = arr.reduce((a, b) => a + b, 0);
  console.log(total);
  console.log((props.statsVisit?.visitFlash * 100) / total);

  return (
    <View
      style={[
        styles.container,
        {height: props.statsVisit !== undefined ? 250 : 120},
      ]}>
      <View style={styles.header}>
        <Text style={styles.label} testID="Title">
          {' ' + props.title}
        </Text>
      </View>
      {total && props.statsVisit !== undefined ? (
        <View style={styles.content}>
          <View style={styles.item}>
            <ProgressBarCard
              height={12}
              width={windowWidth * 0.8}
              borderRadius={0}
              label={t('txt.prevention')}
              value={(props.statsVisit?.visitPrevention * 100) / total}
              color={utils.colors.yellow}
              visitNumber={props.statsVisit.visitPrevention}
            />
          </View>
          <View style={styles.item}>
            <ProgressBarCard
              height={12}
              width={windowWidth * 0.8}
              borderRadius={0}
              label={t('txt.conformité')}
              value={(props.statsVisit.visitConformity * 100) / total}
              color={utils.colors.green}
              visitNumber={props.statsVisit.visitConformity}
            />
          </View>
          <View style={styles.item}>
            <ProgressBarCard
              height={12}
              width={windowWidth * 0.8}
              borderRadius={0}
              label={t('txt.hierarchique')}
              value={(props.statsVisit.visitHierarchical * 100) / total}
              color={utils.colors.blue}
              visitNumber={props.statsVisit.visitHierarchical}
            />
          </View>
          <View style={styles.item}>
            <ProgressBarCard
              label={t('txt.flash')}
              height={12}
              width={windowWidth * 0.8}
              borderRadius={0}
              value={(props.statsVisit.visitFlash * 100) / total}
              color={utils.colors.red}
              visitNumber={props.statsVisit.visitFlash}
            />
          </View>
        </View>
      ) : (
        <View style={styles.contentUndefined}>
          <Text style={styles.textNoData}>{t('txt.no.data')}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    overflow: 'hidden',
    elevation: 2,
    width: '96%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
  },
  header: {
    height: 30,
    marginVertical: 10,
  },
  label: {
    color: 'black',
    fontSize: 13,
    fontFamily: utils.fonts.AvenirHeavy,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginStart: 5,
    marginTop: -30,
  },
  contentUndefined: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textNoData: {
    color: utils.colors.gray700,
  },
  item: {marginTop: 10},
});
