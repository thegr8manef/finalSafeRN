import React, {PureComponent, ReactNode} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {ButtonPrimary} from '../../../../assets/components/ButtonPrimary';
import {DetailsContainer} from '../../../../assets/components/DetailsContainer';
import {Divider} from '../../../../assets/components/Divider';
import {Header} from '../../../../assets/components/Header';
import InfoContainer from '../../../../assets/components/InfoContainer';
import colors from '../../../../assets/colors';
import { RouteProp } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../../../navigation/configuration/navigation.types";
import { Profile } from '../../../domain/entity/profile';

interface Props {
     navigation: StackNavigationProp<StackParamList>;
     profile : Profile | undefined

    }


export class ProfileContainer extends PureComponent<Props> {
  


  

  render(): ReactNode {

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header_container}>
          <View style={styles.button_container}>
            <ButtonPrimary
              OnPressCustomized={() => console.log('press')}
              textButton="suivant"
            />
          </View>
          <View style={styles.text_container}>
            <Header>Profil</Header>
          </View>
        </View>
        <View style={{flex: 0.8}}>
          {this.props.profile ? 
          <DetailsContainer 
            children={this.props.profile?.name}
            children_email={this.props.profile?.email}
          />
          : 
          null
        }
        </View>
        <Divider />
        <View style={{flex: 0.8}}>
          <InfoContainer
            children_info1={'Régions'}
            children_info2={'DR EIC TESTS 1'}
          />
        </View>
        <Divider />
        <View style={{flex: 0.8}}>
          <InfoContainer
            children_info1={'Filiales'}
            children_info2={'DR EIC TESTS 2'}
          />
        </View>
        <Divider />
        <View style={{flex: 0.8}}>
          <InfoContainer
            children_info1={'Etablissements'}
            children_info2={'DR EIC TESTS 3'}
          />
        </View>
        <View style={{flex: 2, backgroundColor: '#eaeaea'}} />
      </SafeAreaView>
    );
  }
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

