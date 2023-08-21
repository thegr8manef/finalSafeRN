import { Photo } from "./Photo";


export default class Remarque {
    constructor (
        private _token      : string,
        private _created_At : string,
        private _description: string,
        private _level      : number,
        private _note      : number,
        private _photos     : Photo[] //md
    ){}

    get token() : string{
        return this._token;
    }

    get created_At() : string{
        return this._created_At;
    }

    get description() : string{
        return this._description;
    }

    get level() : number{
        return this._level;
    }

    get note() : number{
        return this._note;
    }

    get photos() : Photo[]{
        return this._photos;
    }
}
