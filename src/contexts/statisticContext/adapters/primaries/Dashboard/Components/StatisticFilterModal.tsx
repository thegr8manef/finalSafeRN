import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import {FilterModalContent} from './FilterModalContent';
import {PeriodModalContent} from './PeriodModalContent';
import {PerimetreModalContent} from './PerimetreModalContent';
import {SitesModalContent} from './SitesModalContent';

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

export const StatisticFilterModal = (props: Props) => {
  const {t} = useTranslation();

  const [step, setStep] = useState(0);

  const handleResetFilter = () => {
    props.onClose();
  };

  const handleGoBack = () => {
    setStep(0);
  };

  const handlePerimetrePress = () => {
    setStep(1);
  };

  const handleSitesPress = () => {
    setStep(2);
  };

  const handlePeriodPress = () => {
    setStep(3);
  };

  return (
    <Modal
      testID="modal"
      animationType="slide"
      transparent={true}
      visible={props.visible}>
      <View style={styles.container}>
        {step === 0 ? (
          <FilterModalContent
            {...props}
            onSitesPress={handleSitesPress}
            onPeriodPress={handlePeriodPress}
            onPerimetrePress={handlePerimetrePress}
          />
        ) : null}
        {step === 1 ? (
          <PerimetreModalContent
            {...props}
            title={t('txt.primetre')}
            onClose={handleGoBack}
          />
        ) : null}
        {step === 2 ? (
          <SitesModalContent
            title={t('txt.chantiers')}
            onClose={handleGoBack}
            sites={props?.sites}
          />
        ) : null}
        {step === 3 ? (
          <PeriodModalContent
            title={t('txt.period')}
            onClose={handleGoBack}
          />
        ) : null}
      </View>
    </Modal>
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
