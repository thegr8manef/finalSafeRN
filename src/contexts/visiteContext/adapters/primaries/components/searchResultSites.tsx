import { Site } from '@contexts/visiteContext/domain/entity/Site'
import React from 'react'
import { Text, FlatList, View } from 'react-native'

interface Props {
    sites: Site[] | undefined
}
export const SearchResultSites = (props: Props) => {
    const renderItem = (item: Site): JSX.Element => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.address}</Text>
        </View>
    )
    return (
        <FlatList data={props.sites} renderItem={({ item }) => renderItem(item)}/>
)
}