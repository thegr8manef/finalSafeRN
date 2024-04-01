import globalStyle from '@styles/globalStyle';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';

interface Props {
  label?: string;
  value?: number;
  color: string;
  indeterminate?: boolean;
  height?: number;
  borderRadius?: number;
  width?: number;
  unfilledColor?: string | undefined;
  visitNumber?: string;
}

export const ProgressBarCard = (props: Props): JSX.Element => (
  <View style={styles.container}>
    <Text testID="Label" style={[globalStyle.fontMedium13Style,{fontWeight:'600',color:'black'}]}>
      {props.label || ''}
    </Text>
    <View style={styles.row}>
      <Progress.Bar
        testID="ProgressBar"
        progress={props.value * 0.01 || 0} // Set a default value for progress
        width={props.width}
        borderWidth={0}
        color={props.color}
        height={props.height}
        borderRadius={props.borderRadius}
        indeterminate={props.indeterminate || false}
        unfilledColor={props.unfilledColor}
      />
      {props.visitNumber && (
        <Text
          style={StyleSheet.flatten([
            globalStyle.fontMedium13Style,
            {
              marginLeft: 12,
              color: 'black',
              fontWeight: '700',
              textAlign: 'right',
            },
          ])}
          testID="visitNumber">
          {props?.visitNumber || 0}
        </Text>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
