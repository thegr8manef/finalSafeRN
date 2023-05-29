import React, {PureComponent, ReactNode, useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {ButtonPrimary} from '../../../../assets/components/ButtonPrimary';
import {DetailsContainer} from '../../../../assets/components/DetailsContainer';
import {Divider} from '../../../../assets/components/Divider';
import {Header} from '../../../../assets/components/Header';
import InfoContainer from '../../../../assets/components/InfoContainer';
import colors from '../../../../assets/colors';
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../../../navigation/configuration/navigation.types";
import { Profile } from '../../../domain/entity/profile';
import { User } from '../../../domain/entity/user';
import { useTranslation } from 'react-i18next';

interface Props {
     navigation: StackNavigationProp<StackParamList>;
     profile : Profile | undefined
     loadProfileDetails: (accessToken : string)=> void;
     user : User
    }




  

  export  const ProfileContainer = (props:  Props) => {
    
    const [mounted, setMounted] = useState(false)

    const { t } = useTranslation();


    useEffect(()=>{
      setMounted(true)    
      
    })

    if(!mounted){
      props.loadProfileDetails(props.profile?.accessToken!!)
    }
  
          
        return(
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header_container}>
          <View style={styles.button_container}>
            <ButtonPrimary
              OnPressCustomized={() => console.log('press')}
              textButton={t("txt.next")}
            />
          </View>
          <View style={styles.text_container}>
            <Header>{t('txt.profile')}</Header>
          </View>
        </View>
        <View style={{flex: 0.8}}>
          {props.profile ? 
          <DetailsContainer 
            children={props.profile?.name}
            children_email={props.profile?.email}
          />
          : 
          null
        }
        </View>
        <Divider />
        <View style={{flex: 0.8}}>
          <InfoContainer
            children_info1={t('txt.region')}
            children_info2={props.user == undefined ? "" : props.user.region}
          />
        </View>
        <Divider />
        <View style={{flex: 0.8}}>
          <InfoContainer
            children_info1={t('txt.filiale')}
            children_info2={props.user == undefined ? "" : props.user.function}
          />
        </View>
        <Divider />
        <View style={{flex: 0.8}}>
          <InfoContainer
            children_info1={t('txt.etablissement')}
            children_info2={' '}
          />
        </View>
        <View style={{flex: 2, backgroundColor: '#eaeaea'}} />
      </SafeAreaView>
    )
    
  }


const styles = StyleSheet.create({
  header_container: {
    flex: 0.5,
    flexDirection: 'row-reverse',
    height: 1,
  },
  button_container: {
    backgroundColor: colors.primary,
    flex: 1,
    height: 50,
  },
  text_container: {
    flex: 3,
    backgroundColor: colors.primary,
    height: 50,
  },
});

