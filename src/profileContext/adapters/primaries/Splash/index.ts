import {Dispatch} from 'redux';
import {AppState} from '../../../../redux_configuration/appState';
import {
  checkUserConnectedSelector,
  checkUserConnectedSuccessSelector,
} from '../../../useCases/CheckUserConnected/Selector';
import {UserInfoActionTypes} from '../../../useCases/CheckUserConnected/actionTypes';
import {checkUserConnected} from '../../../useCases/CheckUserConnected/actions';
import {connect} from 'react-redux';
import {SplashScreen} from './splash.container';

interface StateToPropsType {
  userConncted: boolean;
}

interface DispatchToPropsType {
  checkUserConnected: (state: boolean) => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  userConncted: checkUserConnectedSuccessSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  checkUserConnected: (): UserInfoActionTypes => dispatch(checkUserConnected()),
});

export const SplashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
