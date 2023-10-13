import { Chantier } from "@common/adapters/secondaries/db/entity/Chantier";
import { RemarqueDto } from "@contexts/visiteContext/adapters/secondaires/dto/remarque.dto";
import { VisitRemarque } from "./VisitRemarque";
import { Observation } from "@common/adapters/secondaries/db/entity/Observation";
import { PointToImprove } from "@common/adapters/secondaries/db/entity/PointToImprove";
import { StrongPoint } from "@common/adapters/secondaries/db/entity/StrongPoint";
import { Accompagnants } from "./Accompagnant";
import { VisitObservation } from "./VisitsObservation";
import { Site } from "./Site";

export class Visit {
  lvl: number | undefined;

  constructor(
    private _id: string,
    private _dt: string,
    private _dtc: string,
    private _timeStamp: string,
    private _date: number,
    private _chantier: Site | undefined,
    private _codeChantier: string,
    private _InfoComplementaire?: string | undefined,
    private _remarques?: VisitRemarque[] | undefined,
    private _observations?: VisitObservation[] | undefined,
    private _accompagnants?: Accompagnants[] | undefined,
    private _V_enCours: number,
    private _pointToImprove?: PointToImprove[] | undefined,
    private _strongPoint?: StrongPoint[] | undefined,
    private _ordre: number,
    private _userId: string,
    private _dateVisite: string,
    private _type: number,
  ) {
  }
  public get id(): string {
    return this._id;
  }
  public set id(id: string) {
    this._id = id;
  }
  public get dateStart(): string {
    return this._dt;
  }
  public set dateStart(dateStart: string) {
    this._dt = dateStart;
  }
  public get dateCreation(): string {
    return this._dtc;
  }
  public set dateCreation(dateCreation: string) {
    this._dtc = dateCreation;
  }
  public get timeStamp(): string {
    return this._timeStamp;
  }
  public set timeStamp(timeStamp: string) {
    this._timeStamp = timeStamp;
  }
  public get date(): number {
    return this._date;
  }
  public set date(date: number) {
    this._date = date;
  }
  public get type(): number {
    return this._type;
  }
  public set type(type: number) {
    this._type = type;
  }
  public get dateVisite(): string {
    return this._dateVisite;
  }
  public set dateVisite(value: string) {
    this._dateVisite = value;
  }
  public get ordre(): number {
    return this._ordre;
  }
  public set ordre(value: number) {
    this._ordre = value;
  }
  public get strongPoint(): StrongPoint[] | undefined {
    return this._strongPoint;
  }
  public set strongPoint(value: StrongPoint[] | undefined) {
    this._strongPoint = value;
  }
  public get pointToImprove(): PointToImprove[] | undefined {
    return this._pointToImprove;
  }
  public set pointToImprove(value: PointToImprove[] | undefined) {
    this._pointToImprove = value;
  }
  public get V_enCours(): number {
    return this._V_enCours;
  }
  public set V_enCours(value: number) {
    this._V_enCours = value;
  }
  public get observations(): VisitObservation[] | undefined {
    return this._observations;
  }
  public set observations(value: VisitObservation[] | undefined) {
    this._observations = value;
  }
  public get remarques(): VisitRemarque[] | undefined {
    return this._remarques;
  }
  public set remarques(value: VisitRemarque[] | undefined) {
    this._remarques = value;
  }
  public get InfoComplementaire(): string | undefined {
    return this._InfoComplementaire;
  }
  public set InfoComplementaire(value: string | undefined) {
    this._InfoComplementaire = value;
  }
  public get codeChantier(): string {
    return this._codeChantier;
  }
  public set codeChantier(value: string) {
    this._codeChantier = value;
  }
  public get userId(): string {
    return this._userId;
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public get accompagnants(): Accompagnants[] | undefined {
    return this._accompagnants;
  }
  public set accompagnants(value: Accompagnants[] | undefined) {
    this._accompagnants = value;
  }
  public get chantier(): Site | undefined {
    return this._chantier;
  }
  public set chantier(value: Site | undefined) {
    this._chantier = value;
  }
}
