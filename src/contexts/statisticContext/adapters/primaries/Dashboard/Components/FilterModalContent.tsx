import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';

import {BottomFooter} from '@contexts/visiteContext/adapters/primaries/components/BottomFooter';
import {HeaderModal} from '@contexts/visiteContext/adapters/primaries/components/HeaderModal';
import {Divider} from '@common/adapters/primaries/components/Divider';
import {InfoContainer} from '@common/adapters/primaries/components/InfoContainer';

interface Props {
  visible: boolean;
  onClose: () => void;
  title: string;
  perimetre?: string;
  sites?: any[];
  period?: string;

  onPerimetrePress?: () => void;
  onSitesPress?: () => void;
  onPeriodPress?: () => void;
}

export const FilterModalContent = (props: Props) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <HeaderModal
        title={props.title}
        onRightPress={() => props.onClose()}
        rightLabel={t('txt.appliquer')!!}
        onLeftPress={() => props.onClose()}
        leftLabel={t('txt.annuler')!!}
      />
      <Pressable
        onPress={props.onPerimetrePress}
        style={styles.detailsContainer}>
        <InfoContainer
          title={t('txt.primetre')}
          subtitle={props.perimetre ?? '-'}
        />
      </Pressable>
      <Divider />
      <Pressable onPress={props.onSitesPress} style={styles.detailsContainer}>
        <InfoContainer
          title={t('txt.chantiers')}
          subtitle={
            props.sites?.length
              ? props.sites?.length.toString() + ' ' + t('txt.selected.items')
              : '-'
          }
        />
      </Pressable>
      <Divider />
      <Pressable onPress={props.onPeriodPress} style={styles.detailsContainer}>
        <InfoContainer title={t('txt.period')} subtitle={props.period ?? '-'} />
      </Pressable>
      <Divider />
      <BottomFooter
        confirmText={t('txt.reinitialiser.filtres')}
        confirmPress={() => {
          props.onClose();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
  },
  Non_clickable_container: {
    backgroundColor: 'white',
    pointerEvents: 'none',
  },
  detailsContainer: {
    height: '10%',
    backgroundColor: utils.colors.white,
  },
});
