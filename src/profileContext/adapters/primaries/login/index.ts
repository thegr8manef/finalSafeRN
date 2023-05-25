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
import { result } from '../../../domain/entity/result';

interface StateToPropsType {
  loading: boolean;
  error: string | undefined;
  result: result | undefined;
}

interface DispatchToPropsType {
  login: () => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading: loginLoadingSelector(state),
  error: loginErrorSelector(state),
  result: tokenSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  login: (): LoginActionTypes => dispatch(login()),
});

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
