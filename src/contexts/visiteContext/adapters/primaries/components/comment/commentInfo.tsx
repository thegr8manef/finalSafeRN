import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { CommentModal } from "./CommentModal";
import * as utils from '@utils/index';
import { useTranslation } from "react-i18next";

interface Props {
  comment: string
  setComment: (comment: string) => void
}
export const CommentInfo = (props: Props) => {
  const { t } = useTranslation();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text>{t('txt.commentaires')} :</Text>
      <Pressable
        testID="comment-input"
        style={styles.button}
        onPress={() => setModalVisible(true)}
        android_ripple={styles.androidRipple}>
        {props.comment.length > 0 ? (
          <Text testID="comment-text" style={styles.commentText}>
            {props.comment}
          </Text>
        ) : (
          <View testID="divider" style={styles.divider} />
        )}
        <Image testID="text-area-img" source={utils.images.textareaIcon} style={styles.logoImage3} />
        <Image testID="divider-img" source={utils.images.dividerIcon} style={styles.logoImage4} />
      </Pressable>
      <CommentModal key={'comment-modal'} visible={modalVisible} onClose={() => setModalVisible(false)}
        comment={props.comment}
        setComment={props.setComment}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    height: 100,
    marginLeft: 25,
    width: '94%'
  },
  androidRipple: {
    color: utils.colors.gris300
  },
  commentText: {
    fontSize: 17
  },
  divider: {
    width: '100%'
  },
  button: {
    width: '100%',
    opacity: 1,
  },
  logoImage3: {
    width: 10,
    height: 10,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: '7%',
  },
  logoImage4: {
    width: '94%',
    height: '40%',
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: '7%',
    marginTop: 3,
  }
});
