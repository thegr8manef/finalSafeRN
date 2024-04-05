import {Site} from '@contexts/visiteContext/domain/entity/Site';
import {ScreenProps} from 'react-native-screens';

export type StackParamList = {
  Login: undefined;
  Profile: undefined;
  Home: undefined;
  Splash: undefined;
  PreventionVisit: StackVisitsType;
  HierarchicalVisit: StackVisitsType;
  ConformityVisit: StackVisitsType;
  CurrentVisit: {};
  Settings: undefined;
  CheckSiteScreen: {
    sites: Site[] | undefined;
    title?: string;
    screenToNavigate: ScreenProps;
  };
};

export type StackParamVisits = {
  PreventionVisit: StackVisitsType;
  HierarchicalVisit: StackVisitsType;
  ConformityVisit: StackVisitsType;
};

export type StackVisitsType = {
  selectedSite: string;
  selectedSiteName: string;
  selectedSiteRef: string;
};
