import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';

interface Props {
  label?: string;
  value?: number;
  color: string;
  indeterminate: boolean;
  height: number;
  borderRadius: number;
  width: number;
  unfilledColor?: string | undefined;
}

const barWidth = Dimensions.get('window').width / 1.1;

export const ProgressBarCard = (props: Props): JSX.Element => (
  <View>
    <Text testID="Label">{props.label || ''}</Text>
    <Progress.Bar
      testID="ProgressBar"
      progress={props.value || 0} // Set a default value for progress
      width={props.width || barWidth}
      borderWidth={0}
      animated={true}
      animationType={'decay'}
      color={props.color}
      height={props.height}
      borderRadius={props.borderRadius}
      indeterminate={props.indeterminate || false}
      unfilledColor={props.unfilledColor}
    />
  </View>
);
