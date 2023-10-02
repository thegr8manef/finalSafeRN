import React, { useEffect, useState } from 'react';
import * as utils from '@utils/index';
import { StackParamList } from '@navigConfig/navigation.types';
import { StackNavigationProp } from '@react-navigation/stack';
import { Site } from '@contexts/visiteContext/domain/entity/Site';

import { t } from 'i18next';
import {
    Alert,
    StyleSheet,
    View,
} from 'react-native';
import { accompanying } from "@utils/utils";
import { CHARACTERS } from '@common/constants';
import { useRoute } from '@react-navigation/native';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import { WarringTextView } from '../Visit/components/warringTextView';
import { AccompanionsInfo } from '../Visit/components/accompanionsInfo';
import { DatePicker } from '../Visit/components/DatePicker';
import { CommentInfo } from '../components/comment/commentInfo';
import { AccompanionsSelect } from '../Visit/components/accompanionsInfo/accompanionsSelect';
import { BottomFooter } from '../components/BottomFooter';
import { AddAccompanyingModal } from '../Visit/components/accompanionsInfo/addAccompanyingModal';


interface Props {
    error: string | undefined;
    sites: Site[] | null;
    loading: boolean;
    loadSites: () => void;
    navigation: StackNavigationProp<StackParamList>;
    saveVisit: (data: Visit) => void;
    saveFlash: (data: VisitFlash) => void;

}
const content = [
    { type: "text", text: t('txt.precedent'), onPress: () => { console.log('Previous') } },
];
function generateID() {
    let ID = "";

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
            ID += CHARACTERS[randomIndex];
        }

        if (i < 3) {
            ID += "-";
        }
    }

    return ID;
}
export const PreventionVisitContainer = (props: Props) => {

    const [selectedSite, setSelectedSite] = useState<Site | undefined>(undefined)
    const [searchWithNameVisible, setSearchWithNameVisible] = useState(false);
    const [addAccompanyingVisible, setAddAccompanyingVisible] = useState(false);
    const [comment, setComment] = useState<string>('');
    const [Accompanying, setAccompanying] = useState<string[]>([]);
    const [addAccompanying, setAddAccompanying] = useState<string>('');
    const [date, setDate] = useState(new Date(Date.now()));
    const [selectedItems, setSelectedItems] = useState<any[]>([]);
    const route = useRoute();
    const { selectedSiteName } = route.params; // Access the parameters
    useEffect(() => {
        props.loadSites();
    }, [])
    useEffect(() => {
        if (addAccompanying.length !== 0) {
            accompanying.push({ id: generateID(), Name: addAccompanying, reference: '' })
        }
    }, [addAccompanying])

    const NextStep = () => {
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
        Alert.alert('', t('etes_vous_sur_de_vouloir_sauvegarder')!, [
          {
            text: 'NON',
            style: 'cancel',
          },
          {
            text: 'OUI',
            onPress: () => {
              props.navigation.navigate('CurrentVisit', {
                comments: comment, // Replace with your comment data
                addAccompanying: selectedItems, // Replace with your array data
                date: formattedDate, //Date
                selectedSiteName: selectedSiteName, //Site Name
                type: 'prevention' //type Visit
            });
            }
          },
        ]);

            }
    return (
        <View style={styles.container}>
            <WarringTextView WarringTest={t('txt.completer.info')} />
            <AccompanionsInfo ShowListAccompanions={() => setSearchWithNameVisible(true)} selectAccompanions={Accompanying} />
            <DatePicker date={date} setDate={setDate} />
            <CommentInfo comment={comment} setComment={(comment: string) => setComment(comment)} title={t('txt.informations.complementaires')} label={t('txt.informations.complementaires')} />
            <AccompanionsSelect setAccompanying={setAccompanying} selectedIdSite={Accompanying} searchWithNameVisible={searchWithNameVisible} setSearchWithNameVisible={() => setSearchWithNameVisible(false)} ShowAddAccompanionsModal={() => setAddAccompanyingVisible(true)} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            <View style={{ flex: 2 }}></View>
            <BottomFooter confirmText={t('txt.creez.la.visite')} confirmPress={() => NextStep()} content={content} />
            <AddAccompanyingModal modalVisible={addAccompanyingVisible} onClose={() => setAddAccompanyingVisible(false)} accompanying={addAccompanying} setAccompanying={setAddAccompanying} label={addAccompanying} />
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
