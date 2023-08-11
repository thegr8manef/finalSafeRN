import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {VisitsContainer} from './visits.container';


interface StateToPropsType {
}
interface DispatchToPropsType {
}
const mapStateToProps = (): StateToPropsType => ({

});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
});

export const VisitsFlashPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitsContainer);
