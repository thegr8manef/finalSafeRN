import {AppState} from '../../../../redux_configuration/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitsContainer} from './visits.container';
import {
  chantierSelector,
  loadChantierByCodeErrorSelector,
  loadingChantierByCodeSelector,
} from '../../../useCases/LoadSiteByCode/selectors';
import {LoadChantierByCode} from '../../../useCases/LoadSiteByCode/action';
import {LoadChantierActionTypes} from '../../../useCases/LoadSiteByCode/actionTypes';
import {Chantier} from '../../../domain/entity/Site';

interface StateToPropsType {
  // error: string | undefined;
  // chantier: Chantier | null;
  // loading: boolean;
}
interface DispatchToPropsType {
  // loadChantierByCode: (code: string) => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  // error: loadChantierByCodeErrorSelector(state),
  // chantier: chantierSelector(state),
  // loading: loadingChantierByCodeSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  // loadChantierByCode: (code: string): LoadChantierActionTypes =>
  //   dispatch(LoadChantierByCode(code)),
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitsContainer);
