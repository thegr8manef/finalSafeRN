

export class Accompagnant {

    constructor(
        private _ac: boolean,
        private _em: string,
        private _fn: string,
        private _id: number,
        private _ln: string,
    ) { }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
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

}
