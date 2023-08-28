import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Button, Modal } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { HeaderModal } from '../HeaderModal';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { flexBoxStyle } from '@styles/flexBoxStyle';
import { t } from 'i18next';
import { windowHeight } from '@styles/dimension';
import * as utils from '@utils/index';

interface Props {
  modalVisible: boolean;
  onClose: () => void;
  sites: Site[] | null;
  onSearch: (site: Site) => void;
  onRightIconPress?: (index: number) => void; // Function for handling icon presses
}

const SearchSiteWithQrCode = (props: Props) => {
  const [qrValue, setQrValue] = useState('');
  const [light, setLight] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const scannerRef = useRef(null);

  const toggleLight = () => {
    setLight(!light);
  };

  const handleReadQRCode = (e) => {
    setShowDialog(true);
    setQrValue(e.data);
  };

  const scanAgain = () => {
    if (scannerRef.current) {
      scannerRef.current.reactivate();
    }
    setShowDialog(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}>
      <HeaderModal
       title={t('txt.scan')}
        onLeftPress={props.onClose}
        leftLabel={t('txt.annuler')}
        rightIcon={[utils.images.flashcon, utils.images.fileIcon]}
        onRightIconPress={[
          () => {
            // Handle the press of the first icon (utils.images.flashcon)
            console.log('Pressed the first icon');
          },
          () => {
            // Handle the press of the second icon (utils.images.fileIcon)
            console.log('Pressed the second icon');
          },
        ]} />
      <View style={flexBoxStyle.flexCenter}>
        <QRCodeScanner
          ref={scannerRef}
          onRead={handleReadQRCode}
          containerStyle={{ backgroundColor: 'yellow' }}
          cameraStyle={{ height: windowHeight }}
          flashMode={light ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.auto}
          bottomContent={
            <Button
              title={`Flash ${light ? 'OFF' : 'ON'}`}
              onPress={toggleLight}
            />
          }
        />

        {/* {showDialog && (
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 25 }}>Scanned QR:</Text>
              <Text style={{ fontSize: 25 }}>{qrValue}</Text>
              <TouchableOpacity onPress={scanAgain}>
                <Text style={{ color: 'blue', fontSize: 20 }}>Scan Again</Text>
              </TouchableOpacity>
            </View>
          )} */}
      </View>
    </Modal>
  );
};

export default SearchSiteWithQrCode;
