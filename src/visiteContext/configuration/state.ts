import {Chantier} from '../domain/entity/Chantier';

export interface VisitsState {
  saveFlash: SaveFlashState;
  loadChantierByCode: LoadchantierByCodeState;
}
export interface SaveFlashState {
  error: string | undefined;
  loading: boolean;
}
export interface LoadchantierByCodeState {
  error: string | undefined;
  chantier: Chantier | null;
  loading: boolean;
}
