import React from 'react';
import * as utils from '@utils/index';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {t} from 'i18next';
import {Accompagnants} from '@contexts/visiteContext/domain/entity/Accompagnant';
interface Props {
  selectAccompanions: Accompagnants[] | undefined;
  ShowListAccompanions: () => void;
}
export const AccompanionsInput = (props: Props) => {
  return (
    <Pressable
      onPress={props.ShowListAccompanions}
      style={styles.ContainerInput}>
      {props.selectAccompanions?.length === 0 ? (
        <View style={styles.InputTextView}>
          <Text style={styles.InputText}>
            {t('txt.selectionnez.accompagnat')}
          </Text>
        </View>
      ) : (
        <View style={styles.InputTextView}>
          <Text style={styles.InputText}>
            {/* {props.selectAccompanions?.join(', ')} */}
            {props.selectAccompanions?.map(acc => acc.fn + ' ' + acc.ln + ', ')}
          </Text>
        </View>
      )}
      <View style={styles.InputIconView}>
        <Image style={styles.Icon} source={utils.images.arrow_right}></Image>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ContainerInput: {
    height: 50,
    borderColor: utils.colors.primary,
    borderWidth: 2,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
  },
  InputTextView: {
    flex: 2,
    marginStart: 10,
  },
  Icon: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
  },
  InputText: {
    fontSize: 14,

    fontFamily: utils.fonts.AvenirMedium,
    color: utils.colors.textColor,
  },
  InputIconView: {
    flex: 0.1,
    marginEnd: 10,
  },
});
