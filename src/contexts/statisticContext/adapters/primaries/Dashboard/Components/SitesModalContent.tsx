import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';

import {BottomFooter} from '@contexts/visiteContext/adapters/primaries/components/BottomFooter';
import {HeaderModal} from '@contexts/visiteContext/adapters/primaries/components/HeaderModal';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import {SearchInputSite} from '@contexts/visiteContext/adapters/primaries/components/siteInfo/searchInputSite';
import {windowHeight} from '@styles/dimension';
import {map} from 'rxjs/operators';
import {Divider} from '@common/adapters/primaries/components/Divider';

interface Props {
  visible: boolean;
  onClose: () => void;
  title: string;
  perimetre?: string;
  sites?: any[];
  period?: string;

  onPerimetrePress?: () => void;
  onSitesPress?: () => void;
  onPeriodPress?: () => void;
}

export const SitesModalContent = (props: Props) => {
  const {t} = useTranslation();

  const handleResetFilter = () => {};

  const [filtredSites, setFiltredSites] = useState(props.sites);
  const [selectedSites, setSelectedSites] = useState(props.sites);

  const handleSelect = (site: Site | undefined) => {
    if (site) {
      if (selectedSites.includes(site)) {
        setSelectedSites(selectedSites.filter(s => s.id !== site.id));
      } else {
        setSelectedSites([...selectedSites, site]);
      }
    }
  };

  //handle filter sites by keywords
  const searchSites = (keyword: string) => {
    if (keyword === '') {
      setFiltredSites(props.sites);
    } else {
      setFiltredSites(
        props.sites.filter(site =>
          site.name.toLowerCase().includes(keyword.toLowerCase()),
        ),
      );
    }
  };

  const handlePressAllSites = () => {
    if (selectedSites.length !== props.sites?.length) {
      setSelectedSites(props.sites);
    }
  };
  return (
    <View style={_styles.container}>
      <HeaderModal
        title={props.title}
        onRightPress={() => props.onClose()}
        rightLabel={t('txt.appliquer')!!}
        onLeftPress={() => props.onClose()}
        leftLabel={t('txt.annuler')!!}
      />
      <SearchInputSite inputOnly searchSites={searchSites} />
      <SearchResultSites
        multiSelection={true}
        sites={filtredSites}
        selectedSites={selectedSites}
        onSelect={handleSelect}
      />
      <BottomFooter
        confirmText={t('txt.tous.les.chantiers')}
        confirmPress={handlePressAllSites}
      />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
  },
  Non_clickable_container: {
    backgroundColor: 'white',
    pointerEvents: 'none',
  },
  detailsContainer: {
    height: '10%',
    backgroundColor: utils.colors.white,
  },
});

interface SearchResultSitesProps {
  sites: Site[] | undefined;
  selectedSites: Site[] | undefined;
  onSelect: (site: Site) => void;
  multiSelection?: boolean;
}
export const SearchResultSites = (props: SearchResultSitesProps) => {
  const {t} = useTranslation();
  const renderItem = ({
    item,
    desactivated,
  }: {
    item: Site;
    desactivated?: boolean;
  }) => {
    const isSelected = props.selectedSites?.includes(item);
    return (
      <TouchableOpacity
        key={item?.id}
        onPress={() => props.onSelect(item)}
        style={[
          styles.item,
          desactivated && {backgroundColor: utils.colors.gray90},
        ]}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={{flex: 1, alignItems: 'flex-end', alignSelf: 'center'}}>
          {isSelected && (
            <Image source={utils.images.checkmarkIcon} style={styles.image} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const activatedSites = props.sites?.filter(site => site.accepted === true);
  const desactivatedSites = props.sites?.filter(
    site => site.accepted === false,
  );

  return props.sites !== undefined ? (
    <ScrollView>
      {activatedSites?.map(site => renderItem({item: site}))}
      <Divider />
      <View style={{backgroundColor: utils.colors.gris100}}>
        <Text
          style={[
            styles.title,
            {
              height: 50,
              textAlignVertical: 'center',
            },
          ]}>
          {t('chantiers_desactives')}
        </Text>
      </View>
      <Divider />
      {desactivatedSites?.map(site =>
        renderItem({item: site, desactivated: true}),
      )}
    </ScrollView>
  ) : (
    <Text style={styles.no_Site_text}>{t('msg.no.cs.is.affected')}</Text>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 15,
    width: '100%',
    borderBottomColor: utils.colors.gray90,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: utils.colors.black,
    paddingStart: 10,
  },
  address: {
    color: utils.colors.gray700,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  no_Site_text: {
    marginTop: '25%',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: utils.colors.gris300,
  },
});
