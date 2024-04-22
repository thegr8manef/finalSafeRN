import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TextInput,
  Alert,
  Text,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import {HeaderModal} from '../../../components/HeaderModal';
import {WarringTextView} from '../../../Visit/components/warringTextView';
import {SearchInputAccompanion} from '../../../Visit/components/accompanionsInfo/searchInputAccompanion';
import {TypeSelectionSites} from '../../../components/siteInfo/TypeSelectionSites';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface Props {
  visible: boolean;
  onClose: () => void;
  title: string;
  observation: any[];
  filtedObservations: any[];
  setobservations: (observation: string[]) => void;
  AddNewObservationModal: () => void;
  setObservationTitle: (title: string) => void;
}
export const ObservationModal = (props: Props) => {
  const {t} = useTranslation();
  const [keyword, setKeyword] = useState<string>('');
  const searchObservation = (keyword: string) => {
    setKeyword(keyword);
    const filtedObservations = props.observation?.filter(
      observation => observation.title.indexOf(keyword) !== -1,
    );
    props.setobservations(filtedObservations);
  };
  type ItemProps = {title: string};
  const Item = ({title}: ItemProps) => (
    <Pressable
      style={styles.item}
      onPress={props.AddNewObservationModal}
      onPressIn={() => props.setObservationTitle(title)}>
      <Text style={styles.title_item} numberOfLines={2}>
        {title}
      </Text>
      <Image source={utils.images.btn_ajout} style={styles.btn_ajout} />
    </Pressable>
  );

  return (
    <Modal
      testID="modal"
      animationType="slide"
      transparent={true}
      visible={props.visible}>
      <View style={styles.container}>
        <HeaderModal
          title={props.title}
          leftLabel={t('flash_alert_button')!!}
          onLeftPress={() => props.onClose()}
        />
        <SearchInputAccompanion
          keyword={keyword}
          searchAccompaying={searchObservation}
        />
        <View style={styles.btnFilter}>
          <Text style={styles.textFiletr}> {t('txt.conformité')}</Text>
          <Image
            source={utils.images.filterArrowIcon}
            style={styles.filterIcon}
          />
        </View>
        {props.filtedObservations.length === 0 ? (
          <FlatList
            data={props.observation}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <FlatList
            data={props.filtedObservations}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        )}
        <Pressable
          style={styles.footer}
          onPress={props.AddNewObservationModal}
          onPressIn={() => props.setObservationTitle('')}>
          <Image
            source={utils.images.btn_add_circle}
            style={styles.image_add}
          />
          <Text style={styles.text_add}>
            {t('ajouter_une_nouvelle_observation')}
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
  },
  title: {
    color: utils.colors.gris200,
    fontWeight: '700',
    fontSize: 12,
  },
  textFiletr: {
    color: utils.colors.textColor,
    marginBottom: 5,
  },
  btnFilter: {
    marginEnd: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  filterIcon: {
    width: 15,
    height: 10,
    marginHorizontal: 8,
    top: 7,
    resizeMode: 'stretch',
  },
  footer: {
    backgroundColor: '#f1f1f1',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image_add: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginVertical: -25,
  },
  text_add: {
    fontSize: 15,
    color: utils.colors.black,
    marginVertical: 10,
    fontFamily: utils.fonts.AvenirMedium,
  },
  item: {
    width: '100%',
    padding: 10,

    borderBottomColor: utils.colors.gray90,
    borderTopColor: utils.colors.gray90,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  title_item: {
    color: utils.colors.textColor,
    flex: 1,
    fontFamily: utils.fonts.AvenirMedium,

    paddingEnd: 15,
  },
  btn_ajout: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginEnd: 10,
  },
});
