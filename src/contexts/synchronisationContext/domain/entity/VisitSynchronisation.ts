import { RemarqueSynchronisation } from "./RemarqueSynchronisation";

export class VisitSynchronisation {
    constructor(
        private _token : string,
        private _type  : number,
        private _codeChantie : string,
        private _created_At  : string,
        private _remarque    : RemarqueSynchronisation
    ) 
    {}

    get token():string {
        return this._token
    }

    get type():number {
        return this._type
    }

    get codeChantie():string {
        return this._codeChantie
    }

    get created_At():string {
        return this._created_At
    }

    get remarque():RemarqueSynchronisation {
        return this._remarque
    }
}