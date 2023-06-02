import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import colors from '../../../../../assets/colors';
import {Flash} from '../../../../domain/entity/Flash';
import {useTranslation} from 'react-i18next';
import {HeaderVisite} from '../../components/HeaderVisite';
import CheckBox from '@react-native-community/checkbox';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../../navigation/configuration/navigation.types';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  loadingVisits: boolean;
  errorVisits: string | undefined;
  flash: Flash | undefined;
  LoadFlash: () => void;
}

export const VisitFlashContainer = (props: Props) => {
  const [mount, setMount] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  if (!mount) {
    props.loadingVisits;
  }
  const {t} = useTranslation();

  useEffect(() => {
    setMount(true);
  });
  return (
    <SafeAreaView style={styles.container}>
      <HeaderVisite children={'Observation flash'} />
      <View style={{flex: 1, backgroundColor: colors.gris100}} />
      <View
        style={{
          height: '14%',
          borderTopColor: colors.primary,
          borderTopWidth: 3,
          backgroundColor: colors.gris100,
          flexDirection: 'row',
          marginHorizontal: 16,
        }}>
        <TouchableOpacity
          onPress={console.log('Positive Pressed')}
          style={{flex: 1}}>
          <View style={{flex: 2}}>
            <Image
              source={require('../../../../../assets/img/icn_positive_disabled_blocked.png')}
              style={styles.logoImage1}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: colors.gris300, textAlign: 'center'}}>
              Observation positive
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flex: 0.01,
            backgroundColor: colors.gris300,
            marginVertical: 10,
          }}
        />
        <TouchableOpacity
          onPress={console.log('Negative Pressed')}
          style={{flex: 1}}>
          <View style={{flex: 2}}>
            <Image
              source={require('../../../../../assets/img/icn_negative_disabled.png')}
              style={styles.logoImage2}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: colors.gris300, textAlign: 'center'}}>
              Observation négative
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <Text>Pour corriger l'écart sans risque* :</Text>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: colors.primary, false: colors.gris200}}
            style={{marginTop: 5}}
          />
          <Text
            style={{
              marginTop: 5,
              backgroundColor: '#98FB98',
              width: 320,
              fontSize: 17,
            }}>
            je sais, je peux, j'agis
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox1}
            onValueChange={newValue => setToggleCheckBox1(newValue)}
            tintColors={{true: colors.primary, false: colors.gris200}}
            style={{marginTop: 5}}
          />
          <Text
            style={{
              marginTop: 5,
              backgroundColor: '#FFDAB9',
              width: 320,
              fontSize: 17,
            }}>
            je sais, je ne peux pas,je signale
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={newValue => setToggleCheckBox2(newValue)}
            tintColors={{true: colors.primary, false: colors.gris200}}
            style={{marginTop: 5}}
          />
          <Text
            style={{
              marginTop: 5,
              backgroundColor: '#F08080',
              width: 320,
              fontSize: 17,
            }}>
            Je ne sais pas, je signale
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text>Commentaires*</Text>
          <TouchableOpacity>
            <Image
              source={require('../../../../../assets/img/icn_textarea.png')}
              style={styles.logoImage3}
            />
            <Image
              source={require('../../../../../assets/img/Untitled-1.png')}
              style={styles.logoImage4}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 2, backgroundColor: colors.gris100}}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: '13%',
              fontSize: 18,
              color: 'black',
            }}>
            Aucune Image
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopColor: colors.gris200,
            borderTopWidth: 1,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Pressable onPress={() => props.navigation.navigate('Dashboard')}>
                  <Image
                    style={styles.logoImage5}
                    source={require('../../../../../assets/img/icn_prendre_photo.png')}
                  />
                </Pressable>
              </View>
              <View style={{flex: 1}}>
                <Image
                  style={styles.logoImage5}
                  source={require('../../../../../assets/img/icn_file.png')}
                />
              </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'white'}} />
            <View style={{flex: 1, backgroundColor: 'white'}}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: '13%',
                  fontSize: 18,
                  color: 'black',
                }}>
                Sauvegarder
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoImage1: {
    width: 30,
    height: '50%',
    resizeMode: 'stretch',
    marginTop: '10%',
    alignSelf: 'center',
    tintColor: 'green',
  },
  logoImage2: {
    width: 30,
    height: '50%',
    resizeMode: 'stretch',
    marginTop: '16%',
    alignSelf: 'center',
    tintColor: 'red',
  },
  logoImage3: {
    width: 10,
    height: 10,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: '7%',
  },
  logoImage4: {
    width: '90%',
    height: '40%',
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: '7%',
    marginTop: 3,
  },
  logoImage5: {
    width: 30,
    height: 25,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: '25%',
  },
});
