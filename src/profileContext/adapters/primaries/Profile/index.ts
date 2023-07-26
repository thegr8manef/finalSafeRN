import {connect} from 'react-redux';
import {ProfileContainer} from './profile.container';
import {Profile} from '../../../domain/entity/profile';
import {profileSelector} from '../../../useCases/Login/selectors';
import {AppState} from '../../../../redux_configuration/appState';
import {User} from '../../../domain/entity/user';
import {
  loadUserInfoSuccessSelector,
  loadUserInfoErrorSelector,
} from '../../../useCases/ProfileDetails/selectors';
import {Dispatch} from 'redux';

import {LoadProfileDetailsActionTypes} from '../../../useCases/ProfileDetails/actionType';
import {loadProfileDetails} from '../../../useCases/ProfileDetails/action';
import {loadingDataSelector} from '../../../../synchronisationContext/useCases/LoadData/selectors';
import {loadingSaveSelector} from '../../../../synchronisationContext/useCases/SaveInLocal/selectors';

interface StateToPropsType {
  profile: Profile | undefined;
  loading: boolean;
  error: string | undefined;
  user: User | undefined;
}

interface DispatchToPropsType {
  loadProfileDetails: (accessToken: string) => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  profile: profileSelector(state),
  loading: loadingSaveSelector(state),
  error: loadUserInfoErrorSelector(state),
  user: loadUserInfoSuccessSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadProfileDetails: (accessToken: string): LoadProfileDetailsActionTypes =>
    dispatch(loadProfileDetails(accessToken)),
});

export const ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
