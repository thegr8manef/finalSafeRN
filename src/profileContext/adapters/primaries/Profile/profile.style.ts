import * as utils from '@utils/index';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
  },
  header_container: {
    flexDirection: 'row-reverse',
    height: 60,
  },
  button_container: {
    backgroundColor: utils.colors.primary,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text_container: {
    flex: 3,
    backgroundColor: utils.colors.primary,
    justifyContent: 'center',

    height: '100%',
  },
  txtNext: {
    marginRight: 15,
    fontSize: 15,
    color: utils.colors.textColor,
    fontWeight: '600',
  },
  detailsContainer: {
    height: '15%',
    backgroundColor: utils.colors.white,
  },
});

export default styles;
