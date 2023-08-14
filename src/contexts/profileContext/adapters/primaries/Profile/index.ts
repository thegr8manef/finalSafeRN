import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '@redux/appState';
import {User} from '@contexts/profileContext/domain/entity/user';
import {Profile} from '@contexts/profileContext/domain/entity/profile';
import {updateLocalProfileLoadingSelector} from '@contexts/profileContext/useCases/UpdateLocalProfile/selector';
import {loadProfileDetails} from '@contexts/profileContext/useCases/ProfileDetails/action';
import {LoadProfileDetailsActionTypes} from '@contexts/profileContext/useCases/ProfileDetails/actionType';
import {ProfileContainer} from './profile.container';
import {
  loadUserInfoErrorSelector,
  loadUserInfoSuccessSelector,
} from '@contexts/profileContext/useCases/ProfileDetails/selectors';
import {profileSelector} from '@contexts/profileContext/useCases/Login/selectors';
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
