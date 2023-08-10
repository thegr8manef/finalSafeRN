import {connect} from 'react-redux';
import {Profile} from '../../../domain/entity/profile';
import {profileSelector} from '../../../useCases/Login/selectors';
import {AppState} from '../../../../redux_configuration/appState';
import {User} from '../../../domain/entity/user';
import {Dispatch} from 'redux';
import {LoadProfileDetailsActionTypes} from '../../../useCases/ProfileDetails/actionType';
import {loadProfileDetails} from '../../../useCases/ProfileDetails/action';
import {updateLocalProfileLoadingSelector} from '../../../useCases/UpdateLocalProfile/selector';
import {
  loadUserInfoSuccessSelector,
  loadUserInfoErrorSelector,
} from '../../../useCases/ProfileDetails/selectors';
import { ProfileContainer } from './profile.container';
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
  loading: updateLocalProfileLoadingSelector(state),
  error: loadUserInfoErrorSelector(state),
  user: loadUserInfoSuccessSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadProfileDetails: (accessToken: string): LoadProfileDetailsActionTypes =>
    dispatch(loadProfileDetails(accessToken)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export type ProfilePageProps = PropsFromRedux;

export const ProfilePage = connector(ProfileContainer);
