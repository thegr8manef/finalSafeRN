import {Dispatch} from 'redux';
import {AppState} from '../../../../redux_configuration/appState';
import {checkUserConnectedSelector} from '../../../useCases/CheckUserConnected/Selector';
import {UserInfoActionTypes} from '../../../useCases/CheckUserConnected/actionTypes';
import {checkUserConnected} from '../../../useCases/CheckUserConnected/actions';
import {connect} from 'react-redux';
import SplashScreen from './splash.container';

interface StateToPropsType {
  userConncted: boolean | undefined;
}

interface DispatchToPropsType {
  checkUserConnceted: () => void;
}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  userConncted: checkUserConnectedSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  checkUserConnceted: (): UserInfoActionTypes =>
    dispatch(checkUserConnected(undefined)),
});

export const SplashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
