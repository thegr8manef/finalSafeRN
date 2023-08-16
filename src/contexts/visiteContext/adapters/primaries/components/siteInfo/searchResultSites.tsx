import { Site } from '@contexts/visiteContext/domain/entity/Site'
import React from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native'
import * as utils from '@utils/index';

interface Props {
    sites: Site[] | undefined
}
export const SearchResultSites = (props: Props) => {
    const renderItem = (item: Site): JSX.Element => (
        <View  style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
        </View>
    )
    return (
        <FlatList data={props.sites} renderItem={({ item }) => renderItem(item)}/>
)
}
const styles = StyleSheet.create({
    item: {
        padding: 20,
        width: '100%',
        borderBottomColor: utils.colors.gray90,
        borderBottomWidth: 1
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        color: utils.colors.black
    },
    address:{
        color: utils.colors.gray700
    }
})