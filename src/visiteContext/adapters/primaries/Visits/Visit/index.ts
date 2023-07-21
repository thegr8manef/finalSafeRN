import {AppState} from '../../../../../redux_configuration/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitsContainer} from './visits.container';
import {
  loadChantierErrorSelector,
  loadChantierSelector,
  loadChantierSuccessSelector,
} from '../../../../useCases/LoadChantierByCode/selectors';
import {LoadChantier} from '../../../../useCases/LoadChantierByCode/action';
import {LoadChantierActionTypes} from '../../../../useCases/LoadChantierByCode/actionTypes';

interface StateToPropsType {
  errorLoadingChantier: string | undefined;
  LoadingChantierSuccess: string | undefined;
  LoadingChantier: string | undefined;
}
interface DispatchToPropsType {
  LoadChantier: (chantier: string) => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  errorLoadingChantier: loadChantierErrorSelector(state),
  LoadingChantierSuccess: loadChantierSuccessSelector(state),
  LoadingChantier: loadChantierSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  LoadChantier: (chantier: string): LoadChantierActionTypes =>
    dispatch(LoadChantier(chantier)),
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitsContainer);
