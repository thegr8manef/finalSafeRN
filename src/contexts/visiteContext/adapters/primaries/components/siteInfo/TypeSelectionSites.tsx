import { Site } from "@contexts/visiteContext/domain/entity/Site";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as utils from '@utils/index';
import { t } from "i18next";

interface Props {
}
export const TypeSelectionSites = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.filter}>
                <Text style={styles.textFiletr}> {t('choisir_un_chantier')}</Text>
                <View style={styles.btnFilter}>
                    <Text style={styles.textFiletr}> {t('txt.mes.chantier')}</Text>
                    <Image
                        source={utils.images.filterArrowIcon}
                        style={styles.filterIcon} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
      },
      filter: {
        flexDirection: 'row',
      },
      textFiletr: {
        color: utils.colors.textColor,
      },
      btnFilter: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
      },
      filterIcon: {
        width: 15,
        height: 10,
        marginLeft: 8,
        top: 7,
        resizeMode: 'stretch',
      },
})