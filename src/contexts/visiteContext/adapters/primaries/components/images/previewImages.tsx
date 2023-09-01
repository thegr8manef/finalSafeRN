import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { Photo } from '@contexts/visiteContext/domain/entity/Photo';

interface Props {
  images: Photo
}
export const PreviewImages = (props: Props) => {
  const { t } = useTranslation();
  const image = props.images;
  return (
    <View style={styles.container}>
      {Object.keys(props.images).length === 0 ? (
        <Text testID='no-image-text' style={styles.textEmpty}>
          {t('txt.aucune.image')}
        </Text>
      ) : (
        <FlatList
          testID='image-flatlist'
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={image}
          renderItem={({ item, index }) => (
            <Image
              testID='img'
              source={{ uri: item.path }}
              key={index}
              style={styles.image}
            />
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: utils.colors.gris100,
    marginBottom: 80
  },
  textEmpty: {
    textAlign: 'center',
    padding: 10
  },
  image: {
    width: 120,
    height: 120,
    margin: 20,
    borderColor: utils.colors.primary,
    borderWidth: 2,
  },
})