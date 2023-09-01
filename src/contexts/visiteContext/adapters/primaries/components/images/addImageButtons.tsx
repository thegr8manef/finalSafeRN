import {
  View,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import * as utils from '@utils/index';
import { chooseImage, launchCamera } from '@utils/utilsCamera';
import { Photo } from '@contexts/visiteContext/domain/entity/Photo';

interface Props {
  addImage: (image: Photo) => void;
  id_remarque : string;
  id_visits : string;
}

export const AddImageButtons = (props: Props) => {

  function generateID() {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ID = "";
    
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        ID += characters[randomIndex];
      }
      
      if (i < 3) {
        ID += "-";
      }
    }
    
    return ID;
  }

  const captureImage = async () => {
    launchCamera()
      .then((data) => {
        if (
          data.assets &&
          data.assets.length > 0 &&
          data.assets[0].uri
        )
        var image = new Photo( generateID(),data.assets[0].fileName,data.assets[0].uri,props.id_remarque,props.id_visits,false,0,"test-id-formation",false,false,0);
          props.addImage(image!!);
      })
      .catch((error) => {
        // Handle errors here
      });
  };

  const chooseFile = () => {
    chooseImage()
    .then((data) => {
      if (data.getParts()?.length > 0) {
        var image = new Photo( generateID(),data.getParts()[0]?.fileName,data.getParts()[0]?.uri,props.id_remarque,props.id_visits,false,0,"test-id-formation",false,false,0);
        props.addImage(image!!);
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
