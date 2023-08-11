import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import {ProgressBarCard} from '../../components/ProgressBarCard';
import {StatRisk} from '../../../../domain/entity/statRisk';
import {useTranslation} from 'react-i18next';

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
        {height: props.statsRisk !== undefined ? 200 : 120},
      ]}>
      <View style={styles.header}>
        <Text style={styles.label}>{props.title}</Text>
      </View>
      {props.statsRisk !== undefined ? (
        <View style={styles.content}>
          <ProgressBarCard
            label={'1-Vie du chantier'}
            value={props.statsRisk!.risk0.value! * 0.01}
            color={utils.colors.yellow}
          />

          <ProgressBarCard
            label={'2-' + t('txt.risks')}
            value={props.statsRisk!.risk1.value! * 0.01}
            color={utils.colors.green}
          />

          <ProgressBarCard
            label={'3-CHUTE DE HAUTEUR'}
            value={props.statsRisk!.risk2.value! * 0.01}
            color={utils.colors.blue}
          />

          <ProgressBarCard
            label={t('txt.others')!}
            value={props.statsRisk!.risk3.value! * 0.01}
            color={utils.colors.red}
          />
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
    margin: 10,
    overflow: 'hidden',

    width: '96%',
    backgroundColor: 'white',
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
});
