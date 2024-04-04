import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {CommentModal} from './CommentModal';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import colors from '@assets/colors';

interface Props {
  comment: string;
  setComment: (comment: string) => void;
  title: string;
  label: string;
}
export const CommentInfo = (props: Props) => {
  const {t} = useTranslation();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <Pressable testID="comment-input" onPress={() => setModalVisible(true)}>
      <View style={styles.container}>
        <Text>{props.label} :</Text>

        {props.comment.length > 0 && props.comment.length < 40 ? (
          <Text testID="comment-text" style={styles.commentText}>
            {props.comment}
          </Text>
        ) : props.comment.length > 41 ? (
          <Text testID="comment-text" style={styles.commentText}>
            {props.comment.slice(0, 42) + '...'}
          </Text>
        ) : (
          <View testID="divider" style={styles.divider} />
        )}
        <Image
          testID="text-area-img"
          source={utils.images.arrow_down}
          style={styles.logoImage3}
        />
        <View testID="divider-img" style={styles.devider} />

        <CommentModal
          key={'comment-modal'}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          comment={props.comment}
          setComment={props.setComment}
          title={props.title}
          label={props.label}
        />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    height: 100,
    marginLeft: 25,
    width: '94%',
  },

  commentText: {
    fontSize: 14,
    paddingStart: 20,

    fontFamily: utils.fonts.AvenirMedium,
    color: colors.textColor,
  },
  divider: {
    width: '100%',
  },
  button: {
    width: '100%',
    opacity: 1,
  },
  logoImage3: {
    width: 11,
    height: 8,
    bottom: 10,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: 25,
  },
  logoImage4: {
    width: '94%',
    height: '40%',
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: '7%',
    marginTop: 3,
  },
  devider: {
    width: '93%',
    height: 1,

    backgroundColor: colors.primary,
  },
});
