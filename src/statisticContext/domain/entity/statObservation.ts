export class StatObservation {
    constructor(
        private _ol: number,
        private _onl: number,
        private _observationConforme: number,
        private _observationPositive: number,
        private _hintObservation: number,
        private _observationNomConforme: number,
        private _observationAmeliorer: number,
        private _hintLevee: number,
        private _observationNumber: number,
        private _leveeDesReservesNumber: number
    ){}
    get ol(): number{
        return this._ol
    }
    get onl(): number{
        return this._onl
    }
    get observationConforme(): number{
        return this._observationConforme
    }
    get observationPositive(): number{
        return this._observationPositive
    }
    get hintObservation(): number{
        return this._hintObservation
    }
    get observationNomConforme(): number{
        return this._observationNomConforme
    }
    get observationAmeliorer(): number{
        return this._observationAmeliorer
    }
    get hintLevee(): number{
        return this._hintLevee
    }
    get leveeDesReservesNumber(): number{
        return this._leveeDesReservesNumber
    }
    get observationNumber(): number{
        return this._observationNumber
    }
}