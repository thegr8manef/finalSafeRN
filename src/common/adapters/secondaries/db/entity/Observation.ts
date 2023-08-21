import { Photo } from "./Photo";

export class Observation extends Realm.Object<Observation> {
    token?: string;
    tokenQuestion?: string;
    parentQuestionToken?: string;
    idCS?: string;
    listPhotos?: Photo[];
    responseId?: number;
    ordre?: number;
    VId?: string;
    commentaire?: string;
    dt?: string;
    title?: string;
    unq?: boolean;
    remarqueID?: string;

    static schema = {
        name: 'Observation',
        primaryKey: 'token',
        properties: {
            token: 'string?',
            tokenQuestion: 'string?',
            parentQuestionToken: 'string?',
            idCS: 'string?',
            listPhotos: 'Photo[]',
            responseId: 'int',
            ordre: 'int',
            VId: 'string?',
            commentaire: 'string?',
            dt: 'string?',
            title: 'string?',
            unq: 'bool',
            remarqueID: 'string',
        },
    };
}