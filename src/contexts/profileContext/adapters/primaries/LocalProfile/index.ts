import {Dispatch} from 'redux';
import {AppState} from '@redux/appState';

import {Profile} from '@contexts/profileContext/domain/entity/profile';
import {localProfileSelector} from '@contexts/profileContext/useCases/LoadLocalProfile/selectors';
import {LoadLocalProfileAction} from '@contexts/profileContext/useCases/LoadLocalProfile/actionType';
import {loadLocalProfile} from '@contexts/profileContext/useCases/LoadLocalProfile/action';
import { LocalProfileScreen  } from './localProfile.container';
import { connect } from 'react-redux';

interface StateToPropsType {
  profile: Profile | undefined;
}

interface DispatchToPropsType {
  loadLocalProfile: () => void;
 
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  profile: localProfileSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({

  loadLocalProfile: (): LoadLocalProfileAction => dispatch(loadLocalProfile()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const LocalProfilePage = connector(LocalProfileScreen );
