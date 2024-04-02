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
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { VisitActionTypes } from '@contexts/visiteContext/useCases/SaveVisit/actionTypes';
import { SaveVisit } from '@contexts/visiteContext/useCases/SaveVisit/action';
import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import { FlashActionTypes } from '@contexts/visiteContext/useCases/saveFlash/actionTypes';
import { SaveFlash } from '@contexts/visiteContext/useCases/saveFlash/action';
import { Accompagnants } from '@contexts/visiteContext/domain/entity/Accompagnant';
import { loadAccompagnantsSelector } from '@contexts/visiteContext/useCases/LoadAccompagnant/selector';
import { LoadAccompagnantsActionTypes } from '@contexts/visiteContext/useCases/LoadAccompagnant/actionType';
import { LoadAccompagnants } from '@contexts/visiteContext/useCases/LoadAccompagnant/actions';
import { PreventionVisitContainer } from './preventionVisit.container';

interface StateToPropsType {
    error: string | undefined;
    sites: Site[] | null;
    loading: boolean;
    Accompagnants: Accompagnants[] | undefined;
}
interface DispatchToPropsType {
    loadSites: () => void;
    saveVisit: (data: Visit) => void;
    saveFlash: (data: VisitFlash) => void;
    loadAccompagnants: () => void;

}
const mapStateToProps = (state: AppState): StateToPropsType => ({
    error: loadSitesErrorSelector(state),
    sites: sitesSelector(state),
    loading: loadingSitesSelector(state),
    Accompagnants: loadAccompagnantsSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
    loadSites: (): LoadSitesActionTypes => dispatch(LoadSites()),
    saveVisit: (data: Visit): VisitActionTypes => dispatch(SaveVisit(data)),
    saveFlash: (data: VisitFlash): FlashActionTypes => dispatch(SaveFlash(data)),
    loadAccompagnants: (): LoadAccompagnantsActionTypes => dispatch(LoadAccompagnants())


});

export const PreventionVisitPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PreventionVisitContainer);
