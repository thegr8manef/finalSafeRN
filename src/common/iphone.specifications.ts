import { isIphoneX } from 'react-native-iphone-x-helper'

export const isIphoneXOrAbove = (): boolean => {
    return isIphoneX()
}