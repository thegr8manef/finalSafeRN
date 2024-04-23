import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import {BottomFooter} from '@contexts/visiteContext/adapters/primaries/components/BottomFooter';
import {HeaderModal} from '@contexts/visiteContext/adapters/primaries/components/HeaderModal';
import {Divider} from '@common/adapters/primaries/components/Divider';
import {FilterItem} from './SitesModalContent';

interface Props {
  visible: boolean;
  onClose: () => void;
  title: string;
  period?: string;
}

export const PeriodModalContent = (props: Props) => {
  const {t} = useTranslation();

  const handleResetFilter = () => {
    props.onClose();
  };

  const periodList = [
    {
      name: t('txt.yesterday'),
      value: [new Date().setDate(new Date().getDate() - 1), new Date()],
    },
    {
      name: t('txt.seven.days'),
      value: [new Date().setDate(new Date().getDate() - 7), new Date()],
    },
    {
      name: t('txt.thirteen.days'),
      value: [new Date().setDate(new Date().getDate() - 30), new Date()],
    },
    {
      name: t('txt.this.month'),
      value: [new Date().setDate(1), new Date()],
    },
    {
      name: t('txt.last.month'),
      value: [new Date().setMonth(new Date().getMonth() - 1), new Date()],
    },
    // {
    //   name: 'customized',
    // },
  ];

  return (
    <View style={styles.container}>
      <HeaderModal
        title={props.title}
        onRightPress={() => props.onClose()}
        rightLabel={t('txt.appliquer')!!}
        onLeftPress={() => props.onClose()}
        leftLabel={t('txt.annuler')!!}
      />
      <Divider />
      {periodList.map((item, index) => (
        <FilterItem
          key={index}
          item={item}
          onPress={() => {
            console.log('xxx');
          }}
        />
      ))}
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
