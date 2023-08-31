import React, { useEffect, useState } from 'react';
import * as utils from '@utils/index';
import { Site } from '../../../domain/entity/Site';
import { SiteInfo } from '../components/siteInfo/siteInfo';
import {
    StyleSheet,
    View,
} from 'react-native';
import { StackParamList } from '@navigConfig/navigation.types';
import { StackNavigationProp } from '@react-navigation/stack';

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

    return (
        <View style={styles.container}>
            <SiteInfo sites={props.sites} selectedSite={selectedSite} setSelectedSite={setSelectedSite} selectedIdSite={''} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: utils.colors.white,
    },

});
