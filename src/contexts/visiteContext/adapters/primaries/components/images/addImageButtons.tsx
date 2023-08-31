import {
  View,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import { chooseImage, launchCamera } from '@utils/utilsCamera';

interface Props {
  addImage: (image: string) => void;
}

export const AddImageButtons = (props: Props) => {

  const captureImage = async () => {
    launchCamera()
      .then((data) => {
        if (
          data.assets &&
          data.assets.length > 0 &&
          data.assets[0].uri
        )
          props.addImage(data.assets[0].uri);
      })
      .catch((error) => {
        // Handle errors here
      });
  };

  const chooseFile = () => {
    chooseImage()
    .then((data) => {
      if (data.getParts()?.length > 0) {
        props.addImage(data.getParts()[0]?.uri);
      }    
    })
  };

  return (
    <View style={styles.container}>
      <Pressable
        testID="capture-img"
        style={styles.button}
        onPress={captureImage}
        android_ripple={{ color: utils.colors.gris300 }}>
        <Image style={styles.logoImage5} source={utils.images.takePhotoIcon} />
      </Pressable>
      <Pressable
        testID="choose-img"
        style={styles.button}
        onPress={chooseFile}
        android_ripple={{ color: utils.colors.gris300 }}>
        <Image style={styles.logoImage5} source={utils.images.fileIcon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logoImage5: {
    width: 30,
    height: 25,
    marginTop: 10,
    resizeMode: 'stretch',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    padding: 10,
  },
});
