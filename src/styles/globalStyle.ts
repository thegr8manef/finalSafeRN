import { StyleSheet } from 'react-native';
import * as utils from '@utils/index';

const globalStyle = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    centerContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    fontMediumDark14Style: {
        fontSize: 14,
        fontFamily: utils.fonts.AvenirMedium,
        textAlign: 'center'
    },
    fontMedium15Style: {
        fontSize: 15,
        fontFamily: utils.fonts.AvenirMedium,
        margin: 15,
    },
    fontMediumDark15Style: {
        fontSize: 15,
        fontFamily: utils.fonts.AvenirMedium,
        color: utils.colors.black,
    },
    fontBoldDark15Style: {
        fontSize: 15,
        fontFamily: utils.fonts.AvenirHeavy,
        color: utils.colors.black,
    },
    fontMediumDark17Style: {
        fontSize: 17,
        fontFamily: utils.fonts.AvenirMedium,
        color: utils.colors.black,
    },
    fontBoldDark20Style: {
        fontSize: 20,
        fontFamily: utils.fonts.AvenirHeavy,
        color: utils.colors.black,

    },
    fontCenterStyle: {
        textAlign: 'center'
    }
})
export default globalStyle;