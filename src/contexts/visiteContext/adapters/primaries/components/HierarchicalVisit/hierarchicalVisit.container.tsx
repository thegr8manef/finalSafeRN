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
import { BottomFooter } from '../BottomFooter';

interface Props {
    error: string | undefined;
    sites: Site[] | null;
    loading: boolean;
    loadSites: () => void;
    navigation: StackNavigationProp<StackParamList>;
}
const content = [
    { type: "text", text: t('txt.precedent'), onPress: () => { console.log('Previous') } },
];
export const HierarchicalVisitContainer = (props: Props) => {

    const [selectedSite, setSelectedSite] = useState<Site | undefined>(undefined)
    const [searchWithNameVisible, setSearchWithNameVisible] = useState(false);
    const [comment, setComment] = useState<string>('');

    useEffect(() => {
        props.loadSites();
    }, [])

    const NextStep = () => {
        props.navigation.navigate('CurrentVisit');
    }
    return (
        <View style={styles.container}>
            <WarringTextView WarringTest={t('txt.completer.info')} />
            <AccompanionsInfo ShowListAccompanions={() => setSearchWithNameVisible(true)} selectAccompanions={selectedSite} />
            <DatePicker />
            <CommentInfo comment={comment} setComment={(comment: string) => setComment(comment)} title={('txt.informations.complementaires')} label={t('txt.informations.complementaires')} />
            <AccompanionsSelect sites={props.sites} selectedSite={selectedSite} setSelectedSite={setSelectedSite} selectedIdSite={''} searchWithNameVisible={searchWithNameVisible} setSearchWithNameVisible={() => setSearchWithNameVisible(false)} />
            <View style={{ flex: 2 }}></View>
            <BottomFooter confirmText={t('txt.creez.la.visite')} confirmPress={() => NextStep()} content={content} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: utils.colors.white,
    },
    warringContainer: {

        height: 50,
        backgroundColor: utils.colors.gray90,
    },
    warringText: {
        color: utils.colors.black,
        margin: 15,
        fontSize: 15
    },
});
