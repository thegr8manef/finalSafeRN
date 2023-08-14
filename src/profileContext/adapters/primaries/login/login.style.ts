import * as utils from '@utils/index';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: utils.colors.white,
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
    backgroundColor: utils.colors.white,
    borderWidth: 0,
  },

  dropDownPickerContainer: {
    width: 125,
    marginTop: 35,
    borderColor: utils.colors.default,
    border: 0,
    backgroundColor: utils.colors.default,
  },

  logoImage: {
    width: '33%',
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
    color: utils.colors.textColor,
  },

  button: {
    bottom: '50%',
    backgroundColor: utils.colors.primary,
    width: 300,
    height: 45,
    justifyContent: 'center',
  },

  btnText: {
    color: utils.colors.textColor,
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
export default styles;
