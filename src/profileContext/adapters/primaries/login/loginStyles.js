import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  languageContainer: {
    flex: 0.2,
    zIndex: 1,
    alignItems: 'flex-end',

    marginTop: 20,
    marginRight: 10,
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  bottomContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  dropDownPicker: {
    backgroundColor: colors.default,
    borderWidth: 0,
  },

  dropDownPickerContainer: {
    width: 125,
    borderColor: colors.default,
    border: 0,
    backgroundColor: colors.default,
  },

  logoImage: {
    width: '30%',
    height: '30%',
    resizeMode: 'stretch',
  },
  description: {
    textAlign: 'center',
    marginTop: '15%',
    fontWeight: '400',
    width: '90%',
    fontSize: 15,
    lineHeight: 23,
    color: colors.textColor,
  },

  button: {
    bottom: '50%',
    backgroundColor: colors.primary,
    width: 300,
    height: 45,
    justifyContent: 'center',
  },

  btnText: {
    color: colors.textColor,
    textAlign: 'center',
    fontWeight: '600',
  },
  eiffageLogo: {
    width: 130,
    resizeMode: 'stretch',
    height: 40,
    marginBottom: 30,
  },
});
