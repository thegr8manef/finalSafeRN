

export class Accompagnants {
    constructor(
        private _id: string,
        private _fn: string,//first name
        private _ln: string,//last name
        private _em: string,//email
        private _idVisite: string,
        private _fullnameLowerCase: string,
        private _ac: boolean,
        private _ol: string,
        private _prId: string
    ) { }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get fn(): string {
        return this._fn;
    }
    public set fn(value: string) {
        this._fn = value;
    }
    public get em(): string {
        return this._em;
    }
    public set em(value: string) {
        this._em = value;
    }
    public get ac(): boolean {
        return this._ac;
    }
    public set ac(value: boolean) {
        this._ac = value;
    }
    public get ln(): string {
        return this._ln;
    }
    public set ln(value: string) {
        this._ln = value;
    }
    public get prId(): string {
        return this._prId;
    }
    public set prId(value: string) {
        this._prId = value;
    }
    public get ol(): string {
        return this._ol;
    }
    public set ol(value: string) {
        this._ol = value;
    }
    public get fullnameLowerCase(): string {
        return this._fullnameLowerCase;
    }
    public set fullnameLowerCase(value: string) {
        this._fullnameLowerCase = value;
    }
    public get idVisite(): string {
        return this._idVisite;
    }
    public set idVisite(value: string) {
        this._idVisite = value;
    }
}
