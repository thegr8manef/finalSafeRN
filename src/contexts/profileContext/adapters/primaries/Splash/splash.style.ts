import {StyleSheet} from 'react-native';
import * as utils from '@utils/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: utils.colors.white,
    width: '100%',
    height: '100%',
  },
  container_logo_splash: {
    flex: 3,
    alignItems: 'center',
  },
  logo_splash: {
    marginTop: 110,
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  logo_eiffage: {
    width: 130,
    height: 40,
    resizeMode: 'stretch',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  progressContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  container_squares_splash_img: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
  },
  squares_splash_img: {
    width: 20,
    height: 100,
    resizeMode: 'stretch',
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  txtSynchro: {
    fontSize: 13,
    marginTop: 5,
  },
});
export default styles;
