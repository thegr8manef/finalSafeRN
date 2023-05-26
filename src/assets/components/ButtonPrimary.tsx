import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../colors';
interface Props {
  textButton: string;
  OnPressCustomized: () => void;
}
export const ButtonPrimary = (props: Props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={() => props.OnPressCustomized()}
        android_ripple={{color: '#ababab'}}>
        <Text style={styles.buttomText}>{props.textButton}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttomText: {
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
