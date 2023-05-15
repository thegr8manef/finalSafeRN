import { Text, View,SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import Header from '../../../assets/components/Header'
import ButtonPrimary from '../../../assets/components/ButtonPrimary'
import colors from '../../../assets/colors'
import styles from './ProfileStyle'
import DetailsContainer from '../../../assets/components/DetailsContainer'
//import { Divider } from "@react-native-material/core";
import InfoContainer from '../../../assets/components/InfoContainer'
import Divider from '../../../assets/components/Divider.js'


export default function ProfileScreen(){ 
    return (
      <SafeAreaView style={{flex:1}}>
    <View style={styles.header_container}>
      <View style={styles.button_container}>
        <ButtonPrimary OnPressCustomized={console.log('pressed')} textButton="suivant"></ButtonPrimary>
        </View>
        <View style={styles.text_container}>
        <Header>Profil</Header>
        </View>
    </View>
    <View style={{flex:0.8}}>
      <DetailsContainer children={'foulen foulani'} children_email={'foulen@test.tn'}></DetailsContainer>
    </View>
     <Divider/>
    <View style={{flex:0.8}}>
      <InfoContainer children_info1={'Régions'} children_info2={'DR EIC TESTS 1'}></InfoContainer>
    </View>
    <Divider/>
    <View style={{flex:0.8}}>
      <InfoContainer children_info1={'Filiales'} children_info2={'DR EIC TESTS 2'}></InfoContainer>
    </View>
    <Divider/>
    <View style={{flex:0.8}}>
      <InfoContainer children_info1={'Etablissements'} children_info2={'DR EIC TESTS 3'}></InfoContainer>
    </View>
    <View style={{flex:2,backgroundColor:'#eaeaea'}}>
    </View>
    </SafeAreaView>
    )
  }