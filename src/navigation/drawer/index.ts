import {Dispatch} from 'redux';
import {Profile} from '../../profileContext/domain/entity/profile';
import {
  loadLocalProfileSelector,
  loadLocalProfileErrorSelector,
  localProfileSelector,
} from '../../profileContext/useCases/LoadLocalProfile/selectors';
import {AppState} from '../../redux_configuration/appState';
import {LoadLoacalProfileActionDbTypes} from '../../profileContext/useCases/LoadLocalProfile/actionType';
import {MenuLeft} from './menuLeft';
import {loadLocalProfile} from '../../profileContext/useCases/LoadLocalProfile/action';
import {connect} from 'react-redux';

interface StateToPropsType {
  profile: Profile | undefined;
  loading: boolean;
  error: string | undefined;
}

interface DispatchToPropsType {
  loadProfileLocal: () => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  profile: localProfileSelector(state),
  loading: loadLocalProfileSelector(state),
  error: loadLocalProfileErrorSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadProfileLocal: (): LoadLoacalProfileActionDbTypes =>
    dispatch(loadLocalProfile()),
});

export const MenuLeftPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuLeft);
