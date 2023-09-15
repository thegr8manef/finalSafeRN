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
import { AccompanionsInfo } from '../../Visit/components/accompanionsInfo';
import { WarringTextView } from '../../Visit/components/warringTextView';
import { DatePicker } from '../../Visit/components/DatePicker';
import { CommentInfo } from '../comment/commentInfo';
import { AccompanionsSelect } from '../../Visit/components/accompanionsInfo/accompanionsSelect';

interface Props {
    error: string | undefined;
    sites: Site[] | null;
    loading: boolean;
    loadSites: () => void;
    navigation: StackNavigationProp<StackParamList>;
}

export const HierarchicalVisitContainer = (props: Props) => {

    const [selectedSite, setSelectedSite] = useState<Site | undefined>(undefined)
    const [searchWithNameVisible, setSearchWithNameVisible] = useState(false);
    const [comment, setComment] = useState<string>('');

    useEffect(() => {
        props.loadSites();
    }, [])

    const NextStep = () => {
        if (validVisit()) {
        }
    }
    const OpenDatePicker = async () =>{

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
            <WarringTextView />
            <AccompanionsInfo ShowListAccompanions={() => setSearchWithNameVisible(true)} />
            <DatePicker />
            <CommentInfo comment={comment} setComment={(comment: string) => setComment(comment)} title={('txt.informations.complementaires')} label={t('txt.informations.complementaires')} />   
            <AccompanionsSelect sites={props.sites} selectedSite={selectedSite} setSelectedSite={setSelectedSite} selectedIdSite={''} searchWithNameVisible={searchWithNameVisible} setSearchWithNameVisible={() => setSearchWithNameVisible(false)} />
            <View style={{flex:2}}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: utils.colors.white,
    },
    warringContainer:{
        
        height:50,
        backgroundColor:utils.colors.gray90,
    },
    warringText:{
        color: utils.colors.black,
        margin:15,
        fontSize: 15
    },
});
