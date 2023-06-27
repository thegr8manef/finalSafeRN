import {Dispatch} from 'redux';
import {Profile} from '../../profileContext/domain/entity/profile';
import {
  loadUserInfoDbSelector,
  loadUserInfoErrorDbSelector,
  loadUserInfoSuccessDbSelector,
} from '../../profileContext/useCases/ProfileDetailsDB/selectors';
import {AppState} from '../../redux_configuration/appState';
import {LoadProfileDetailsActionDbTypes} from '../../profileContext/useCases/ProfileDetailsDB/actionType';
import {MenuLeft} from './menuLeft';
import {loadProfileDetailsDb} from '../../profileContext/useCases/ProfileDetailsDB/action';
import {connect} from 'react-redux';

interface StateToPropsType {
  profile: Profile | undefined;
  loading: boolean;
  error: string | undefined;
}

interface DispatchToPropsType {
  loadProfileDetailsDb: () => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  profile: loadUserInfoSuccessDbSelector(state),
  loading: loadUserInfoDbSelector(state),
  error: loadUserInfoErrorDbSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadProfileDetailsDb: (): LoadProfileDetailsActionDbTypes =>
    dispatch(loadProfileDetailsDb()),
});

export const MenuLeftPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuLeft);
