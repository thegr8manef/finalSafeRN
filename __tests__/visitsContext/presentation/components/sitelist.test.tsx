import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import i18n from '../../../../src/assets/languages/i18n';
import { SitesList } from '@contexts/visiteContext/adapters/primaries/components/SitesList';

describe('SitesList', () => {

    beforeEach(() => {
        i18n.init();
    });

    it('should render the three buttons', () => {
        const props = {
            codeExist: '123456',
            codeByChantier: '123456',
            nom_chantier: 'Chantier de test',
            clicked: false,
            setcodeByChantier: () => { },
            setclicked: () => { },
            loading: false
        };
        const { getByTestId } = render(<SitesList  {...props} />);

        expect(getByTestId('code_chantier_btn')).toBeTruthy();
        expect(getByTestId('chantier_de_mon_perimetre')).toBeTruthy();
        expect(getByTestId
            ('qr_code')).toBeTruthy();
    });

    it('should render the code and name of the chantier when they are available', () => {
        const props = {
            codeExist: '123456',
            codeByChantier: '123456',
            nom_chantier: 'Chantier de test',
            clicked: false,
            setcodeByChantier: () => { },
            setclicked: () => { },
            loading: false
        };
        const { getByTestId } = render(<SitesList {...props} />);

        expect(getByTestId('code_chantier_btn')).toBeTruthy();
        expect(getByTestId('chantier_de_mon_perimetre')).toBeTruthy();
    });

    it('should not render the code and name of the chantier when they are not available', () => {
        const props = {
            codeExist: '',
            codeByChantier: "",
            nom_chantier: "",
            clicked: false,
            setcodeByChantier: () => { },
            setclicked: () => { },
            loading: false
        };
        const { getByTestId } = render(<SitesList {...props} />);

        expect(getByTestId('code_chantier_btn').props.value).toBeUndefined();
        expect(getByTestId('chantier_de_mon_perimetre').props.value).toBeUndefined();
    });

    it('should not render the code and name of the chantier when they are not available', () => {
        const props = {
            codeExist: '',
            codeByChantier: "",
            nom_chantier: "",
            clicked: false,
            setcodeByChantier: () => { },
            setclicked: () => { },
            loading: false
        };
        const { getByTestId } = render(<SitesList {...props} />);

        fireEvent.press(getByTestId('code_chantier_btn'))
        fireEvent.press(getByTestId('chantier_de_mon_perimetre'))
    });
});
