import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'

function DetailsContainer ({children,children_email}) {
    return (
      <View style={styles.container}>
        <View style={styles.container_text}>
            <Text style={styles.text_full_name}>{children}</Text>
        </View>
        <View style={styles.container_text}>
            <Text style={styles.text_email}>{children_email}</Text>
        </View>
      </View>
  );
}

export default DetailsContainer;

const styles = StyleSheet.create({
container:{
    flex:1,
    width:'100%',
},
container_text:{
    flex:1,
    marginTop:20,
    marginStart:20,
alignSelf:'flex-start',
},
text_full_name:{
    color:'black',
    fontSize :17,
    fontWeight:'bold'
},
text_email:{
    color:'grey',
    fontSize :12
}

});