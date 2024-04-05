import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import {ProgressBarCard} from '../../components/ProgressBarCard';
import {StatRisk} from '../../../../domain/entity/statRisk';
import {useTranslation} from 'react-i18next';
import {windowWidth} from '@styles/dimension';

interface Props {
  title: string;
  statsRisk: StatRisk | undefined;
}

export const ProgressRisksStats = (props: Props) => {
  const {t} = useTranslation();
  return (
    <View
      style={[
        styles.container,
      ]}>
      <View style={styles.header}>
        <Text style={styles.label}>{props.title}</Text>
      </View>
      {props.statsRisk !== undefined ? (
        <View style={styles.content}>
          <View style={styles.item}>
            <ProgressBarCard
              width={windowWidth * 0.75}
              label={'1 - Vie du chantier (préparation, organisation,...)'}
              value={props?.statsRisk?.risk0?.value}
              color={utils.colors.red200}
              visitNumber={props.statsRisk.risk0.value!+"%"}
              unfilledColor='#f0f0f0'
            />
          </View>
          <View style={styles.item}>
            <ProgressBarCard
              width={windowWidth * 0.75}
              label={'2 - CHUTE DE HAUTEUR' + ' (y compris déplacements v...)'}
              value={props.statsRisk?.risk1?.value}
              color={utils.colors.blue200}
              visitNumber={props.statsRisk.risk1.value!+"%"}
              unfilledColor='#f0f0f0'
            />
          </View>
          <View style={styles.item}>
            <ProgressBarCard
              width={windowWidth * 0.75}
              label={'3 - ' + t('txt.risks') + ' (ne pas sélectioner)'}
              value={props.statsRisk!.risk2.value}
              color={utils.colors.orange}
              visitNumber={props.statsRisk.risk2.value!+"%"}
              unfilledColor='#f0f0f0'
            />
          </View>
          <View style={styles.item}>
            <ProgressBarCard
              width={windowWidth * 0.75}
              label={t('txt.others')!}
              value={props.statsRisk!.risk3.value!}
              color={utils.colors.gray700}
              visitNumber={props.statsRisk.risk3.value!+"%"}
              unfilledColor='#f0f0f0'
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
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'white',
    alignItems:'center'
  },
  header: {
    marginTop: 5,
    marginStart: 5,
  },
  label: {
    textAlign: 'left',
    fontWeight: '700',
    color: 'black',
    fontSize: 12,
    marginTop: 10,
    marginLeft: 5,
  },
  content: {
    flex: 5,
    marginStart: 5,
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
