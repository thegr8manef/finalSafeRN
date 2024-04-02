import { Photo } from "./Photo";

export class VisitObservation {
    constructor(
        private _token: string,
        private _tokenQuestion: string,
        private _parentQuestionToken: string,
        private _idCS: string,
        private _listPhotos: Photo[] | undefined,
        private _responseId: number,
        private _ordre: number,
        private _VId: string,
        private _commentaire: string,
        private _dt: string,
        private _title: string,
        private _unq: boolean,
        private _remarqueID: string,
    ) {
    }
    public get remarqueID(): string {
        return this._remarqueID;
    }
    public set remarqueID(value: string) {
        this._remarqueID = value;
    }
    public get unq(): boolean {
        return this._unq;
    }
    public set unq(value: boolean) {
        this._unq = value;
    }
    public get title(): string {
        return this._title;
    }
    public set
        title(value: string) {
        this._title = value;
    }
    public get dt(): string {
        return this._dt;
    }
    public set dt(value: string) {
        this._dt = value;
    }
    public get commentaire(): string {
        return this._commentaire;
    }
    public set commentaire(value: string) {
        this._commentaire = value;
    }
    public get VId(): string {
        return this._VId;
    }
    public set VId(value: string) {
        this._VId = value;
    }
    public get ordre(): number {
        return this._ordre;
    }
    public set ordre(value: number) {
        this._ordre = value;
    }
    public get responseId(): number {
        return this._responseId;
    }
    public set responseId(value: number) {
        this._responseId = value;
    }
    public get listPhotos(): Photo[] | undefined {
        return this._listPhotos;
    }
    public set listPhotos(value: Photo[] | undefined) {
        this._listPhotos = value;
    }
    public get idCS(): string {
        return this._idCS;
    }
    public set idCS(value: string) {
        this._idCS = value;
    }
    public get parentQuestionToken(): string {
        return this._parentQuestionToken;
    }
    public set parentQuestionToken(value: string) {
        this._parentQuestionToken = value;
    }
    public get tokenQuestion(): string {
        return this._tokenQuestion;
    }
    public set tokenQuestion(value: string) {
        this._tokenQuestion = value;
    }
    public get token(): string {
        return this._token;
    }
    public set token(value: string) {
        this._token = value;
    }
}
