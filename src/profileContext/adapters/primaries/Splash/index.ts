import { Dispatch } from "redux";
import { AppState } from "../../../../redux_configuration/appState";
import { Profile } from "../../../domain/entity/profile";
import { getUserInfoSelector } from "../../../useCases/CheckUserConnected/Selector";
import { UserInfoActionTypes } from "../../../useCases/CheckUserConnected/actionTypes";
import { getUserInfo } from "../../../useCases/CheckUserConnected/actions";
import { connect } from "react-redux";
import SplashScreen from "./splash.container";

interface StateToPropsType {
    profile : Profile |undefined
    
}

interface DispatchToPropsType {
    getUserInfo: () => void
}


const mapStateToProps = (state: AppState): StateToPropsType => ({
    profile : getUserInfoSelector(state),
})


const mapDispatchToProps = (dispatch : Dispatch): DispatchToPropsType => ({
    getUserInfo : (): UserInfoActionTypes => dispatch(getUserInfo()),
  });


  export const SplashPage = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SplashScreen)