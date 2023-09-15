import React, { useEffect, useState } from 'react';
import * as utils from '@utils/index';
import { StackParamList } from '@navigConfig/navigation.types';
import { StackNavigationProp } from '@react-navigation/stack';
import { Site } from '@contexts/visiteContext/domain/entity/Site';

import { t } from 'i18next';
import {
    StyleSheet,
    View,
    Alert,
    Text
} from 'react-native';
import { SiteInfo } from '../siteInfo/siteInfo';
import { BottomFooter } from '../BottomFooter';

interface Props {
    error: string | undefined;
    sites: Site[] | null;
    loading: boolean;
    loadSites: () => void;
    navigation: StackNavigationProp<StackParamList>;
}

export const ConformityVisitContainer = (props: Props) => {

    const [selectedSite, setSelectedSite] = useState<Site | undefined>(undefined)

    useEffect(() => {
        props.loadSites();
    }, [])

    const NextStep = () => {
        if (validVisit()) {

        }
    }

    const validVisit = (): boolean => {

        if (selectedSite === undefined) {
            Alert.alert('', t('txt.qr.code.empty')!);
            return false
        } else {
            return true
        }
    };

    return (
        <View style={styles.container}>
            <Text>conformity visit</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: utils.colors.white,
    },

});
