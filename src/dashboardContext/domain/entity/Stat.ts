export class Stat {
  get HintObservation(): number {
    return this._HintObservation;
  }

  get HintLevee(): number {
    return this._HintLevee;
  }
  get resultCode(): string {
    return this._resultCode;
  }

  get numberVisits(): number {
    return this._numberVisits;
  }

  get numberObservation(): number {
    return this._numberObservation;
  }

  get numberLeveeDesReserves(): number {
    return this._numberLeveeDesReserves;
  }

  get barProgressRisque1(): number {
    return this._barProgressRisque1;
  }

  get barProgressRisque2(): number {
    return this._barProgressRisque2;
  }

  get barProgressRisque3(): number {
    return this._barProgressRisque3;
  }

  get barProgressRisque4(): number {
    return this._barProgressRisque4;
  }

  get barProgressVisit1(): number {
    return this._barProgressVisit1;
  }

  get barProgressVisit2(): number {
    return this._barProgressVisit2;
  }

  get barProgressVisit3(): number {
    return this._barProgressVisit3;
  }

  get barProgressVisit4(): number {
    return this._barProgressVisit4;
  }

  get PieChartConforme(): number {
    return this._PieChartConforme;
  }

  get PieChartPositives(): number {
    return this._PieChartPositives;
  }

  get PieChartNonConforme(): number {
    return this._PieChartNonConforme;
  }

  get PieChartAmeliorer(): number {
    return this._PieChartAmeliorer;
  }
  constructor(
    private _resultCode: string,
    private _numberVisits: number,
    private _numberObservation: number,
    private _numberLeveeDesReserves: number,
    private _barProgressRisque1: number,
    private _barProgressRisque2: number,
    private _barProgressRisque3: number,
    private _barProgressRisque4: number,
    private _barProgressVisit1: number,
    private _barProgressVisit2: number,
    private _barProgressVisit3: number,
    private _barProgressVisit4: number,
    private _PieChartConforme: number,
    private _PieChartPositives: number,
    private _PieChartNonConforme: number,
    private _PieChartAmeliorer: number,
    private _HintObservation: number,
    private _HintLevee: number,
  ) {}
}
