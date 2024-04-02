import { AppState } from '@redux/appState';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { LoadSites } from '@contexts/visiteContext/useCases/LoadSites/action';
import { LoadSitesActionTypes } from '@contexts/visiteContext/useCases/LoadSites/actionTypes';
import { Site } from '../../../domain/entity/Site';
import { CurrentVisitContainer } from './currentVisit.container';
import {
    sitesSelector,
    loadSitesErrorSelector,
    loadingSitesSelector,
} from '@contexts/visiteContext/useCases/LoadSites/selectors';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { VisitActionTypes } from '@contexts/visiteContext/useCases/SaveVisit/actionTypes';
import { SaveVisit } from '@contexts/visiteContext/useCases/SaveVisit/action';

interface StateToPropsType {
    error: string | undefined;
    sites: Site[] | null;
    loading: boolean;
}
interface DispatchToPropsType {
    loadSites: () => void;
    saveVisit: (data: Visit) => void;

}
const mapStateToProps = (state: AppState): StateToPropsType => ({
    error: loadSitesErrorSelector(state),
    sites: sitesSelector(state),
    loading: loadingSitesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
    loadSites: (): LoadSitesActionTypes => dispatch(LoadSites()),
    saveVisit: (data: Visit): VisitActionTypes => dispatch(SaveVisit(data)),

});

export const CurrentVisitPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CurrentVisitContainer);
