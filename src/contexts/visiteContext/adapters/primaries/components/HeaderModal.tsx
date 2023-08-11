import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import * as utils from '@utils/index';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
  children: string;
  onPressCustomizePositive(): void;
  onPressCustomizeNegative(): void;
}
export const HeaderModal = (props: Props) => {
  const {t} = useTranslation();
  return (
    <View>
      <View style={styles.rectangle}>
        <View style={styles.containerButtonRight}>
          <Pressable
            onPress={props.onPressCustomizeNegative}
            android_ripple={{color: utils.colors.gris300}}>
            <Text style={styles.textExtremetyLeft}>{t('txt.annuler')}</Text>
          </Pressable>
        </View>
        <View style={styles.containerButtonCenter}>
          <Text style={styles.textCentre}>{props.children}</Text>
        </View>
        <View style={styles.containerButtonLeft}>
          <Pressable
            onPress={props.onPressCustomizePositive}
            android_ripple={{color: utils.colors.gris300}}>
            <Text style={styles.textExtremetyRight}>{t('txt.valider')}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    height: 50,
    backgroundColor: utils.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCentre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  textExtremetyLeft: {
    fontSize: 14,
    color: 'black',
    marginStart: 5,
  },
  textExtremetyRight: {
    fontSize: 14,
    color: 'black',
    marginEnd: 5,
    textAlign: 'right',
  },
  containerButtonRight: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtonCenter: {
    flex: 4,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtonLeft: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
