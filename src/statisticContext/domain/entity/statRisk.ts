export class StatRisk {
    constructor(
        private _risk0: StatRiskObject,
        private _risk1: StatRiskObject,
        private _risk2: StatRiskObject,
        private _risk3: StatRiskObject,
    ){}

    get risk0(): StatRiskObject {
        return this._risk0
    }

    get risk1(): StatRiskObject {
        return this._risk1
    }
    get risk2(): StatRiskObject {
        return this._risk2
    }

    get risk3(): StatRiskObject {
        return this._risk3
    }

}

export interface StatRiskObject {
label: string | undefined;
value: number | undefined
}