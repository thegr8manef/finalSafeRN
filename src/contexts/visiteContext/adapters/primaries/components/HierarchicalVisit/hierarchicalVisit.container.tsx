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
import { AccompanionsInfo } from '../../Visit/components/accompanionsInfo';
import { WarringTextView } from '../../Visit/components/warringTextView';
import { DatePicker } from '../../Visit/components/DatePicker';
import { CommentInfo } from '../comment/commentInfo';
import { AccompanionsSelect } from '../../Visit/components/accompanionsInfo/accompanionsSelect';
import { BottomFooter } from '../BottomFooter';
import { AddAccompanyingModal } from '../../Visit/components/accompanionsInfo/addAccompanyingModal';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import { Accompagnants } from '@contexts/visiteContext/domain/entity/Accompagnant';
import { VisitRemarque } from '@contexts/visiteContext/domain/entity/VisitRemarque';
import { VisitObservation } from '@contexts/visiteContext/domain/entity/VisitsObservation';
import Remarque from '@contexts/visiteContext/domain/entity/Remarque';
import { FlashPhotoDto } from '@contexts/visiteContext/adapters/secondaires/dto/flash.photo.dto';
import { Photo } from '@contexts/visiteContext/domain/entity/Photo';
import { unix } from 'moment';
import { generateID } from '@utils/utils';


interface Props {
    error: string | undefined;
    sites: Site[] | null;
    loading: boolean;
    Accompagnants: Accompagnants[] | undefined;
    loadSites: () => void;
    navigation: StackNavigationProp<StackParamList>;
    saveVisit: (data: Visit) => void;
    saveFlash: (data: VisitFlash) => void;
    loadAccompagnants: () => void;

}
const content = [
    { type: "text", text: t('txt.precedent'), onPress: () => { console.log('Previous') } },
];

export const HierarchicalVisitContainer = (props: Props) => {

    const [searchWithNameVisible, setSearchWithNameVisible] = useState(false);
    const [addAccompanyingVisible, setAddAccompanyingVisible] = useState(false);
    const [comment, setComment] = useState<string>('');
    const [Accompanying, setAccompanying] = useState<Accompagnants[] | undefined>([]);
    const [addAccompanying, setAddAccompanying] = useState<string>('');
    const [date, setDate] = useState(new Date(Date.now()));
    const [selectedItems, setSelectedItems] = useState<any[]>([]);
    const route = useRoute();
    const { selectedSite, selectedSiteName, selectedSiteRef,  } = route.params; // Access the parameters
    useEffect(() => {
        props.loadAccompagnants();
        props.loadSites();
    }, [])
    useEffect(() => {
        if (addAccompanying.length !== 0) {
            props.Accompagnants.push({
                id: 5498,
                _fn: 'manef',
                _em: 'test@test.com',
                ac: true,
                _ln: 'lastnameManef',
            });
        }
    }, [addAccompanying])

    const NextStep = () => {
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
        const accompagant: Accompagnants[] = [new Accompagnants(generateID(), selectedItems[0].fn, selectedItems[0].ln, selectedItems[0].em, selectedItems[0].idVisite, selectedItems[0].fullnameLowerCase, selectedItems[0].ac, selectedItems[0].ol, selectedItems[0].prId)];
        
        Alert.alert('', t('etes_vous_sur_de_vouloir_sauvegarder')!, [
            {
                text: 'NON',
                style: 'cancel',
            },
            {
                text: 'OUI',
                onPress: () => {
                    //props.saveVisit(visitHierarchical)
                    props.navigation.navigate('CurrentVisit', {
                        comments: comment, // Replace with your comment data
                        addAccompanying: selectedItems, // Replace with your array data
                        Accompagant : accompagant, // Accompagant
                        date: formattedDate, //Date
                        selectedSiteName: selectedSiteName, //Site Name
                        selectedSite: selectedSite, //Site
                        selectedSiteRef: selectedSiteRef,//Site ref
                        type: 3 //type Visit
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
            <AccompanionsSelect setAccompanying={setAccompanying} selectedIdSite={Accompanying} searchWithNameVisible={searchWithNameVisible} setSearchWithNameVisible={() => setSearchWithNameVisible(false)} ShowAddAccompanionsModal={() => setAddAccompanyingVisible(true)} selectedItems={selectedItems} setSelectedItems={setSelectedItems} Accompagnants={props.Accompagnants} />
            <View style={{ flex: 2 }}></View>
            <BottomFooter confirmText={t('txt.creez.la.visite')} confirmPress={() => NextStep()} content={content} />
            <AddAccompanyingModal modalVisible={addAccompanyingVisible} onClose={() => setAddAccompanyingVisible(false)} accompanyingName={addAccompanying} setAccompanyingName={setAddAccompanying} label={addAccompanying} />
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
