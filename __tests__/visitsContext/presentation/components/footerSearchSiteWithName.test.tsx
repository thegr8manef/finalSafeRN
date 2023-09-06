import React from 'react';
import i18n from '../../../../src/assets/languages/i18n';
import {render} from '@testing-library/react-native';
import {FooterSearchSiteWithName} from '@contexts/visiteContext/adapters/primaries/components/siteInfo/FooterSearchSiteWithName';

describe('FooterSearchSiteWithName test', () => {
  const props = {
    onSelectSite: jest.fn(),
  };
  beforeEach(() => {
    i18n.init();
  });
  it('renders correctly', () => {
    expect(render(<FooterSearchSiteWithName {...props} />)).toBeTruthy();
  });
});
