import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import colors from '../../../../../assets/colors';
import {Flash} from '../../../../domain/entity/Flash';
import {useTranslation} from 'react-i18next';

interface Props {
  loadingVisits: boolean;
  errorVisits: string | undefined;
  flash: Flash | undefined;
  LoadFlash: () => void;
}

export const VisitFlashContainer = (props: Props) => {
  const [mount, setMount] = useState(false);
  if (!mount) {
    props.loadingVisits;
  }
  const {t} = useTranslation();

  useEffect(() => {
    setMount(true);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Flash</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});
