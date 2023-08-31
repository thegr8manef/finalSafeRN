import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import {ProgressBarCard} from '../../components/ProgressBarCard';
import {StatVisit} from '../../../../domain/entity/statVisit';
import {useTranslation} from 'react-i18next';

interface Props {
  title: string;
  statsVisit: StatVisit | undefined;
}
export const ProgressVisitsStats = (props: Props) => {
  const {t} = useTranslation();
  
  return (
    <View
      style={[
        styles.container,
        {height: props.statsVisit !== undefined ? 200 : 120},
      ]}>
      <View style={styles.header}>
        <Text style={styles.label} testID="Title">
          {props.title}
        </Text>
      </View>
      {props.statsVisit !== undefined ? (
        <View style={styles.content}>

          <View style={styles.item}> 
          <ProgressBarCard
            height={10}
            borderRadius={0}
            label={t('txt.prevention')}
            value={props.statsVisit.visitPrevention * 0.01}
            color={utils.colors.yellow}
            
          />
        </View>  
        <View style={styles.item}>  
          <ProgressBarCard
            height={10}
            borderRadius={0}
            label={t('txt.conformité')}
            value={props.statsVisit.visitConformity * 0.01}
            color={utils.colors.green}
          />
       </View>
        <View style={styles.item}> 
          <ProgressBarCard
            height={10}
            borderRadius={0}
            label={t('txt.hierarchique')}
            value={props.statsVisit.visitHierarchical * 0.01}
            color={utils.colors.blue}
          />
            </View>
          <View style={styles.item}> 
          <ProgressBarCard
            label={t('txt.flash')}
            height={10}
            borderRadius={0}
            value={props.statsVisit.visitFlash * 0.01}
            color={utils.colors.red}
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
    flex: 1,
    justifyContent:"center",
    marginStart: 5,
    marginTop : -30
  },
  contentUndefined: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textNoData: {
    color: utils.colors.gray700,
  },
 item: {marginTop : 5}
});
