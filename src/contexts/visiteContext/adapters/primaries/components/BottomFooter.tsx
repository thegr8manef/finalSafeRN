import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import globalStyle from '@styles/globalStyle';
import {flexBoxStyle} from '@styles/flexBoxStyle';
import * as utils from '@utils/index';

// Define the type for individual content items in the footer.
interface ContentItem {
  type: 'image' | 'text';
  source?: ImageSourcePropType;
  text?: string;
  onPress?: () => void;
  contentText?: string;
}

// Define the props for the BottomFooter component.
interface Props {
  content?: ContentItem[]; // Array of content items to render.
  confirmText: string; // Text for the confirmation button.
  confirmPress: (params?: any) => void; // Function to handle the confirmation button press.
}

export const BottomFooter = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={flexBoxStyle.flexRowCenterAlign}>
        {props.content?.map((item, index) => (
          <View key={index} style={flexBoxStyle.mL1}>
            {/* Render an image if the content type is "image" */}
            {item.type === 'image' && item.source && (
              <Pressable
                testID="choose-img"
                onPress={item.onPress}
                android_ripple={{color: utils.colors.gris300}}>
                <Image
                  source={item.source}
                  style={globalStyle.defaultImageStyle}
                />
              </Pressable>
            )}
            {/* Render text if the content type is "text" */}
            {item.type === 'text' && item.text && (
              <Pressable onPress={item.onPress}>
                <Text style={globalStyle.fontBoldDark15Style}>{item.text}</Text>
              </Pressable>
            )}
          </View>
        ))}
        {/* Container for the confirmation button */}
        <View
          style={[
            globalStyle.containerStyle,
            flexBoxStyle.flexEnd,
            flexBoxStyle.m2,
          ]}>
          <Pressable
            testID="save-btn"
            android_ripple={globalStyle.androidRipple}
            onPress={props.confirmPress}>
            <Text style={globalStyle.fontMediumDark15Style}>
              {props.confirmText}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: utils.colors.griy500,
    borderTopColor: utils.colors.gris200,
    borderTopWidth: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
