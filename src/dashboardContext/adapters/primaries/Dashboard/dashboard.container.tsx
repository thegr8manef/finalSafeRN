import React, { PureComponent, ReactNode, useEffect } from "react";
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {ButtonPrimary} from '../../../../assets/components/ButtonPrimary';
import {DetailsContainer} from '../../../../assets/components/DetailsContainer';
import {Divider} from '../../../../assets/components/Divider';
import {Header} from '../../../../assets/components/Header';
import InfoContainer from '../../../../assets/components/InfoContainer';
import colors from '../../../../assets/colors';
import {CardPieChart} from '../../../../assets/components/CardPieChart';
import {CardOne} from '../../../../assets/components/CardOne';
import {CardBarProgress} from '../../../../assets/components/CardBarProgress';
import {CardBarProgressVisites} from '../../../../assets/components/CardBarProgressVisites';
import {Stat} from '../../../domain/entity/Stat';

interface Props {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
  statFun: () => void;
}

export const DashboardContainer = (props: Props) => {
  useEffect(() => {
    console.log(props.statFun);
  })
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header_container}>
        <View style={styles.button_container}>
          <ButtonPrimary
            OnPressCustomized={() => {
              props.statFun();
            }}
            textButton="suivant"
          />
        </View>
        <View style={styles.text_container}>
          <Header>Profil</Header>
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        <View
          style={{flex: 1, backgroundColor: '#eaeaea', flexDirection: 'row'}}>
          <CardOne
            textLabels={'Visites'}
            textValues={'157'}
            textHints={''}
            colorText={'black'}
          />
          <CardOne
            textLabels={'Observation'}
            textValues={'491'}
            textHints={'Conformes et Positives: 348'}
            colorText={'black'}
          />
          <CardOne
            textLabels={'Levée des réserves'}
            textValues={'72.03%'}
            textHints={'Non conformes et à améliorer: 143'}
            colorText={'green'}
          />
        </View>
        <View
          style={{
            flex: 3,
            backgroundColor: '#eaeaea',
            flexDirection: 'column',
          }}>
          <CardBarProgressVisites
            textHint1={'Prévention'}
            textHint2={'Conformité'}
            textHint3={'Hiérarchique'}
            textHint4={'Flash'}
            textLabels={'TYPE DE VISITES'}
          />
          <CardPieChart
            textLabels={'CONFORMES ET POSITIVES / NON CONFORMES ET A AMELIORER'}
            accessor={'population'}
          />
          <CardBarProgress
            textLabels={'PRINCIPEAUX RISQUES'}
            textHint1={'1-Vie du chantier'}
            textHint2={'2-Risques'}
            textHint3={'3-CHUTE DE HAUTEUR'}
            textHint4={'Autres'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header_container: {
    flex: 0.1,
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
