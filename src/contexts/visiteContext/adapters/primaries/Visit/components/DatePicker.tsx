import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as utils from '@utils/index';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '@assets/colors';
interface Props {
  date: Date;
  setDate: (date: Date) => void;
}
export const DatePicker = (props: Props) => {
  const [isPickerShow, setIsPickerShow] = useState(false);

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event: any, value: React.SetStateAction<Date>) => {
    props.setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  // Format the date to "7 September 2023"
  const formattedDate = props.date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <View style={styles.container}>
      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <View style={styles.pickedDateContainer}>
          <TouchableOpacity onPress={showPicker} style={{marginTop: 3}}>
            <View style={{flex: 1}}>
              <Image source={utils.images.date_picker} style={styles.Icon} />
            </View>
            <View style={{marginStart: 30}}>
              <Text style={styles.pickedDate}>{formattedDate}</Text>
            </View>
          </TouchableOpacity>
          <Image
            testID="text-area-img"
            source={utils.images.arrow_down}
            style={styles.logoImage3}
          />
          <View testID="divider-img" style={styles.devider} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          themeVariant="light"
          value={props.date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pickedDateContainer: {
    borderRadius: 10,
    width: 250,
    marginStart: 20,
    marginTop: 20,
  },
  pickedDate: {
    fontSize: 14,
    paddingStart: 20,

    fontFamily: utils.fonts.AvenirMedium,
    color: colors.textColor,
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'yellow', // Assuming you want black text color
    backgroundColor: 'yellow',
  },
  Icon: {
    width: 25,
    height: 25,
  },
  logoImage3: {
    width: 11,
    height: 8,
    bottom: 10,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
  },
  logoImage4: {
    width: '100%',
    height: 20,
    marginTop: 2,
  },
  devider: {
    width: 250,
    height: 1,
    backgroundColor: colors.primary,
  },
});
