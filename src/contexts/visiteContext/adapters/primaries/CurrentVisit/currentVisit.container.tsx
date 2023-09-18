import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as utils from '@utils/index';
import { Collapse } from './Components/CollapseView/collapse';
import { ObservationList } from './Components/ListObservation/observationList';
interface Props {

}
export const CurrentVisitContainer = (props: Props) => {
        return (
          <View style={styles.container}>
            <Collapse />
            <ObservationList />
          </View>
        );
    
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
    },

});