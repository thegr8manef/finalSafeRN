import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {LoginContainer} from './login.container';

import {AppState} from '@redux/appState';
import {Profile} from '@contexts/profileContext/domain/entity/profile';
import * as contexts from '@contexts/profileContext/useCases/Login/selectors';
import {login} from '@contexts/profileContext/useCases/Login/action';

interface StateToPropsType {
  loading: boolean;
  error: string | undefined;
  profile: Profile | undefined;
}

interface DispatchToPropsType {
  login: () => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading: contexts.loginLoadingSelector(state),
  error: contexts.loginErrorSelector(state),
  profile: contexts.profileSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  login: () => dispatch(login()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export type LoginPageProps = PropsFromRedux;

export const LoginPage = connector(LoginContainer);
