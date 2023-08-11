import React from 'react';
import * as utils from '@utils/index';
import * as Progress from 'react-native-progress';

interface Props {
  color: string;
  value: any;
  barWidth: any;
}

const ProgressBar: React.FC<Props> = (props: Props) => {
  return (
    <Progress.Bar
      testID="ProgressBar"
      progress={props.value}
      width={props.barWidth}
      borderWidth={0}
      animated={true}
      animationType={'decay'}
      color={props.color}
      height={10}
      borderRadius={0}
    />
  );
};

export default ProgressBar;
