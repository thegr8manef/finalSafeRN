import { VisitSynchronisation } from "./VisitSynchronisation";

export class Synchronisation {
    constructor(
        private _visites : VisitSynchronisation[]
    ) 
    {}

    get visites():VisitSynchronisation[] {
        return this._visites
    }
}