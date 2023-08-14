import {AppState} from '@redux/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitFlashContainer} from './visitsFlash.container';
import {Flash} from '../../../domain/entity/Flash';
import {FlashActionTypes} from '../../../useCases/saveFlash/actionTypes';
import {SaveFlash} from '../../../useCases/saveFlash/action';
import {saveFashErrorSelector} from '../../../useCases/saveFlash/selectors';
import {
  siteSelector,
  loadSiteByCodeErrorSelector,
  loadingSiteByCodeSelector,
} from '../../../useCases/LoadSiteByCode/selectors';
import {LoadSiteByCode} from '../../../useCases/LoadSiteByCode/action';
import {LoadSiteActionTypes} from '../../../useCases/LoadSiteByCode/actionTypes';
import {Site} from '../../../domain/entity/Site';

interface StateToPropsType {
  errorVisits: string | undefined;
  error: string | undefined;
  site: Site | null;
  loading: boolean;
}
interface DispatchToPropsType {
  saveFlash: (data: Flash) => void;
  loadSiteByCode: (code: string) => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  errorVisits: saveFashErrorSelector(state),
  error: loadSiteByCodeErrorSelector(state),
  site: siteSelector(state),
  loading: loadingSiteByCodeSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  saveFlash: (data: Flash): FlashActionTypes => dispatch(SaveFlash(data)),
  loadSiteByCode: (code: string): LoadSiteActionTypes => dispatch(LoadSiteByCode(code)),
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitFlashContainer);
