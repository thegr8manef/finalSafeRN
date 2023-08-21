import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import globalStyle from '@styles/globalStyle';

interface Props {
  onPressButton?: () => void;
  style?: any;
  buttonColor?: string;
  width?: string;
  height?: number;
  textButton?: any;
  borderWidth?: number;
  borderColor?: string;
  buttonText?: boolean;
  titleStyle?: any;
  borderRadius?: number;
}

export const ButtonComponent = (props: Props): JSX.Element => {

  return (
    <TouchableOpacity
      onPress={props.onPressButton}
      style={[
        props.style,
        {
          backgroundColor: props.buttonColor,
          width: props.width,
          padding: 5,
          height: props.height,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          borderRadius: props.borderRadius,
        },
      ]} >
      <Text style={[globalStyle.fontMediumDark14Style, props.titleStyle]}>{props.textButton}</Text>
    </TouchableOpacity>
  );
};


export default ButtonComponent;
