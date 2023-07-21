import {Chantier} from '../domain/entity/Chantier';
import {Flash} from '../domain/entity/Flash';

export interface VisitsState {
  flash: FlashState;
  loadChantierByCode: LoadchantierByCodeState;
}
export interface FlashState {
  errorVisits: string | undefined;
  flash: Flash | undefined;
}
export interface LoadchantierByCodeState {
  errorLoadingChantier: string | undefined;
  LoadingChantierSuccess: boolean;
  LoadingChantier: Chantier | null;
}
