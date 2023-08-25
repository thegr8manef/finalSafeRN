import Realm from 'realm';

export class PointToImprove extends Realm.Object<PointToImprove> {
    id?: string;
    title?: string;
    order?: number;

    static schema = {
        name: 'PointToImprove',
        primaryKey: 'id',
        properties: {
            id: 'string?',
            title: 'string?',
            order: 'int',
        },
    };
}