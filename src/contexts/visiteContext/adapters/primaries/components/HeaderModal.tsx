import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import * as utils from '@utils/index'; // Import utility functions
import globalStyle from '@styles/globalStyle'; // Import global styles
import { flexBoxStyle } from '@styles/flexBoxStyle'; // Import flexbox styles

// Define the expected props for the HeaderModal component
interface Props {
  title: string; // Header title
  onRightPress?: () => void; // Function to handle the press of a right button (optional)
  onLeftPress?: () => void; // Function to handle the press of a left button (optional)
  leftLabel?: string; // Label for the left button
  rightLabel?: string; // Label for the right button (optional)
  rightIcon?: ImageSourcePropType[]; // Array of images/icons for the right buttons (optional)
  leftIcon?: ImageSourcePropType[]; // Array of images/icons for the left buttons (optional)
  onRightIconPress?: (index: number) => void; // Function to handle the press of an icon button (optional)
  onLeftIconPress?: (index: number) => void; // Function to handle the press of an icon button (optional)

}

// Define the HeaderModal component
export const HeaderModal = (props: Props) => {
  // Helper function to render the content on the right side of the header
  const renderRightContent = () => {
    if (props.rightIcon) {
      // If there are right icons, render them
      return (
        <View style={flexBoxStyle.flexRow}>
          {props.rightIcon.map((icons: ImageSourcePropType, index: number) => (
            <Pressable
              key={index}
              testID='header-modal-right-button'
              onPress={() => props.onRightIconPress && props.onRightIconPress(index)}
              android_ripple={styles.androidRipple}>
              <Image source={icons} style={globalStyle.defaultImageStyle} />
            </Pressable>
          ))}
        </View>
      );
    } else if (props.rightLabel) {
      // If there is a right label, render it
      return (
        <Pressable
          testID='header-modal-right-button'
          onPress={props.onRightPress}
          android_ripple={styles.androidRipple}>
          <Text style={globalStyle.fontBoldDark15Style}>{props.rightLabel}</Text>
        </Pressable>
      );
    }

    return null; // Return null if there is no left content to render
  };
  const renderLeftContent = () => {
    if (props.leftIcon) {
      // If there are left icons, render them
      return (
        <View style={flexBoxStyle.flexRow}>
          {props.leftIcon.map((icons: ImageSourcePropType, index: number) => (
            <Pressable
              key={index}
              testID='header-modal-left-button'
              onPress={() => props.onLeftIconPress && props.onLeftIconPress(index)}
              android_ripple={styles.androidRipple}>
              <Image source={icons} style={globalStyle.defaultImageStyle} />
            </Pressable>
          ))}
        </View>
      );
    } else if (props.leftLabel) {
      // If there is a left label, render it
      return (
        <Pressable
          testID='header-modal-left-button'
          onPress={props.onLeftPress}
          android_ripple={styles.androidRipple}>
          <Text style={globalStyle.fontBoldDark15Style}>{props.leftLabel}</Text>
        </Pressable>
      );
    }

    return null; // Return null if there is no right content to render
  };
  // Render the HeaderModal component
  return (
    <View style={[flexBoxStyle.flexRowCenterSpace, styles.container, flexBoxStyle.p1]}>
      {/*<View>
         <Pressable
          testID='header-modal-left-button'
          onPress={props.onLeftPress}
          android_ripple={styles.androidRipple}>
          <Text style={globalStyle.fontBoldDark15Style}>{props.leftLabel}</Text>
        </Pressable>
      </View> */}
        <View>{renderLeftContent()}</View>
      <View>
        <Text style={globalStyle.fontBoldDark15Style}>{props.title}</Text>
      </View>
      <View>{renderRightContent()}</View>
    </View>
  );
};

// Define styles for the HeaderModal component
const styles = StyleSheet.create({
  androidRipple: {
    color: utils.colors.gris300, // Ripple effect color
  },
  container: {
    height: 50, // Header container height
    backgroundColor: utils.colors.primary, // Header background color
  },
});
