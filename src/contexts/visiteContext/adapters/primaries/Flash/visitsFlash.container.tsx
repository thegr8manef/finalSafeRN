import React, {useEffect, useState, useMemo} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import * as utils from '@utils/index';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '@navigConfig/navigation.types';
import {RadioGroup} from 'react-native-radio-buttons-group';
import {CommentModal} from '../components/CommentModal';
import {ImageController} from '../components/ImageController';
import {Site} from '../../../domain/entity/Site';
import {SitesList} from '../components/SitesList';
import colors from '@assets/colors';
import { Observation } from '../components/ObservationView';
import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';

interface Props {
  navigation: StackNavigationProp<StackParamList>;
  loadingVisits: boolean;
  errorVisits: string | undefined;
  flash: VisitFlash | undefined;
  saveFlash: (data: VisitFlash) => void;
  error: string | undefined;
  sites: Site[] | null;
  loading: boolean;
  LoadSites: () => void;
  navigationDrawer: any;
}
export const VisitFlashContainer = (props: Props) => {
  const [mount, setMount] = useState(false);
  const [commentaires, setcommentaires] = useState('');
  const [levelId, setLevelId] = useState(0);
  const [btnPositive, setbtnPositive] = useState(false);
  const [btnNegative, setbtnNegative] = useState(false);
  const [images, setimages] = useState([]);
  const [code, setCode] = useState('');
  const [clicked, setclicked] = useState(false);
  const [onChangeText, setonChangeText] = useState(false);
  const [sitesList, setSitesList] = useState(props.sites)
  const [selectedSite, setSelectedSite]= useState(null)

  const {t} = useTranslation();
  const OptionEcartSansRisque = useMemo(
    () => [
      {
        id: '1',
        label: t('txt_i_know_i_can_i_act'),
        value: '1',
        color: utils.colors.gray90,
        labelStyle: styles.radioButton1,
      },
      {
        id: '2',
        label: t('txt_i_know_i_can_not_i_report'),
        value: '2',
        color: utils.colors.gray90,
        labelStyle: styles.radioButton2,
      },
      {
        id: '3',
        label: t('txt_i_do_not_know_i_report'),
        value: '3',
        color: utils.colors.gray90,
        labelStyle: styles.radioButton3,
      },
    ],
    [],
  );
  useEffect(() => {
    setMount(true);
  }, []);  

useEffect(()=>{
  props.LoadSites()
},[])
 
useEffect(() =>{
  if(props.sites != null)
  setSitesList(props.sites)
},[props.sites])

const createTwoButtonAlert = () =>
Alert.alert('', t('etes_vous_sur_de_vouloir_sauvegarder')!!, [
  {
    text: 'NON',
    style: 'cancel',
  },
  {
    text: 'OUI',
    onPress: () => [
      props.saveFlash(flash),
      props.navigation.jumpTo(t('txt.visites')),
    ],
  },
]);

  const flash = new VisitFlash(commentaires, images, levelId);


  const SaveData = () => {
    if (!btnNegative && !btnPositive) {
      Alert.alert('', t('neg_ou_pos')!!);
    } else {
      if (commentaires === '') {
        Alert.alert('', t('msg.saisr.commentaires.flash')!!);
      } else {
          createTwoButtonAlert();
      }
    }
  };

  if (clicked) {
   const site = sitesList?.find(site => site.reference === code)
   console.log("site",site)
   if(site)
   {
      setSelectedSite(site)
   }  
    setclicked(false);
  }
  if (onChangeText) {
    const listSites = sitesList?.some(listSites => listSites.name)
    console.log("site",site)
    if(site)
    {
       setSelectedSite(site)
    }  
     setclicked(false);
   }
 

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.ContainerChantier}>
          <Text style={styles.selectionnerText}>
            {t('selectionner_le_chantier_par')} 
          </Text>
          <View style={styles.sitesListContainer}>
            <SitesList
              loading={props.loading}
              setcodeByChantier={setCode}
              codeByChantier={code}
              setclicked={setclicked}
              clicked={clicked}
              codeExist={selectedSite?.reference}
              nom_chantier={setclicked?.name}></SitesList>
          </View>
        </View>

      <Observation 
        setbtnPositive={setbtnPositive} 
        setbtnNegative={setbtnNegative} 
        btnPositive={btnPositive} 
        btnNegative={btnNegative}/>

        {btnNegative ? (
          <View style={styles.RadioContainer}>
            <Text style={[styles.selectionnerText, styles.toCorroctText]}>
              {t('txt_evaluation_visit_flash')}
            </Text>
            <RadioGroup
              radioButtons={OptionEcartSansRisque}
              onPress={setLevelId}
              selectedId={levelId}
              layout="column"
              containerStyle={styles.radioGroupContainer}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
            />
          </View>
        ) : null}

        <View style={styles.CommentairesContainer}>
          <Text>{t('txt.commentaires')} :</Text>
          <CommentModal
            commentaires={commentaires}
            setcommentaires={setcommentaires}
          />
        </View>

        <View style={styles.ImageContainer}>
          {Object.keys(images).length === 0 || images === null ? (
            <Text style={styles.ImageContainerText}>
              {t('txt.aucune.image')}
            </Text>
          ) : (
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={images}
              renderItem={({item, index}) => (
                <Image
                  source={{uri: item}}
                  key={index}
                  style={styles.imageStyle}
                />
              )}
            />
          )}
        </View>

      </ScrollView>

      <View style={styles.BottomNav}>
        <View style={styles.DividerTwoImageBottomNav}>
          <ImageController images={images} setimages={setimages} />
          <View style={styles.dividerBottomNav} />
          <View style={styles.dividerBottomNav}>
            <Pressable
              android_ripple={styles.androidRipple}
              onPress={() => SaveData()}>
              <Text style={styles.buttonBottomnav}>
                {t('txt.sauvegarder.remarque')}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      
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
  logoImage3: {
    width: 10,
    height: 10,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: '7%',
  },
  logoImage4: {
    width: '90%',
    height: '40%',
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginEnd: '7%',
    marginTop: 3,
  },
  logoImage5: {
    width: 30,
    height: 25,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 120,
    height: 120,
    margin: 20,
    borderColor: utils.colors.primary,
    borderWidth: 2,
  },
  imageBorderStyle: {
    width: 105,
    height: 105,
    margin: 0,
    borderWidth: 2,
    borderColor: utils.colors.primary,
  },
  radioButton1: {
    backgroundColor: utils.colors.green300,
    width: '85%',
    fontSize: 15,
    color : colors.textColor,
    paddingLeft : 10,
    paddingRight : 10,
    paddingTop :5,
    paddingBottom : 5
  },
  radioButton2: {
    backgroundColor: utils.colors.yellow900,
    width: '85%',
    fontSize: 15,
    color : colors.textColor,
    paddingLeft : 10,
    paddingRight : 10,
    paddingTop :5,
    paddingBottom : 5
  },
  radioButton3: {
    backgroundColor: utils.colors.pink,
    width: '85%',
    fontSize: 15,
    color : colors.textColor,
    paddingLeft : 10,
    paddingRight : 10,
    paddingTop :5,
    paddingBottom : 5
  },
  buttonBottomnav: {
    textAlign: 'center',
    marginTop: '13%',
    fontSize: 18,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerBottomNav: {
    flex: 1,
    backgroundColor: 'white',
  },
  BottomNav: {
    height: 55,
    backgroundColor: 'white',
    borderTopColor: utils.colors.gris200,
    borderTopWidth: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    
  },
  DividerTwoImageBottomNav: {
    flex: 1,
    flexDirection: 'row',
  },
  ImageContainerText: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    height: 160,
    backgroundColor: utils.colors.gris100,

    marginBottom : 80
  },
  CommentairesContainer: {
    height: 70,
    flexDirection: 'column',
    marginStart: 25,
    marginTop: 70,
  },
  RadioContainer: {
    height: 130,
    marginStart: 25,
    marginTop: 5,
  },
  DividerObservation: {
    flex: 0.01,
    backgroundColor: utils.colors.gris200,
    marginVertical: 10,
  },
  ContainerObservation: {
    height: 85,
    borderTopColor: utils.colors.primary,
    borderTopWidth: 3,
    backgroundColor: utils.colors.gris100,
    flexDirection: 'row',
    marginHorizontal: 25,
  },
  ContainerChantier: {
    height: 220,
    margin: 30,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
    height: 50,
  },
  title: {
    fontSize: 16,
  },
  selectionnerText: {
    color: utils.colors.gris200,
    fontWeight: '700',
    fontSize: 14,
  },
  sitesListContainer: {
    flex: 1,
    marginTop: 20,
  },
  toCorroctText: {
    marginTop: 30,
    marginBottom: 15,
  },
});
