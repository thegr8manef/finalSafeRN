import { AppState } from '@redux/appState';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { VisitFlashContainer } from './visitsFlash.container';
import { FlashActionTypes } from '../../../useCases/saveFlash/actionTypes';
import { SaveFlash,  } from '../../../useCases/saveFlash/action';
import { saveFashErrorSelector } from '../../../useCases/saveFlash/selectors';
import { LoadSites } from '@contexts/visiteContext/useCases/LoadSites/action';
import { LoadSitesActionTypes } from '@contexts/visiteContext/useCases/LoadSites/actionTypes';
import { Site } from '../../../domain/entity/Site';
import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import { Remarque } from '@common/adapters/secondaries/db/entity/Remarque';
import { SaveVisit } from '@contexts/visiteContext/useCases/SaveVisit/action';
import { VisitActionTypes } from '@contexts/visiteContext/useCases/SaveVisit/actionTypes';
import {
  sitesSelector,
  loadSitesErrorSelector,
  loadingSitesSelector,
} from '@contexts/visiteContext/useCases/LoadSites/selectors';

interface StateToPropsType {
  errorVisits: string | undefined;
  error: string | undefined;
  sites: Site[] | null;
  loading: boolean;
}
interface DispatchToPropsType {
  saveFlash: (data: VisitFlash) => void;
  saveVisit: (data: Remarque) => void;
  loadSites: () => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  errorVisits: saveFashErrorSelector(state),
  error: loadSitesErrorSelector(state),
  sites: sitesSelector(state),
  loading: loadingSitesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  saveFlash: (data: VisitFlash): FlashActionTypes => dispatch(SaveFlash(data)),
  saveVisit: (data: Remarque): VisitActionTypes => dispatch(SaveVisit(data)),
  loadSites: (): LoadSitesActionTypes => dispatch(LoadSites())
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitFlashContainer);
