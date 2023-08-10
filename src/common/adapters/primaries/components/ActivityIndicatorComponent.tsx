import React from 'react';
import * as utils from '../../../../utils';
import {ActivityIndicator} from 'react-native';

interface Props {
  loading: boolean;
}

const ActivityIndicatorComponent: React.FC<Props> = (props: Props) => {
  return (
    <ActivityIndicator
      size="large"
      color={utils.colors.primary}
      animating={props.loading}
    />
  );
};

export default ActivityIndicatorComponent;
