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
import { AddAccompanyingModal } from '../../Visit/components/accompanionsInfo/addAccompanyingModal';
import { accompanying } from "@utils/utils";
import { CHARACTERS, NAME, NAMESPACE } from '@common/constants';

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
export const HierarchicalVisitContainer = (props: Props) => {

    const [selectedSite, setSelectedSite] = useState<Site | undefined>(undefined)
    const [searchWithNameVisible, setSearchWithNameVisible] = useState(false);
    const [addAccompanyingVisible, setAddAccompanyingVisible] = useState(false);
    const [comment, setComment] = useState<string>('');
    const [Accompanying, setAccompanying] = useState<string[]>([]);
    const [addAccompanying, setAddAccompanying] = useState<string>('');

    useEffect(() => {
        props.loadSites();
    }, [])
    useEffect(() => {
        if (addAccompanying.length !== 0) {
                accompanying.push({ id: generateID(), Name: addAccompanying, reference: '' })
                console.log("🚀 ~ file: hierarchicalVisit.container.tsx:51 ~ useEffect ~ accompanying1020:", accompanying)
        }
    }, [addAccompanying])

    const NextStep = () => {
        props.navigation.navigate('CurrentVisit');
    }
    return (
        <View style={styles.container}>
            <WarringTextView WarringTest={t('txt.completer.info')} />
            <AccompanionsInfo ShowListAccompanions={() => setSearchWithNameVisible(true)} selectAccompanions={Accompanying} />
            <DatePicker />
            <CommentInfo comment={comment} setComment={(comment: string) => setComment(comment)} title={('txt.informations.complementaires')} label={t('txt.informations.complementaires')} />
            <AccompanionsSelect setAccompanying={setAccompanying} selectedIdSite={Accompanying} searchWithNameVisible={searchWithNameVisible} setSearchWithNameVisible={() => setSearchWithNameVisible(false)} ShowAddAccompanionsModal={() => setAddAccompanyingVisible(true)} />
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
