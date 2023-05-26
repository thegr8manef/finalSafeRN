import {connect} from 'react-redux';
import {ProfileContainer} from './profile.container';
import { Profile } from '../../../domain/entity/profile';
import { profileSelector } from '../../../useCases/Login/selectors';
import { AppState } from '../../../../redux_configuration/appState';
interface StateToPropsType {
  profile : Profile | undefined
}

interface DispatchToPropsType {}

const mapStateToProps = (state: AppState): StateToPropsType => ({
    profile : profileSelector(state)
})

const mapDispatchToProps = (): DispatchToPropsType => ({
  
});

export const ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);

