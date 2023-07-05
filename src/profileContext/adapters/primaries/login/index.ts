import {AppState} from '../../../../redux_configuration/appState';
import {
  loginErrorSelector,
  loginLoadingSelector,
  profileSelector,
} from '../../../useCases/Login/selectors';
import {Dispatch} from 'redux';
import {LoginActionTypes} from '../../../useCases/Login/actionTypes';
import {connect} from 'react-redux';
import {LoginContainer} from './login.container';
import {login} from '../../../useCases/Login/action';
import {Profile} from '../../../domain/entity/profile';

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
  login: (): LoginActionTypes => dispatch(login()),
});

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
