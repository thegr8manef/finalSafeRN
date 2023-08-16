import {AppState} from '@redux/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitFlashContainer} from './visitsFlash.container';
import {Flash} from '../../../domain/entity/Flash';
import {FlashActionTypes} from '../../../useCases/saveFlash/actionTypes';
import {SaveFlash} from '../../../useCases/saveFlash/action';
import {saveFashErrorSelector} from '../../../useCases/saveFlash/selectors';
import {
  sitesSelector,
  loadSitesErrorSelector,
  loadingSitesSelector,
  sitesSelector,
  loadSitesErrorSelector,
  loadingSitesSelector,
} from '@contexts/visiteContext/useCases/LoadSites/selectors';
import {LoadSites} from '@contexts/visiteContext/useCases/LoadSites/action';
import {LoadSitesActionTypes} from '@contexts/visiteContext/useCases/LoadSites/actionTypes';
import {Site} from '../../../domain/entity/Site';
//TODO:FIX relative path aren't work well for selectors and actions
interface StateToPropsType {
  errorVisits: string | undefined;
  error: string | undefined;
  sites: Site[] | null;
  loading: boolean;
}
interface DispatchToPropsType {
  saveFlash: (data: Flash) => void;
  loadSites: () => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  errorVisits: saveFashErrorSelector(state),
  error: loadSitesErrorSelector(state),
  sites: sitesSelector(state),
  loading: loadingSitesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  saveFlash: (data: Flash): FlashActionTypes => dispatch(SaveFlash(data)),
  loadSites: (): LoadSitesActionTypes => dispatch(LoadSites()),
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitFlashContainer);
