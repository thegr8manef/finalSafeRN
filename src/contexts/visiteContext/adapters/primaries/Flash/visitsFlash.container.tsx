import React, { useEffect, useState } from 'react';
import * as utils from '@utils/index';
import { VisitFlash } from '../../../domain/entity/VisitFlash';
import { Site } from '../../../domain/entity/Site';
import { SiteInfo } from '../components/siteInfo/siteInfo';
import { ObservationInfo } from '../components/observation/observationInfo';
import { CommentInfo } from '../components/comment/commentInfo';
import { PreviewImages } from '../components/images/previewImages';
import { BottomFooter } from '../components/BottomFooter';
import { chooseImage, launchCamera } from '@utils/utilsCamera';
import { t } from 'i18next';
import {
  StyleSheet,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import { Remarque } from '@common/adapters/secondaries/db/entity/Remarque';
import { Photo } from '@contexts/visiteContext/domain/entity/Photo';
import { v5 as uuidv5 } from 'uuid';
import { CHARACTERS, NAMESPACE } from '@common/constants';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';

interface Props {
  navigation: any;
  loadingVisits: boolean;
  errorVisits: string | undefined;
  flash: VisitFlash | undefined;
  saveFlash: (data: VisitFlash) => void;
  saveVisit: (data: Visit) => void;
  error: string | undefined;
  sites: Site[] | null;
  loading: boolean;
  loadSites: () => void;
  navigationDrawer: any;
}

export const VisitFlashContainer = (props: Props) => {

  const [comment, setComment] = useState<string>('');
  const [idRemarque, setIdRemarque] = useState<string>();
  const [idVisits, setIdVisits] = useState<string>();
  const [levelId, setLevelId] = useState<number | null>(null);
  const [images, setImages] = useState<Photo[]>([]);
  const [selectedSite, setSelectedSite] = useState<Site | undefined>(undefined)
  const content = [
    { type: "image", source: utils.images.takePhotoIcon, onPress: () => { captureImage() /* Handle image press */ } },
    { type: "image", source: utils.images.fileIcon, onPress: () => { chooseFile() /* Handle image press */ } },
  ];

  useEffect(() => {
    props.loadSites();
    const name_id_remarque = Date.now().toString() + Math.random().toString();
    setIdRemarque(uuidv5(name_id_remarque, NAMESPACE))

    const name_id_visits = Date.now().toString() + Math.random().toString();
    setIdVisits(uuidv5(name_id_visits, NAMESPACE))
  }, [])


  function generateID() {
    let ID = "";

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
        ID += CHARACTERS[randomIndex];
      }

      if (i < 3) {
        ID += "-";
      }
    }

    return ID;
  }

  const addImage = (image: Photo) => {
    setImages([...images, image]);
  };


  const captureImage = async () => {
    launchCamera()
      .then((data) => {
        if (
          data.assets &&
          data.assets.length > 0 &&
          data.assets[0].uri
        )
          var image = new Photo(generateID(), data.assets[0].fileName, data.assets[0].uri, idRemarque, idVisits, false, 0, "test-id-formation", false, false, 0);
        addImage(image!!);
      })
      .catch((error) => {
        // Handle errors here
      });
  };

  const chooseFile = () => {
    chooseImage()
      .then((data) => {
        if (data.getParts()?.length > 0) {
          var image = new Photo(generateID(), data.getParts()[0]?.fileName, data.getParts()[0]?.uri, idRemarque, idVisits, false, 0, "test-id-formation", false, false, 0);
          addImage(image!!);
        }
      })
  };

  const saveVisit = () => {
    if (validVisit()) {
      const flash = new VisitFlash(idRemarque!!, comment, images, levelId!!, selectedSite?.reference!!, 3);

      Alert.alert('', t('etes_vous_sur_de_vouloir_sauvegarder')!, [
        {
          text: 'NON',
          style: 'cancel',
        },
        {
          text: 'OUI',
          onPress: () => {
            props.saveFlash(flash);

            props.navigation.navigate('visites');
          }
        },
      ]);
    }
  }

  const validVisit = (): boolean => {
    if (levelId === null) {
      Alert.alert('', t('neg_ou_pos')!);
      return false
    } else {
      if (comment === '') {
        Alert.alert('', t('msg.saisr.commentaires.flash')!);
        return false
      } else {
        return true
      }
    }
  };

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <SiteInfo sites={props.sites} selectedSite={selectedSite} setSelectedSite={setSelectedSite} selectedIdSite={''} />
        <ObservationInfo onSave={(levelId) => {
          setLevelId(levelId)
        }} />
        <CommentInfo comment={comment} setComment={(comment: string) => setComment(comment)} title={t('txt.commentaires.without.start')} label={t('txt.commentaires')} />
        <PreviewImages images={images} />
      </ScrollView>

      <BottomFooter confirmPress={saveVisit} confirmText={t('txt.sauvegarder.remarque')} content={content} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: utils.colors.white,
  },
  scrollViewContainer: {
    flexGrow: 1,
    flexDirection: 'column'
  },
});
