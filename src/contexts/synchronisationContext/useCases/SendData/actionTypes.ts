import { VisitSynchronisation } from "@contexts/synchronisationContext/domain/entity/VisitSynchronisation"

export const SEND_DATA = "SEND_DATA"
export const SEND_DATA_SUCCESS = "SEND_DATA_SUCCESS"
export const SEND_DATA_FAILED = "SEND_DATA_FAILED"

export interface SendDataAction {
    type : typeof SEND_DATA,
    payload : VisitSynchronisation
}