import { Site } from '@contexts/visiteContext/domain/entity/Site'
import React, { useState } from 'react'
import { Text, FlatList, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import * as utils from '@utils/index';

interface Props {
    sites: Site[] | undefined
    onSelect: (site: Site) => void
}
export const SearchResultSites = (props: Props) => {
    const [selectedItem, setSelectedItem] = useState<Site | undefined>(undefined);
  
    const renderItem = ({ item }: { item: Site }) => {
      const isSelected = selectedItem && selectedItem.id === item.id;
      if(selectedItem !== undefined){
        props.onSelect(selectedItem)
      }
      return (
        <TouchableOpacity
          onPress={() => setSelectedItem(item)}
          style={styles.item}>

            <View style={{flex:1}}>
            <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end',alignSelf:'center'}}>
            {isSelected && <Image source={utils.images.checkmarkIcon} style={styles.image} />}
            </View>
      </TouchableOpacity>
      );
    };
  
    return (
      <FlatList
        data={props.sites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };
const styles = StyleSheet.create({
    item: {
        padding: 20,
        width: '100%',
        borderBottomColor: utils.colors.gray90,
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        color: utils.colors.black
    },
    address:{
        color: utils.colors.gray700
    },
    image: {
        width: 30,
        height: 30,
    }
})