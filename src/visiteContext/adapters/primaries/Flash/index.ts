import {AppState} from '../../../../redux_configuration/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitFlashContainer} from './visitsFlash.container';
import {Flash} from '../../../domain/entity/Flash';
import {FlashActionTypes} from '../../../useCases/saveFlash/actionTypes';
import {SaveFlash} from '../../../useCases/saveFlash/action';
import {saveFashErrorSelector} from '../../../useCases/saveFlash/selectors';
import {
  chantierSelector,
  loadChantierByCodeErrorSelector,
  loadingChantierByCodeSelector,
} from '../../../useCases/LoadChantierByCode/selectors';
import {LoadChantierByCode} from '../../../useCases/LoadChantierByCode/action';
import {LoadChantierActionTypes} from '../../../useCases/LoadChantierByCode/actionTypes';
import {Chantier} from '../../../domain/entity/Chantier';

interface StateToPropsType {
  errorVisits: string | undefined;
  error: string | undefined;
  chantier: Chantier | null;
  loading: boolean;
}
interface DispatchToPropsType {
  saveFlash: (data: Flash) => void;
  loadChantierByCode: (code: string) => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  errorVisits: saveFashErrorSelector(state),
  error: loadChantierByCodeErrorSelector(state),
  chantier: chantierSelector(state),
  loading: loadingChantierByCodeSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  saveFlash: (data: Flash): FlashActionTypes => dispatch(SaveFlash(data)),
  loadChantierByCode: (code: string): LoadChantierActionTypes => dispatch(LoadChantierByCode(code)),
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitFlashContainer);
