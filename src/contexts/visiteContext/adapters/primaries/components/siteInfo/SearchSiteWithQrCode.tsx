import React, { useState } from 'react';
import { View, Modal, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { HeaderModal } from '../HeaderModal';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { flexBoxStyle } from '@styles/flexBoxStyle';
import { t } from 'i18next';
import { windowHeight } from '@styles/dimension';
import * as utils from '@utils/index';
import { RNCamera } from 'react-native-camera';
import { chooseImage } from '@utils/utils';
import RNQRGenerator from 'rn-qr-generator';

// Define the Props interface
interface Props {
  modalVisible: boolean;
  onClose: () => void;
  sites: Site[] | null;
  onSearch: (site: Site) => void;
  onRightIconPress?: (index: number) => void; // Function for handling icon presses
}

// Define the SearchSiteWithQrCode component
const SearchSiteWithQrCode = (props: Props) => {
  // State variables
  const [light, setLight] = useState(false);

  // Toggle flashlight on/off
  const toggleLight = () => {
    setLight(!light);
  };

  // Handle QR code scanning
  const handleReadQRCode = (e: { data: string }) => {
    if (e.data.length > 0) {
      searchSite(e.data)
    }
  };

  //fct search site on click on validate
  const searchSite = (qrCode: any) => {
    if (qrCode.length !== 0) {
      const selectedSite = props.sites?.find(site => site.reference === qrCode)
      if (!selectedSite) {
        Alert.alert(t('no_cs_by_ref'));
      } else {
        props.onSearch(selectedSite)
        props.onClose()
      }
    } else {
      Alert.alert(t('error.point.empty'));
    }
  }

  // QR code scanner component with dynamic flash mode
  const CustomQrCodeScanner = () => (
    <QRCodeScanner
      onRead={handleReadQRCode}
      cameraStyle={{ height: windowHeight }}
      flashMode={light ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.auto}
      cameraProps={{ type: RNCamera.Constants.Type.back }}
    />
  );

  // Handle right icon press (e.g., flashlight)
  const handleRightIconPress = (index: number) => {
    if (index === 0) {
      toggleLight();
    } else if (index === 1) {
      handleChoosePhoto();
    }
  };

  // Function to handle choosing a photo and detecting QR code from it
  const handleChoosePhoto = () => {
    chooseImage((data) => {
      RNQRGenerator.detect({
        uri: data.formData.getParts()[0]?.uri
      })
        .then(response => {
          const { values } = response;
          if (values.length > 0) {
            searchSite(values[0]);
          } else {
            Alert.alert(t('no_cs_by_ref'));
          }
        })
        .catch(error => Alert.alert(t('no_cs_by_ref')));
    });
  };

  // Render the component
  return (
    <Modal animationType="slide" transparent={false} visible={props.modalVisible}>
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
      {/* Content */}
      <View style={flexBoxStyle.flexCenter}>
        <CustomQrCodeScanner />
      </View>
    </Modal>
  );
};

export default SearchSiteWithQrCode;
