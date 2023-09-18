import React, { useState } from 'react';
import { Modal, StyleSheet, View, TextInput, Alert } from 'react-native';
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';
import { HeaderModal } from '../../../components/HeaderModal';
import { WarringTextView } from '../../../Visit/components/warringTextView';
import { SearchInputAccompanion } from '../../../Visit/components/accompanionsInfo/searchInputAccompanion';
interface Props {
    visible: boolean;
    onClose: () => void;
    title: string;
}

export const ObservationModal = (props: Props) => {
    const { t } = useTranslation();
    const [keyword, setKeyword] = useState<string>('')
    const searchSite = (keyword: string) => {
        setKeyword(keyword)
        //     const filtedSites = props.sites?.filter(site => site.name.indexOf(keyword) !== -1)
        //     setSites(filtedSites)
    }
    return (
        <Modal
            testID="modal"
            animationType="slide"
            transparent={true}
            visible={props.visible}>
            <View style={styles.container}>
                <HeaderModal
                    title={props.title}
                    leftLabel={t('flash_alert_button')}
                    onLeftPress={() => props.onClose()}
                />
                <SearchInputAccompanion keyword={keyword} searchSites={searchSite} />

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        shadowColor: '#000',
    },
});
