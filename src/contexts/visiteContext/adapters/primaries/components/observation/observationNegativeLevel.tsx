import React, { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RadioGroup } from 'react-native-radio-buttons-group'
import * as utils from '@utils/index';
import { useTranslation } from 'react-i18next';

interface Props {
    levelId: number
    setLevelId: (levelId: number) => void
}
export const ObservationNegativeLevel = (props: Props) => {
    const { t } = useTranslation();
    const OptionEcartSansRisque = useMemo(() => [
        {
            id: '1',
            label: t('txt_i_know_i_can_i_act'),
            value: '1',
            color: utils.colors.gray90,
            labelStyle: styles.radioButton1,
        },
        {
            id: '2',
            label: t('txt_i_know_i_can_not_i_report'),
            value: '2',
            color: utils.colors.gray90,
            labelStyle: styles.radioButton2,
        },
        {
            id: '3',
            label: t('txt_i_do_not_know_i_report'),
            value: '3',
            color: utils.colors.gray90,
            labelStyle: styles.radioButton3,
        },
    ],
        [],
    );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {t('txt_evaluation_visit_flash')}
            </Text>
            <RadioGroup
                radioButtons={OptionEcartSansRisque}
                onPress={(level: string) => props.setLevelId(parseInt(level))}
                selectedId={props.levelId.toString()}
                layout="column"
                containerStyle={styles.content}
                color={utils.colors.primary}
                labelColor={utils.colors.black}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 130,
        marginTop: 5,
        marginBottom:10
    },
    title: {
        color: utils.colors.gris200,
        fontWeight: '700',
        fontSize: 14,
        marginTop: 30,
        marginBottom: 15,
        marginLeft:25
    },
    content: {
        height: 130,
        marginTop: 5,
    },
    radioButton1: {
        backgroundColor: utils.colors.green300,
        width: '85%',
        fontSize: 15,
        color : utils.colors.textColor,
        paddingRight : 10,
        paddingTop :5,
        paddingBottom : 5
      },
      radioButton2: {
        backgroundColor: utils.colors.yellow900,
        width: '85%',
        fontSize: 15,
        color : utils.colors.textColor,
        paddingRight : 10,
        paddingTop :5,
        paddingBottom : 5
      },
      radioButton3: {
        backgroundColor: utils.colors.pink,
        width: '85%',
        fontSize: 15,
        color : utils.colors.textColor,
        paddingRight : 10,
        paddingTop :5,
        paddingBottom : 5
      },

});