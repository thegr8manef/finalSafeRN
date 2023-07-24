import {AppState} from '../../../../../redux_configuration/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitsContainer} from './visits.container';
import {
  loadChantierByCodeErrorSelector,
  loadingChantierByCodeSelector,
  loadChantierByCodeSuccessSelector,
} from '../../../../useCases/LoadChantierByCode/selectors';
import {LoadChantierByCode} from '../../../../useCases/LoadChantierByCode/action';
import {LoadChantierActionTypes} from '../../../../useCases/LoadChantierByCode/actionTypes';
import {Chantier} from '../../../../domain/entity/Chantier';

interface StateToPropsType {
  errorLoadingChantierByCode: string | undefined;
  LoadingChantierByCodeSuccess: Chantier | null;
  LoadingChantierByCode: boolean;
}
interface DispatchToPropsType {
  LoadChantierByCode: (code: string) => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  errorLoadingChantierByCode: loadChantierByCodeErrorSelector(state),
  LoadingChantierByCodeSuccess: loadChantierByCodeSuccessSelector(state),
  LoadingChantierByCode: loadingChantierByCodeSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  LoadChantierByCode: (code: string): LoadChantierActionTypes =>
    dispatch(LoadChantierByCode(code)),
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitsContainer);
