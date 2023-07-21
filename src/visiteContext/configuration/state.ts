import {Flash} from '../domain/entity/Flash';

export interface VisitsState {
  flash: FlashState;
}
export interface FlashState {
  errorVisits: string | undefined;
  flash: Flash | undefined;
}
export interface SearchChantierState {
  errorSearchChantier: string | undefined;
  SearchChantierSuccess: string | undefined;
}
