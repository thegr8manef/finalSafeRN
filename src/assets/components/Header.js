import {View, Text,StyleSheet} from 'react-native';

function Header({children}) {

  return (
    <View style={styles.rectangle}>
                <Text style={styles.textCentre}>{children}</Text>
    </View>

  );
}

export default Header;

const styles = StyleSheet.create({
    rectangle :{
        backgroundColor: colors.primary,
        height : 50 ,
        alignItems:'center',
        marginStart:50,
        
       },
       textCentre :{
        fontSize :19,
        paddingTop:10,
        paddingLeft:50,
        fontWeight :'bold',
        color: 'black',
      }

});
