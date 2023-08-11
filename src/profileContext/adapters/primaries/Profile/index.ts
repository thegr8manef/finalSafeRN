import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '@redux/appState';
import {User} from '@profileContext/domain/entity/user';
import {Profile} from '@profileContext/domain/entity/profile';
import {updateLocalProfileLoadingSelector} from '@profileContext/useCases/UpdateLocalProfile/selector';
import {loadProfileDetails} from '@profileContext/useCases/ProfileDetails/action';
import {LoadProfileDetailsActionTypes} from '@profileContext/useCases/ProfileDetails/actionType';
import {ProfileContainer} from './profile.container';
import {
  loadUserInfoErrorSelector,
  loadUserInfoSuccessSelector,
} from '@profileContext/useCases/ProfileDetails/selectors';
import { profileSelector } from '@profileContext/useCases/Login/selectors';
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
