import { AppState } from '@redux/appState';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { LoadSites } from '@contexts/visiteContext/useCases/LoadSites/action';
import { LoadSitesActionTypes } from '@contexts/visiteContext/useCases/LoadSites/actionTypes';
import {
    sitesSelector,
    loadSitesErrorSelector,
    loadingSitesSelector,
} from '@contexts/visiteContext/useCases/LoadSites/selectors';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { HierarchicalVisitContainer } from './hierarchicalVisit.container';

interface StateToPropsType {
    error: string | undefined;
    sites: Site[] | null;
    loading: boolean;
}
interface DispatchToPropsType {
    loadSites: () => void;
}
const mapStateToProps = (state: AppState): StateToPropsType => ({
    error: loadSitesErrorSelector(state),
    sites: sitesSelector(state),
    loading: loadingSitesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
    loadSites: (): LoadSitesActionTypes => dispatch(LoadSites())
});

export const HierarchicalVisitPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HierarchicalVisitContainer);
