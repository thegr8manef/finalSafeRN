import {AppState} from '@redux/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitFlashContainer} from './visitsFlash.container';
import {Flash} from '../../../domain/entity/Flash';
import {FlashActionTypes} from '../../../useCases/saveFlash/actionTypes';
import {SaveFlash} from '../../../useCases/saveFlash/action';
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

interface StateToPropsType {
  errorVisits: string | undefined;
  error: string | undefined;
  sites: Site[] | null;
  loading: boolean;
}
interface DispatchToPropsType {
  loadSites: () => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  errorVisits: saveFashErrorSelector(state),
  error: loadSitesErrorSelector(state),
  sites: sitesSelector(state),
  loading: loadingSitesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadSites: (): LoadSitesActionTypes => dispatch(LoadSites()),
});

export const VisitsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitsContainer);
