import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loadVisitsErrorSelector, loadVisitsSelector, loadingVisitsSelector } from '@contexts/visiteContext/useCases/LoadVisits/selector';
import { AppState } from '@redux/appState';
import { LoadVisitsActionDbTypes } from '@contexts/visiteContext/useCases/LoadVisits/actionTypes';
import { LoadVisits } from '@contexts/visiteContext/useCases/LoadVisits/action';
import { VisitsContainer } from './visits.container';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { Synchronisation } from '@contexts/synchronisationContext/domain/entity/Synchronisation';
import { SendDataActionTypes } from '@contexts/synchronisationContext/useCases/SendData/actionTypes';
import { sendData } from '@contexts/synchronisationContext/useCases/SendData/actions';
import { Profile } from '@contexts/profileContext/domain/entity/profile';
import { profileSelector } from '@contexts/profileContext/useCases/Login/selectors';
import { loadingSendSelector } from '@contexts/synchronisationContext/useCases/SendData/selector';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { sitesSelector } from '@contexts/visiteContext/useCases/LoadSites/selectors';
import { LoadSitesActionTypes } from '@contexts/visiteContext/useCases/LoadSites/actionTypes';
import { LoadSites } from '@contexts/visiteContext/useCases/LoadSites/action';

interface StateToPropsType {
  visits  : Visit[] | undefined;
  error   : string | undefined;
  loading : boolean;
  profile : Profile | undefined;
  sites: Site[] | null;
}
interface DispatchToPropsType {
  loadVisits : () => void;
  sendData   : (accessToken: string, lastUpadet: string, visits : Visit[]) => void;
  loadSites: () => void;

}

const mapStateToProps = (state: AppState): StateToPropsType => ({
  profile : profileSelector(state),
  error   : loadVisitsErrorSelector(state),
  visits  : loadVisitsSelector(state),
  loading : loadingVisitsSelector(state) || loadingSendSelector(state),
  sites: sitesSelector(state),

});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => ({
  loadVisits: (): LoadVisitsActionDbTypes => dispatch(LoadVisits()),
  sendData    : (accessToken : string, lastUpadet : string, visits : Visit[]): SendDataActionTypes  =>
   dispatch(sendData(accessToken, lastUpadet, visits)),
   loadSites: (): LoadSitesActionTypes => dispatch(LoadSites())


});

export const VisitsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisitsContainer);
