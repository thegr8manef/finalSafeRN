import {AppState} from '../../../../../redux_configuration/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitFlashContainer} from './visitsFlash.container';
import {Flash} from '../../../../domain/entity/Flash';
import {
  flashErrorSelector,
  flashSavingSelector,
} from '../../../../useCases/Flash/selectors';
import {FlashActionTypes} from '../../../../useCases/Flash/actionTypes';
import {SaveFlash} from '../../../../useCases/Flash/action';

interface StateToPropsType {
  savingVisits: Flash | undefined;
  errorVisits: string | undefined;
}
interface DispatchToPropsType {
  SaveFlash: (data : Flash) => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  savingVisits: flashSavingSelector(state),
  errorVisits: flashErrorSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  SaveFlash: (data : Flash): FlashActionTypes => dispatch(SaveFlash(data)),
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitFlashContainer);
