import React from 'react';
import { render } from '@testing-library/react-native';
import { PreviewImages } from '@contexts/visiteContext/adapters/primaries/components/images/previewImages';

describe('PreviewImages', () => {

  it('renders no image text when images are empty', () => {
    const mockImages: string[] = [];
    const { getByTestId } = render(<PreviewImages images={mockImages} />);

    const noImageText = getByTestId('no-image-text');
    expect(noImageText).toBeTruthy();
  });


  it('renders images when images are provided', () => {
    const mockImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    const { getByTestId, queryByTestId } = render(<PreviewImages images={mockImages} />);

    const noImageText = queryByTestId('no-image-text');
    expect(noImageText).toBeNull();

    const flatList = getByTestId('image-flatlist');
    expect(flatList).toBeTruthy();

  });

});
