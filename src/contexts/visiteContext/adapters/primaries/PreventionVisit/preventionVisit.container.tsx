import React, { useEffect, useState } from 'react';
import * as utils from '@utils/index';
import { StackParamList } from '@navigConfig/navigation.types';
import { StackNavigationProp } from '@react-navigation/stack';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { SiteInfo } from '../components/siteInfo/siteInfo';
import { BottomFooter } from '../components/BottomFooter';
import { t } from 'i18next';
import {
    StyleSheet,
    View,
    Alert
} from 'react-native';

interface Props {
    error: string | undefined;
    sites: Site[] | null;
    loading: boolean;
    loadSites: () => void;
    navigation: StackNavigationProp<StackParamList>;
}

export const PreventionVisitContainer = (props: Props) => {

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
            <SiteInfo sites={props.sites} selectedSite={selectedSite} setSelectedSite={setSelectedSite} selectedIdSite={''} />
            <BottomFooter confirmPress={NextStep} confirmText={t('txt.swivant')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: utils.colors.white,
    },

});
