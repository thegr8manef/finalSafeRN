import {Site} from '@contexts/visiteContext/domain/entity/Site';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as utils from '@utils/index';
interface Props {
  sites: Site[] | undefined;
  onSelect: (site: Site) => void;
}
export const SearchResultSites = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState<Site | undefined>(undefined);
  const {t} = useTranslation();
  const handleSelect = (site: Site) => {
    if (site !== undefined) {
      setSelectedItem(site);
      props.onSelect(site);
    }
  };

  const renderItem = ({item}: {item: Site}) => {
    return (
      <TouchableOpacity onPress={() => handleSelect(item)} style={styles.item}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end', alignSelf: 'center'}}>
          {selectedItem?.id == item.id && (
            <Image source={utils.images.checkmarkIcon} style={styles.image} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {props.sites !== undefined ? (
        <FlatList
          data={props.sites}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text style={styles.no_Site_text}>{t('msg.no.cs.is.affected')}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    width: '100%',
    borderBottomColor: utils.colors.gray90,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: utils.colors.black,
  },
  address: {
    color: utils.colors.gray700,
  },
  image: {
    width: 30,
    height: 30,
  },
  no_Site_text: {
    marginTop: '25%',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: utils.colors.gris300,
  },
});
