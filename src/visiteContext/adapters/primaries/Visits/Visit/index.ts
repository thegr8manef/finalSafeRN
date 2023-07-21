import {AppState} from '../../../../../redux_configuration/appState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitsContainer} from './visits.container';
import {Flash} from '../../../../domain/entity/Flash';
import {flashErrorSelector} from '../../../../useCases/Flash/selectors';
import {FlashActionTypes} from '../../../../useCases/Flash/actionTypes';
import {SaveFlash} from '../../../../useCases/Flash/action';
import {
  searchChantierErrorSelector,
  searchChantierSelector,
} from '../../../../useCases/SearchChantierByCode/selectors';
import {SearchChantier} from '../../../../useCases/SearchChantierByCode/action';
import {SearchChantierActionTypes} from '../../../../useCases/SearchChantierByCode/actionTypes';

interface StateToPropsType {
  errorSearchChantier: string | undefined;
  SearchChantierSuccess: string | undefined;
}
interface DispatchToPropsType {
  SearchChantier: (chantier: string) => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
  errorSearchChantier: searchChantierErrorSelector(state),
  SearchChantierSuccess: searchChantierSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  SearchChantier: (chantier: string): SearchChantierActionTypes =>
    dispatch(SearchChantier(chantier)),
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitsContainer);
