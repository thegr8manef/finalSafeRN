import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ProgressBarAndroid,
} from 'react-native';
import colors from '../../../../assets/colors';
import {CardPieChart} from '../components/CardPieChart';
import {CardOne} from '../components/CardOne';
import {CardBarProgress} from '../components/CardBarProgress';
import {CardBarProgressVisites} from '../components/CardBarProgressVisites';
import {Stat} from '../../../domain/entity/Stat';
import {HeaderDashboard} from '../components/HeaderDashboard';
import {User} from '../../../../profileContext/domain/entity/user';
import {t} from 'i18next';

interface Props {
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
  user: User;
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
        <HeaderDashboard
          visits={165}
          dateDebut={'01/01/2023'}
          dateFinale={'30/05/2023'}
          labelPerimetre={props.user == undefined ? '' : props.user.function}
          numberChantier={17}>
          Tableau de bord
        </HeaderDashboard>
      </View>
      {props.stat ? (
        <ScrollView style={{flex: 1}}>
          <View
            style={{flex: 1, backgroundColor: '#eaeaea', flexDirection: 'row'}}>
            <CardOne
              textLabels={t('txt.visites')}
              textValues={props.stat?.numberVisits.toString()}
              textHints={''}
              colorText={'black'}
            />
            <CardOne
              textLabels={t('txt.observations')}
              textValues={props.stat?.numberObservation.toString()}
              textHints={
                t('txt.conform.positive') + props.stat?.HintObservation
              }
              colorText={'black'}
            />
            <CardOne
              textLabels={t('txt.raised.reserve')}
              textValues={props.stat?.numberLeveeDesReserves + '%'}
              textHints={t('txt.not.conform.negative') + props.stat?.HintLevee}
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
              textHint1={t('txt.prevention')}
              textHint2={t('txt.conformité')}
              textHint3={t('txt.hierarchique')}
              textHint4={t('txt.flash')}
              textLabels={t('txt.type.visits')}
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
              textLabels={t('txt.conform.positive.not.conform.negative')}
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
              textLabels={t('txt.top.risks')}
              textHint1={'1-Vie du chantier'}
              textHint2={'2-' + t('txt.risks')}
              textHint3={'3-CHUTE DE HAUTEUR'}
              textHint4={t('txt.others')}
              valueHint1={(props.stat?.barProgressRisque1 * 0.01).toFixed(2)}
              valueHint2={(props.stat?.barProgressRisque2 * 0.01).toFixed(2)}
              valueHint3={(props.stat?.barProgressRisque3 * 0.01).toFixed(2)}
              valueHint4={(props.stat?.barProgressRisque4 * 0.01).toFixed(2)}
            />
          </View>
        </ScrollView>
      ) : (
        <ProgressBarAndroid color="#fed73e" />
      )}
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
