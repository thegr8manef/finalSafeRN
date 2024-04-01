import { StyleSheet } from 'react-native';
import * as utils from '@utils/index';
import { windowWidth } from './dimension';

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
    },
    fontMedium13Style: {
        fontSize: 13,
        fontFamily: utils.fonts.AvenirMedium,
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
    },
    defaultImageStyle: {
        width: windowWidth / 12,
        height: windowWidth / 19,
        resizeMode: 'contain',
    },
    androidRipple: {
        color: utils.colors.gris300
      },
})
export default globalStyle;