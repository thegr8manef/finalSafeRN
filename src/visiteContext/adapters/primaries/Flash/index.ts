import {AppState} from '../../../../redux_configuration/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitFlashContainer} from './visitsFlash.container';
import {Flash} from '../../../domain/entity/Flash';
import {FlashActionTypes} from '../../../useCases/saveFlash/actionTypes';
import {SaveFlash} from '../../../useCases/saveFlash/action';
import {saveFashErrorSelector} from '../../../useCases/saveFlash/selectors';

interface StateToPropsType {
  errorVisits: string | undefined;
}
interface DispatchToPropsType {
  saveFlash: (data: Flash) => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  errorVisits: saveFashErrorSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  saveFlash: (data: Flash): FlashActionTypes => dispatch(SaveFlash(data)),
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitFlashContainer);
