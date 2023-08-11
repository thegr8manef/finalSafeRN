export class StatVisit {
    constructor(
        private _visitFlash: number,
        private _visitHierarchical: number,
        private _visitConformity: number,
        private _visitPrevention: number,
        private _visitNumber: number
    ){}

    get visitFlash(): number {
        return this._visitFlash
    }

    get visitHierarchical(): number {
        return this._visitHierarchical
    }

    get visitConformity(): number {
        return this._visitConformity
    }

    get visitPrevention(): number {
        return this._visitPrevention
    }

    get visitNumber(): number {
        return this._visitNumber
    }
}