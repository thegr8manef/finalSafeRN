import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import colors from '../../../../assets/colors';
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
    <SafeAreaView>
      <View style={styles.rectangle}>
        <View style={styles.containerButtonRight}>
          <Pressable
            onPress={props.onPressCustomizeNegative}
            android_ripple={{color: colors.gris300}}>
            <Text testID='cancel-btn' style={styles.textExtremetyLeft}>{t('txt.annuler')}</Text>
          </Pressable>
        </View>
        <View style={styles.containerButtonCenter}>
          <Text testID='header' style={styles.textCentre}>{props.children}</Text>
        </View>
        <View style={styles.containerButtonLeft}>
          <Pressable
            testID='confirm-btn'
            onPress={props.onPressCustomizePositive}
            android_ripple={{color: colors.gris300}}>
            <Text style={styles.textExtremetyRight}>{t('txt.valider')}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    height: 50,
    backgroundColor: colors.primary,
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
