import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import colors from '../../../../assets/colors';
import {ProgressVisitsStats} from './Components/ProgressVisitsStats';
import {Stat} from '../../../domain/entity/Stat';
import {useTranslation} from 'react-i18next';
import {Header} from '../../../../common/adapters/primaries/components/header';
import {GeneralStats} from './Components/generalStats';
import {PieChartObservationStats} from './Components/PieChartObservationStats';
import {ProgressRisksStats} from './Components/ProgressRisksStats';
import {DashboardHeader} from '../components/DashboardHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../../navigation/configuration/navigation.types';
import {StatVisit} from '../../../domain/entity/statVisit';
import {StatObservation} from '../../../domain/entity/statObservation';
import {StatRisk} from '../../../domain/entity/statRisk';
import {Profile} from '../../../../profileContext/domain/entity/profile';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  loading: boolean;
  error: string;
  stat: Stat | undefined;
  profile: Profile | undefined;
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

    if (props.error != undefined) {
      console.log(props.error);
      Alert.alert(t('txt.msg.connection.failed'));
    }
  }, [props.error]);

  return (
    <View style={styles.f1}>
      <Header navigation={props.navigation} title={t('txt.dashboard')} />
      <View style={styles.header}>
        <DashboardHeader
          visits={165}
          dateDebut={'01/01/2023'}
          dateFinale={'30/05/2023'}
          labelPerimetre={props.profile?.region}
          numberChantier={17}
        />
      </View>

      <ScrollView style={styles.f1}>
        <GeneralStats stat={props.stat} />
        <View style={styles.visitContentStats}>
          <ProgressVisitsStats
            title={t('txt.type.visits')}
            statsVisit={props.stat?.statVisit}
          />
          <PieChartObservationStats
            observationStats={props.stat?.statObservation}
            title={t('txt.conform.positive.not.conform.negative')}
            accessor={'total'}
          />
          <ProgressRisksStats
            statsRisk={props.stat?.statRisk}
            title={t('txt.top.risks')}
          />
        </View>
      </ScrollView>

      <ActivityIndicator
        size="large"
        color={colors.primary}
        style={[
          {
            display: props.loading ? 'flex' : 'none',
          },
          styles.indicator,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  header: {
    flexDirection: 'row-reverse',
  },
  visitContentStats: {
    flex: 3,
    backgroundColor: '#eaeaea',
    flexDirection: 'column',
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
  indicator: {
    position: 'absolute',
    margin: '50%',
    top: 180,
  },
});
