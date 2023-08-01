import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../../assets/colors';
import {CardPieChart} from '../components/CardPieChart';
import {CardOne} from '../components/CardOne';
import {CardBarProgress} from '../components/CardBarProgress';
import {CardBarProgressVisites} from '../components/CardBarProgressVisites';
import {Stat} from '../../../domain/entity/Stat';
import {HeaderDashboard} from '../components/HeaderDashboard';
import {useTranslation} from 'react-i18next';
import {Header} from '../../../../common/adapters/primaries/components/header';

interface Props {
  navigation: any;
  loading: boolean;
  error: string | undefined;
  stat: Stat | undefined;
  connectionStatus: boolean | undefined;
  loadRemoteStats: () => void;
  loadLocalStats: () => void;
}

export const DashboardContainer = (props: Props) => {
  const [mount, setMount] = useState(false);
  const {t} = useTranslation();

  if (!mount) {
    if (props.connectionStatus === true) {
      props.loadRemoteStats();
    }
    if (props.connectionStatus === false) {
      props.loadLocalStats();
    }
  }

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header navigation={props.navigation} title={t('txt.dashboard')} />
      <View style={styles.header_container}>
        <HeaderDashboard
          navigation={props.navigation}
          visits={165}
          dateDebut={'01/01/2023'}
          dateFinale={'30/05/2023'}
          labelPerimetre={''}
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
              textValues={props.stat?.statVisit.visitNumber.toString()}
              textHints={''}
              colorText={'black'}
            />
            <CardOne
              textLabels={t('txt.observations')}
              textValues={props.stat?.statObservation.observationNumber.toString()}
              textHints={
                t('txt.conform.positive') + props.stat?.statObservation.hintObservation
              }
              colorText={'black'}
            />
            <CardOne
              textLabels={t('txt.raised.reserve')}
              textValues={props.stat?.statObservation.leveeDesReservesNumber + '%'}
              textHints={t('txt.not.conform.negative') + props.stat?.statObservation.hintLevee}
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
              valeurPrevention={props.stat?.statVisit.visitPrevention * 0.01}
              valeurConformite={props.stat?.statVisit.visitConformity * 0.01}
              valeurHierarchique={props.stat?.statVisit.visitHierarchical * 0.01}
              valeurFlash={props.stat?.statVisit.visitFlash * 0.01}
            />
            <CardPieChart
              textLabels={t('txt.conform.positive.not.conform.negative')}
              accessor={'total'}
              PieChartAmeliorerTotal={
                props.stat?.statObservation.observationAmeliorer === undefined
                  ? 0
                  : props.stat.statObservation.observationAmeliorer
              }
              PieChartConformeTotal={
                props.stat?.statObservation.observationConforme === undefined
                  ? 0
                  : props.stat.statObservation.observationConforme
              }
              PieChartNonConformeTotal={
                props.stat?.statObservation.observationNomConforme === undefined
                  ? 0
                  : props.stat.statObservation.observationNomConforme
              }
              PieChartPositivesTotal={
                props.stat?.statObservation.observationPositive === undefined
                  ? 0
                  : props.stat.statObservation.observationPositive
              }
            />
            <CardBarProgress
              textLabels={t('txt.top.risks')}
              textHint1={'1-Vie du chantier'}
              textHint2={'2-' + t('txt.risks')}
              textHint3={'3-CHUTE DE HAUTEUR'}
              textHint4={t('txt.others')}
              valueHint1={props.stat?.statRisk.risk0.value  ? props.stat?.statRisk.risk0.value* 0.01 : 0}
              valueHint2={props.stat?.statRisk.risk1.value ?  props.stat?.statRisk.risk1.value * 0.01 : 0}
              valueHint3={props.stat?.statRisk.risk2.value ? props.stat?.statRisk.risk2.value* 0.01 : 0}
              valueHint4={props.stat?.statRisk.risk3.value ?  props.stat?.statRisk.risk3.value* 0.01 : 0}
            />
          </View>
        </ScrollView>
      ) : (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={{display: props.loading ? 'flex' : 'none'}}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row-reverse',
    height: '20%',
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
