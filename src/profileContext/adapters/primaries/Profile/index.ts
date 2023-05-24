import {connect} from 'react-redux';
import {ProfileContainer} from './profile.container';

interface StateToPropsType {}

interface DispatchToPropsType {}

const mapStateToProps = (): StateToPropsType => ({});

const mapDispatchToProps = (): DispatchToPropsType => ({});

export const ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);

