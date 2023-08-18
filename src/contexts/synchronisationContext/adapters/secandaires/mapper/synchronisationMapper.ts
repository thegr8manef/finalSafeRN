import { Chantier } from '@common/adapters/secondaries/db/entity/Chantier';

import { Site } from '@contexts/visiteContext/domain/entity/Site';

import { SynchronisationDto } from '../dto/synchronisationDto';


export class SynchronisationMapper {

  static mapperToChanties(synchronisationDto: SynchronisationDto): Site[] {

    const chanties: Site[] = [];

    synchronisationDto.rd.cs.forEach(chantier => {

      chanties.push(

        new Site(

          chantier.id.toString(),

          chantier.no,

          chantier.ad ? chantier.ad : '',

          -1,

          chantier.ac,

          chantier.cp ? chantier.cp.toString() : '',

          chantier.py ? chantier.py : '',

          chantier.vl ? chantier.vl : '',

          chantier.st,

          synchronisationDto.rd.lus ? parseInt(synchronisationDto.rd.lus) : -1,

          chantier.ref,

          chantier.ol_name,

          chantier.osc,

          chantier.pid.toString(),

          chantier.piid.toString(),

          chantier.sr,

          chantier.org,

        ),

      );

    });



    synchronisationDto.rd.ocs.forEach(chantier => {

      if (

        !chanties.some(

          _chantier => _chantier.id?.toString() == chantier.id.toString(),

        )

      ) {

        chanties.push(

          new Site(

            chantier.id.toString(),

            chantier.no,

            chantier.ad ? chantier.ad : '',

            -1,

            chantier.ac,

            '',

            chantier.py ? chantier.py : '',

            chantier.vl ? chantier.vl : '',

            chantier.st,

            synchronisationDto.rd.lus

              ? parseInt(synchronisationDto.rd.lus)

              : -1,

            chantier.ref,

            chantier.ol_name,

            chantier.osc.toString(),

            chantier.pid.toString(),

            chantier.piid.toString(),

            chantier.sr,

            chantier.org,

          ),

        );

      }

    });



    return chanties;

  }



  static mapSiteToChantier(site: Site): Chantier {

    return {

      id: site.id,

      no: site.name,

      ad: site.address,

      type: -1,

      ac: site.accepted,

      cp: site.code_postal,

      co: '',

      py: site.pays,

      vl: site.ville,

      sr: site.sr,

      cd: '',

      st: site.st === undefined ? 0 : site.st,

      lu: site.last_update,

      ref: site.reference,

      org: site.org ? site.org : "",

      ol_name: site.region_name,

      osc: site.osc,

      pid: site.pid.toString(),

      piid: site.piid.toString(),

    } as Chantier;

  }



}