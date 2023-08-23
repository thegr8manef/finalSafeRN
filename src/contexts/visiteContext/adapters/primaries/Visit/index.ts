import {AppState} from '@redux/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {saveFashErrorSelector} from '../../../useCases/saveFlash/selectors';
import {
  loadSitesErrorSelector,
  loadingSitesSelector,
  sitesSelector,
} from '@contexts/visiteContext/useCases/LoadSites/selectors';
import {LoadSites} from '@contexts/visiteContext/useCases/LoadSites/action';
import {LoadSitesActionTypes} from '@contexts/visiteContext/useCases/LoadSites/actionTypes';
import {Site} from '../../../domain/entity/Site';
import { VisitsContainer } from './visits.container';
import { Profile } from '@contexts/profileContext/domain/entity/profile';
import { localProfileSelector } from '@contexts/profileContext/useCases/LoadLocalProfile/selectors';
import { SendDataActionTypes } from '@contexts/synchronisationContext/useCases/SendData/actionTypes';
import { sendData } from '@contexts/synchronisationContext/useCases/SendData/actions';
import { loadingSendSelector } from '@contexts/synchronisationContext/useCases/SendData/selector';
import { Synchronisation } from '@contexts/synchronisationContext/domain/entity/Synchronisation';
import Remarque from '@contexts/visiteContext/domain/entity/Remarque';
import { loadRemarquesErrorSelector, loadRemarquesSelector } from '@contexts/visiteContext/useCases/LoadRemarque/selectors';
import { LoadRemarquesActionTypes } from '@contexts/visiteContext/useCases/LoadRemarque/actionTypes';
import { loadRemarques } from '@contexts/visiteContext/useCases/LoadRemarque/actions';



interface StateToPropsType {
  errorVisits: string    | undefined;
  error      : string    | undefined;
  sites      : Site[]    | null;
  loading    : boolean;
  profile    : Profile   | undefined
  remarques  : Remarque[]| undefined
}

interface DispatchToPropsType {
  loadSites    : () => void;
  loadRemarques : () => void
  sendData     : (accessToken : string, lastUpadet : string, synchronisation : Synchronisation) => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  errorVisits  : saveFashErrorSelector(state),
  error        : loadSitesErrorSelector(state) || loadRemarquesErrorSelector(state),
  sites        : sitesSelector(state),
  loading      : loadingSitesSelector(state)   || loadingSendSelector(state),
  profile      : localProfileSelector(state),
  remarques    : loadRemarquesSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadSites   : (): LoadSitesActionTypes     => dispatch(LoadSites()),
  loadRemarques: (): LoadRemarquesActionTypes => dispatch(loadRemarques()),
  sendData    : (accessToken : string, lastUpadet : string, synchronisation : Synchronisation): SendDataActionTypes  =>
   dispatch(sendData(accessToken, lastUpadet, synchronisation)),
});

export const VisitsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitsContainer);
