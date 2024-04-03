import globalStyle from '@styles/globalStyle';
import React from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

interface CustomAddNewVisitProps {
  title: string;
  icon: any; // You might need to specify the correct type for the icon,
  testID?: string;
  screenToNavigate: string;
  onPrees: () => void;
}

export const CustomAddNewVisit: React.FC<CustomAddNewVisitProps> = ({
  title,
  icon,
  testID,
  onPrees,
}) => {
  return (
    <TouchableOpacity onPress={onPrees} style={styles.visitContatiner}>
      <Image testID={testID} source={icon} style={styles.visitImageStyle} />
      <Text style={globalStyle.fontMediumDark15Style}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  visitContatiner: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  visitImageStyle: {
    width: '65%',
    height: '65%',
    resizeMode: 'contain',
  },
});
