import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
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
  perimetre?: any;
  sites?: any[];
  period?: string;

  onPerimetrePress?: () => void;
  onSitesPress?: () => void;
  onPeriodPress?: () => void;
}

export const PerimetreModalContent = (props: Props) => {
  const {t} = useTranslation();

  const handleResetFilter = () => {
    props.onClose();
  };

  return (
    <View style={styles.container}>
      <HeaderModal
        title={props.title}
        onRightPress={() => props.onClose()}
        rightLabel={t('txt.appliquer')!!}
        onLeftPress={() => props.onClose()}
        leftLabel={t('txt.annuler')!!}
      />
      <View style={styles.detailsContainer}>
        <InfoContainer
          title={t('txt.region')}
          subtitle={props.perimetre?.rg?.[0]?.ti ?? '-'}
        />
      </View>
      <Divider />
      <View style={styles.detailsContainer}>
        <InfoContainer
          title={t('txt.sas')}
          subtitle={
            props.perimetre?.sas?.length
              ? props.perimetre?.sas?.length + ' ' + t('txt.selected.items')
              : '-'
          }
        />
      </View>
      <Divider />
      <View style={styles.detailsContainer}>
        <InfoContainer
          title={t('txt.etablissement')}
          subtitle={props.perimetre?.etb?.[0]?.ti ?? '-'}
        />
      </View>
      <Divider />
      <BottomFooter
        confirmText={t('txt.reinitialiser.filtres')}
        confirmPress={handleResetFilter}
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
