import Realm from 'realm';

export class Region extends Realm.Object<Region> {
    id?: number;
    ti?: string;
    pid?: number;
    piid?: number;
    or?: number;

    static schema = {
        name: 'Region',
        properties: {
            id: "int?",
            ti: "string?",
            pid: "int?",
            piid: "int?",
            or: "int?",
        },
    };
}