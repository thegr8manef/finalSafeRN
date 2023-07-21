import {Flash} from '../domain/entity/Flash';

export interface VisitsState {
  flash: FlashState;
  LoadingChantier: LoadChantierState;
}
export interface FlashState {
  errorVisits: string | undefined;
  flash: Flash | undefined;
}
export interface LoadChantierState {
  errorLoadingChantier: string | undefined;
  LoadingChantierSuccess: string | undefined;
  LoadingChantier: string | undefined;
}
