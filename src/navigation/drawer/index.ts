import {Dispatch} from 'redux';

import {AppState} from '../../redux_configuration/appState';
import {MenuLeft} from './menuLeft';
import {connect} from 'react-redux';
import {Profile} from '@contexts/profileContext/domain/entity/profile';
import {
  loadLocalProfileErrorSelector,
  loadLocalProfileSelector,
  localProfileSelector,
} from '@contexts/profileContext/useCases/LoadLocalProfile/selectors';
import {LoadLoacalProfileActionDbTypes} from '@contexts/profileContext/useCases/LoadLocalProfile/actionType';
import {loadLocalProfile} from '@contexts/profileContext/useCases/LoadLocalProfile/action';

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
