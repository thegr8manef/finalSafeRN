import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as utils from '@utils/index';
import { AfterCollapse } from './afterCollapse';
import { BeforeCollapse } from './beforeCollapse';

interface Props {

}
export const Collapse = (props: Props) => {
    const [selectedSite, setSelectedSite] = useState<boolean>(false)
    const toggleCollapse = () => {
        setSelectedSite(!selectedSite)
    }

    return (
        <View style={styles.container}>
            {selectedSite ? (
                <View style={{ flex: 5 }}>
                    <AfterCollapse toggleCollapse={() => toggleCollapse()} />
                </View>
            ) : (
                <View style={styles.container}>
                    <BeforeCollapse toggleCollapse={() => toggleCollapse()} />
                </View>
            )
            }
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
});