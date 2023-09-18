import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as utils from '@utils/index';
import { t } from 'i18next';
import { ObservationListItem } from './observationListItem';

interface Props {

}
export const ObservationList = (props: Props) => {
        return (
          <View style={styles.container}>
          <ObservationListItem title={'Observations'} listLenght={0} />
          <ObservationListItem title={'Observations to be lifted'} listLenght={16} />
          </View>
        );
    
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        flexWrap:'nowrap'

    },

});