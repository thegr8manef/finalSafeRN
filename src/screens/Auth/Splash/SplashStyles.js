import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        width: '100%',
        height: '100%',
      },
      container_logo_splash:{
        flex: 3,
        alignItems: 'center'
      },
      logo_splash: {
        marginTop:110,
        width: 200,
        height: 200,
        resizeMode: 'stretch',
      },
      logo_eiffage: {
        width: 130,
        height: 40,
        resizeMode: 'stretch',
        alignSelf:'center',
        justifyContent:'flex-end',
      },
      container_squares_splash_img:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding:5
      },
      squares_splash_img:{
        width: 20,
        height: 100,
        resizeMode: 'stretch',
        position:'absolute',
        alignSelf:'flex-end',
        position:'absolute',
        justifyContent:'flex-end',
        alignItems:'flex-end'
      }
});
