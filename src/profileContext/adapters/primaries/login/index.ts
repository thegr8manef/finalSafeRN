import {AppState} from '../../../../redux_configuration/appState';
import {
  loginErrorSelector,
  loginLoadingSelector,
  tokenSelector,
} from '../../../useCases/Login/selectors';
import {Dispatch} from 'redux';
import {LoginActionTypes} from '../../../useCases/Login/actionTypes';
import {connect} from 'react-redux';
import {LoginContainer} from './login.container';
import {login} from '../../../useCases/Login/action';

interface StateToPropsType {
  loading: boolean;
  error: string | undefined;
  token: string | undefined;
}

interface DispatchToPropsType {
  login: () => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading: loginLoadingSelector(state),
  error: loginErrorSelector(state),
  token: tokenSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  login: (): LoginActionTypes => dispatch(login()),
});

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
