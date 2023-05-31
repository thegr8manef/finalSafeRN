import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Image} from 'react-native';
import {ButtonPrimary} from '../../../../assets/components/ButtonPrimary';
import colors from '../../../../assets/colors';
import {CardPieChart} from '../components/CardPieChart';
import {CardOne} from '../components/CardOne';
import {CardBarProgress} from '../components/CardBarProgress';
import {CardBarProgressVisites} from '../components/CardBarProgressVisites';
import {Stat} from '../../../domain/entity/Stat';
import {HeaderDashboard} from '../components/HeaderDashboard';

interface Props {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
  LoadStat: () => void;
}

export const DashboardContainer = (props: Props) => {
  const [mount, setMount] = useState(false);
  if (!mount) {
    props.LoadStat();
  }
  useEffect(() => {
    setMount(true);
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header_container}>
        <HeaderDashboard visits={165} dateDebut={'01/01/2023'} dateFinale={'30/05/2023'} labelPerimetre={'DR EIC TESTS'} numberChantier={17}>Tableau de bord</HeaderDashboard>
      </View>
      {props.stat ? (
        <ScrollView style={{flex: 1}}>
          <View
            style={{flex: 1, backgroundColor: '#eaeaea', flexDirection: 'row'}}>
            <CardOne
              textLabels={'Visites'}
              textValues={props.stat?.numberVisits.toString()}
              textHints={''}
              colorText={'black'}
            />
            <CardOne
              textLabels={'Observation'}
              textValues={props.stat?.numberObservation.toString()}
              textHints={
                'Conformes et Positives: ' + props.stat?.HintObservation
              }
              colorText={'black'}
            />
            <CardOne
              textLabels={'Levée des réserves'}
              textValues={props.stat?.numberLeveeDesReserves + '%'}
              textHints={
                'Non conformes et à améliorer: ' + props.stat?.HintLevee
              }
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
              valeurPrevention={(props.stat?.barProgressVisit1 * 0.01).toFixed(
                2,
              )}
              valeurConformite={(props.stat?.barProgressVisit2 * 0.01).toFixed(
                2,
              )}
              valeurHierarchique={(
                props.stat?.barProgressVisit3 * 0.01
              ).toFixed(2)}
              valeurFlash={(props.stat?.barProgressVisit4 * 0.01).toFixed(2)}
            />
            <CardPieChart
              textLabels={
                'CONFORMES ET POSITIVES / NON CONFORMES ET A AMELIORER'
              }
              accessor={'total'}
              PieChartAmeliorerTotal={
                props.stat?.PieChartAmeliorer === undefined
                  ? 0
                  : props.stat.PieChartAmeliorer
              }
              PieChartConformeTotal={
                props.stat?.PieChartConforme === undefined
                  ? 0
                  : props.stat.PieChartConforme
              }
              PieChartNonConformeTotal={
                props.stat?.PieChartNonConforme === undefined
                  ? 0
                  : props.stat.PieChartNonConforme
              }
              PieChartPositivesTotal={
                props.stat?.PieChartPositives === undefined
                  ? 0
                  : props.stat.PieChartPositives
              }
            />
            <CardBarProgress
              textLabels={'PRINCIPEAUX RISQUES'}
              textHint1={'1-Vie du chantier'}
              textHint2={'2-Risques'}
              textHint3={'3-CHUTE DE HAUTEUR'}
              textHint4={'Autres'}
              valueHint1={(props.stat?.barProgressRisque1 * 0.01).toFixed(2)}
              valueHint2={(props.stat?.barProgressRisque2 * 0.01).toFixed(2)}
              valueHint3={(props.stat?.barProgressRisque3 * 0.01).toFixed(2)}
              valueHint4={(props.stat?.barProgressRisque4 * 0.01).toFixed(2)}
            />
          </View>
        </ScrollView>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header_container: {
    flex: 0.4,
    flexDirection: 'row-reverse',
    height: 1,
  },
  button_container: {
    backgroundColor: colors.primary,
    flex: 1,
    height: 50,
  },
  text_container: {
    backgroundColor: colors.primary,
    height: 50,
  },
  logoImage: {
    width: '20%',
    height: '60%',
    resizeMode: 'stretch',
  },
});
