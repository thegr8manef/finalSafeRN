import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {LoginContainer} from './login.container';
import {Profile} from '@profileContext/domain/entity/profile';
import {login} from '@profileContext/useCases/Login/action';
import {AppState} from '@redux/appState';
import { loginErrorSelector, loginLoadingSelector, profileSelector } from '@profileContext/useCases/Login/selectors';

interface StateToPropsType {
  loading: boolean;
  error: string | undefined;
  profile: Profile | undefined;
}

interface DispatchToPropsType {
  login: () => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading: loginLoadingSelector(state),
  error: loginErrorSelector(state),
  profile: profileSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  login: () => dispatch(login()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export type LoginPageProps = PropsFromRedux;

export const LoginPage = connector(LoginContainer);
