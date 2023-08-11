import React from 'react';
import {View} from 'react-native';
import {NumberCard} from '../../components/NumberCard';
import {Stat} from '../../../../domain/entity/Stat';
import {useTranslation} from 'react-i18next';
interface Props {
  stat: Stat;
}
export const GeneralStats = (props: Props): JSX.Element => {
  const {t} = useTranslation();
  return (
    <View style={{flex: 1, backgroundColor: '#eaeaea', flexDirection: 'row'}}>
      <NumberCard
        label={t('txt.visites')}
        value={
          props.stat?.statVisit.visitNumber.toString() != undefined
            ? props.stat?.statVisit.visitNumber.toString()
            : '-'
        }
        descriptipn={''}
        colorText={'black'}
      />
      <NumberCard
        label={t('txt.observations')}
        value={
          props.stat?.statObservation.observationNumber.toString() != undefined
            ? props.stat?.statObservation.observationNumber.toString()
            : '-'
        }
        descriptipn={
          t('txt.conform.positive') +
          props.stat?.statObservation.hintObservation
        }
        colorText={'black'}
      />
      <NumberCard
        label={t('txt.raised.reserve')}
        value={
          props.stat?.statObservation.leveeDesReservesNumber != undefined
            ? props.stat?.statObservation.leveeDesReservesNumber + '%'
            : '-'
        }
        descriptipn={
          t('txt.not.conform.negative') + props.stat?.statObservation.hintLevee
        }
        colorText={'green'}
      />
    </View>
  );
};
