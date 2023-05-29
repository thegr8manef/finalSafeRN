import {AppState} from '../../../../redux_configuration/appState';
import {
  signupErrorSelector,
  signupLoadingSelector,
  tokenSelector,
} from '../../../usecases/signup/selectors';
import {Dispatch} from 'redux';
import {SignupActionTypes} from '../../../usecases/signup/actionTypes';
import {signup} from '../../../usecases/signup/actions';
import {connect} from 'react-redux';
import {SignupContainer} from './signup.container';

interface StateToPropsType {
  loading: boolean;
  error: string | undefined;
  token: string | undefined;
}

interface DispatchToPropsType {
  signup: () => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  loading: signupLoadingSelector(state),
  error: signupErrorSelector(state),
  token: tokenSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  signup: (): SignupActionTypes => dispatch(signup()),
});

export const SignupPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupContainer);
