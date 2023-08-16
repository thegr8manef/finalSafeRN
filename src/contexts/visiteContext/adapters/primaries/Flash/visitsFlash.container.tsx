import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import * as utils from '@utils/index';
import {Flash} from '../../../domain/entity/Flash';
import {useTranslation} from 'react-i18next';
import {Site} from '../../../domain/entity/Site';
import colors from '@assets/colors';
import { SiteInfo } from '../components/siteInfo/siteInfo';
import { ObservationInfo } from '../components/observation/observationInfo';
import { CommentInfo } from '../components/comment/commentInfo';
import { PreviewImages } from '../components/images/previewImages';
import { FooterVisitFlash } from '../components/footerVisitFlash';

interface Props {
  navigation: Partial<StackNavigationProp<StackParamList>>;
  navigation: Partial<StackNavigationProp<StackParamList>>;
  loadingVisits: boolean;
  errorVisits: string | undefined;
  flash: Flash | undefined;
  saveFlash: (data: Flash) => void;
  error: string | undefined;
  sites: Site[] | null;
  sites: Site[] | null;
  loading: boolean;
  loadSites: () => void;
  navigationDrawer: any;
}
export const VisitFlashContainer = (props: Props) => {
  const {t} = useTranslation();
  const [comment, setComment] = useState<string>('');
  const [levelId, setLevelId] = useState<number | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [selectedSite, setSelectedSite]= useState<Site | undefined>(undefined)

  useEffect(()=>{
    props.loadSites()
  },[])
 
  const addImage = (image: string) => {
    setImages([...images, image]);
  };

  const saveVisit= () =>{
    if(validVisit()){
      const flash = new Flash(comment, images, levelId);
      Alert.alert('', t('etes_vous_sur_de_vouloir_sauvegarder')!, [
        {
          text: 'NON',
          style: 'cancel',
        },
        {
          text: 'OUI',
          onPress: () => [
            props.saveFlash(flash),
            props.navigation.navigate('visites'),
          ],
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
        <SiteInfo sites={props.sites} selectedSite={selectedSite} setSelectedSite={setSelectedSite}/>

        <ObservationInfo onSave={(levelId) => {
          setLevelId(levelId)
        }} />

        <CommentInfo comment={comment} setComment={(comment: string)=>setComment(comment) } />


        <PreviewImages images={images}/>

      </ScrollView>

      <FooterVisitFlash addImages={addImage} saveVisit={saveVisit} />

    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer:{
    flexGrow: 1
  },
  radioGroupContainer:{
    alignItems: 'flex-start'
  },
  androidRipple:{
    color: utils.colors.gris300
  },
  container: {
    flex: 1,
    backgroundColor: utils.colors.white,
  },
  scrollViewContainer:{
    flexGrow: 1,
    flexDirection:'column'
  },
});
