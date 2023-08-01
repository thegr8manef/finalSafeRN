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
}
interface DispatchToPropsType {
}
const mapStateToProps = (state: AppState): StateToPropsType => ({

});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitsContainer);
