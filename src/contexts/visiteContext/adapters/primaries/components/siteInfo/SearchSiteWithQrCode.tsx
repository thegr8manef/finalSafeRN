import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { HeaderModal } from '../HeaderModal';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { flexBoxStyle } from '@styles/flexBoxStyle';
import { t } from 'i18next';
import { windowHeight } from '@styles/dimension';
import * as utils from '@utils/index';
import { RNCamera } from 'react-native-camera';

interface Props {
  modalVisible: boolean;
  onClose: () => void;
  sites: Site[] | null;
  onSearch: (site: Site) => void;
  onRightIconPress?: (index: number) => void; // Function for handling icon presses
}

const SearchSiteWithQrCode = (props: Props) => {
  // State variables
  const [qrValue, setQrValue] = useState('');
  const [light, setLight] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  // Toggle flashlight on/off
  const toggleLight = () => {
    setLight(!light);
  };

  // Handle QR code scanning
  const handleReadQRCode = (e: { data: string }) => {
    setShowDialog(true);
    setQrValue(e.data);
  };

  // QR code scanner component with dynamic flash mode
  const CustomQrCodeScanner = () => (
    <QRCodeScanner
      onRead={handleReadQRCode}
      cameraStyle={{ height: windowHeight }}
      flashMode={light ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.auto}
    />
  );

  // Handle right icon press (e.g., flashlight)
  const handleRightIconPress = (index: number) => {
    if (index === 0) {
      toggleLight();
    } else if (index === 1) {
      console.log('Pressed the second icon');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}>

      {/* Header */}
      <HeaderModal
        title={t('txt.scan')}
        onLeftPress={props.onClose}
        leftLabel={t('txt.annuler')}
        rightIcon={[
          light ? utils.images.flashOffIcon : utils.images.flashONIcon,
          utils.images.fileIcon,
        ]}
        onRightIconPress={handleRightIconPress}
      />

      {/* QR code scanner */}
      <View style={flexBoxStyle.flexCenter}>
        <CustomQrCodeScanner />
      </View>

    </Modal>
  );
};

export default SearchSiteWithQrCode;
