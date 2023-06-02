import {AppState} from '../../../../../redux_configuration/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitFlashContainer} from './visitsFlash.container';
import {Flash} from '../../../../domain/entity/Flash';
import {
  flashErrorSelector,
  flashLoadingSelector,
  flashLoadSelector,
} from '../../../../useCases/Flash/selectors';
import {FlashActionTypes} from '../../../../useCases/Flash/actionTypes';
import {LoadFlash} from '../../../../useCases/Flash/action';

interface StateToPropsType {
  loadingVisits: boolean;
  errorVisits: string | undefined;
  flash: Flash | undefined;
}
interface DispatchToPropsType {
  LoadFlash: () => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  loadingVisits: flashLoadingSelector(state),
  errorVisits: flashErrorSelector(state),
  flash: flashLoadSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  LoadFlash: (): FlashActionTypes => dispatch(LoadFlash()),
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitFlashContainer);
