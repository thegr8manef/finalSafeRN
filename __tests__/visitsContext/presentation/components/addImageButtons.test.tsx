import { AddImageButtons } from '@contexts/visiteContext/adapters/primaries/components/images/addImageButtons'
import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { PermissionStatus, Platform } from 'react-native';

describe('AddImageButtons', () => {

    it('Choose image on android', () => {
        Platform.OS = 'android';
        jest.mock(
            'react-native//Libraries/PermissionsAndroid/PermissionsAndroid',
            () => {
                return {
                    ...jest.requireActual(
                        'react-native//Libraries/PermissionsAndroid/PermissionsAndroid',
                    ),
                    request: jest.fn(() => new Promise<PermissionStatus>(resolve => resolve('denied'))),
                };
            },
        );

        const { getByTestId } = render(<AddImageButtons addImage={jest.fn} />)
        //
        const chooseImageFileButton = getByTestId('choose-img')
        expect(chooseImageFileButton).toBeTruthy()
        fireEvent.press(chooseImageFileButton)
    })

    it('Capture image on android', () => {
        Platform.OS = 'android';
        jest.mock(
            'react-native//Libraries/PermissionsAndroid/PermissionsAndroid',
            () => {
                return {
                    ...jest.requireActual(
                        'react-native//Libraries/PermissionsAndroid/PermissionsAndroid',
                    ),
                    request: jest.fn(() => new Promise<PermissionStatus>(resolve => resolve('denied'))),
                };
            },
        );

        const { getByTestId } = render(<AddImageButtons addImage={jest.fn} />)

        //
        const captureImageFileButton = getByTestId('capture-img')
        expect(captureImageFileButton).toBeTruthy()
        fireEvent.press(captureImageFileButton)
    })
    ///////////////////////////////////////////////////////////////////////////////////
    it('Choose image on ios', () => {
        Platform.OS = 'ios';

        const { getByTestId } = render(<AddImageButtons addImage={jest.fn} />)
        //
        const chooseImageFileButton = getByTestId('choose-img')
        expect(chooseImageFileButton).toBeTruthy()
        fireEvent.press(chooseImageFileButton)
    })

    it('Capture image on ios', () => {
        Platform.OS = 'ios';

        const { getByTestId } = render(<AddImageButtons addImage={jest.fn} />)
        //
        const captureImageFileButton = getByTestId('capture-img')
        expect(captureImageFileButton).toBeTruthy()
        fireEvent.press(captureImageFileButton)
    })
})