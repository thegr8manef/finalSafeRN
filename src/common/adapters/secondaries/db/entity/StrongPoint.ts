import Realm from 'realm';

export class StrongPoint extends Realm.Object<StrongPoint> {
    id?: string;
    title?: string;
    order?: number;

    static schema = {
        name: 'StrongPoint',
        primaryKey: 'id',
        properties: {
            id: 'string?',
            title: 'string?',
            order: 'int',
        },
    };
}