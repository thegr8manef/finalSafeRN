import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        width: '100%',
        height: '100%',
      },
      logo_splash: {
        marginTop:110,
        width: 200,
        height: 200,
        resizeMode: 'stretch',
      },
      statusBar: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.primary,
      },
      logo_eiffage: {
    
        width: 130,
        height: 40,
        resizeMode: 'stretch',
        alignSelf:'center',
        justifyContent:'flex-end'
      },
      squares_splash:{
        flex:0.2,
        backgroundColor:'green',
        alignSelf:'flex-end',
        position:'absolute',
        justifyContent:'flex-end',
        alignItems:'flex-end'

      },
      squares_splash_img:{
        width: 20,
        height: 100,
        resizeMode: 'stretch',
        position:'absolute',
        backgroundColor:'green',
        alignSelf:'flex-end',
        position:'absolute',
        justifyContent:'flex-end',
        alignItems:'flex-end'
      }
});
