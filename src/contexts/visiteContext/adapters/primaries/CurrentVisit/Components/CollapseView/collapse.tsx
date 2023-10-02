import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as utils from '@utils/index';
import { AfterCollapse } from './afterCollapse';
import { BeforeCollapse } from './beforeCollapse';

interface Props {
    site: string;
    accompagnatsList: any[];
    date: string;
    comment: string;
    type: string;
}
export const Collapse = (props: Props) => {
    const [selectedSite, setSelectedSite] = useState<boolean>(false)
    const toggleCollapse = () => {
        setSelectedSite(!selectedSite)
    }

    return (
        <View style={styles.container}>
            {selectedSite ? (
                <View style={styles.container}>
                    <AfterCollapse toggleCollapse={() => toggleCollapse()} site={props.site} accompagnatsList={props.accompagnatsList} date={props.date} comment={props.comment} type={props.type} />
                </View>
            ) : (
                <View style={styles.container}>
                    <BeforeCollapse toggleCollapse={() => toggleCollapse()} site={props.site} date={props.date} type={props.type} />
                </View>
            )
            }
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1.2,
        flexDirection: 'column',

    },
});