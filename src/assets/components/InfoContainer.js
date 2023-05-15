import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'

function InfoContainer ({children_info1,children_info2}) {
    return (
      <View style={styles.container}>
        <View style={styles.container_text}>
            <Text style={styles.text_title}>{children_info1}</Text>
        </View>
        <View style={styles.container_text}>
            <Text style={styles.text_info}>{children_info2}</Text>
        </View>
      </View>
  );
}

export default InfoContainer;

const styles = StyleSheet.create({
container:{
    width:'100%',
    height:'100%'
},
container_text:{
    marginStart:20,
    marginTop: 20,
},
text_info:{
    color:'black',
    fontSize :17,
    fontWeight:'bold'
},
text_title:{
    color:'grey',
    fontSize :13
}

});