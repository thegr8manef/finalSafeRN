import RNFS from 'react-native-fs';
import Realm from 'realm';
import React from 'react';
import realm_config from '../../../config/realm-config';
import {User} from '../entity/User';
import {Chantier} from '../entity/Chantier';
import {Remarque} from '../entity/Remarque';
import {Photo} from '../entity/Photo';
import {Accompagnant} from '../entity/Accompagnant';
import {Statistic} from '../entity/Statistic';
import {StatisticObservation} from '../entity/StatisticObservation';
import {StatisticRisk} from '../entity/StatisticRisk';
import {StatisticRiskObject} from '../entity/StatisticRiskObject';
import {StatisticUser} from '../entity/StatisticUser';
import {StatisticVisit} from '../entity/StatisticVisit';
import {Zone} from '../entity/Zone';

function toByteArray(str: string) {
  var array = new Int8Array(str.length);
  var i = 0;
  for (i; i < str.length; i++) {
    array[i] = str.charCodeAt(i);
  }
  return array;
}

export default async function realmConfig() {
  const _realmConfigDB = {
    schema: [
      Accompagnant,
      User,
      Chantier,
      Remarque,
      Photo,
      Statistic,
      StatisticObservation,
      StatisticRisk,
      StatisticRiskObject,
      StatisticUser,
      StatisticVisit,
      Zone,
    ],

    path: `${RNFS.DocumentDirectoryPath}/dynamicdb.realm`,
    schemaVersion: 15,
    encryptionKey: toByteArray(realm_config.databaseKey),
  };

  try {
    console.log('------------START-------------');
    const realm = await Realm.open(_realmConfigDB);
    realm.write(() => {
      const objects = realm.objects('User');
      // Iterate over the objects and access their properties
      objects.forEach(object => {
        // Access properties dynamically
        const propertyValue = object['fn'];
        console.log(propertyValue);
      });
    });
    console.log('Imported Realm:', realm);
  } catch (error) {
    console.error('Error importing Realm:', error);
  }
}
