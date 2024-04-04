import {Site} from '@contexts/visiteContext/domain/entity/Site';

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
