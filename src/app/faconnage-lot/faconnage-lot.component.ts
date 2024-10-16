import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-faconnage-lot',
  templateUrl: './faconnage-lot.component.html',
  styleUrls: ['./faconnage-lot.component.css']
})
export class FaconnageLotComponent {
  constructor(private router: Router) {}
  strategies = ['Maintien dans les lieux', 'Relocation en état'];
  data = [
    {
      locataire: 'Flammarion',
      numero_bail: '33002',
      nb_lots: 4,
      num_lot: '-',
      type_lot: '-',
      etage: '-',
      surface: 1250,
      nb_parking: 25,
      date_debut: '01/01/2017',
      date_fin: '31/12/2023',
      date_break: '31/12/2022',
      date_dispo: '-',
      loyer_actuel: 430,
      loyer_parkin: 1250,
      loyer_global: 568750,
      strategie: 'Maintien dans les lieux',
      showDetails: false,
      subData: [
        {
          sousLocataire: 'Flammarion',
          sousNumeroBail: '33002',
          sousNblot:1,
          sousNumLot: '01-00201',
          sousTypeLot: 'Bureaux',
          sousEtage:2,
          sousSurface:500,
          sousNbparking:'-',
          sousdate_debut: '01/01/2017',
          sousdate_fin: '31/12/2023',
          sousdate_break: '31/12/2022',
          sousdate_dispo: '-',
          sousloyer_actuel: 450,
          sousloyer_parkinh: '-',
          sousloyer_global: 225000,
          strategie: 'Maintien dans les lieux',
        },
        {
          sousLocataire: 'Flammarion',
          sousNumeroBail: '33002',
          sousNblot:1,
          sousNumLot: '01-00301',
          sousTypeLot: 'Bureaux',
          sousEtage:3,
          sousSurface:400,
          sousNbparking:25,
          sousdate_debut: '01/01/2017',
          sousdate_fin: '31/12/2023',
          sousdate_break: '31/12/2022',
          sousdate_dispo: '-',
          sousloyer_actuel: 450,
          sousloyer_parkinh: '-',
          sousloyer_global: 180000,
          strategie: 'Maintien dans les lieux',
        },
        {
          sousLocataire: 'Flammarion',
          sousNumeroBail: '33002',
          sousNblot:1,
          sousNumLot: '01-00302',
          sousTypeLot: 'Bureaux',
          sousEtage:3,
          sousSurface:250,
          sousNbparking:'-',
          sousdate_debut: '01/01/2017',
          sousdate_fin: '31/12/2023',
          sousdate_break: '31/12/2022',
          sousdate_dispo: '-',
          sousloyer_actuel: 450,
          sousloyer_parkinh: '-',
          sousloyer_global: 112500,
          strategie: 'Maintien dans les lieux',
        }
      ]
    },
    {
      locataire: 'Locataire 2',
      numero_bail: 'Bail 002',
      nb_lots: 1,
      num_lot: 'Lot 2',
      type_lot: 'Commerce',
      etage: 2,
      surface: 150,
      nb_parking: 3,
      date_debut: '2023-02-01',
      date_fin: '2024-02-01',
      date_break: '2023-07-01',
      date_dispo: '2024-02-02',
      loyer_actuel: 250,
      loyer_parkin: 60,
      loyer_global: 3750,
      strategie: 'Maintien dans les lieux',
      showDetails: false,

    }
  ];
  


  toggleSousLignes(item: any) {
    item.showDetails=!item.showDetails;
  }


  pathsDirectory: string = 'Stratégie Commerciale Tertiaire > ​ ';
  actualDirectory: string = 'Façonnage des lots ';
  GoToHypothese(){

    this.router.navigate(['/validation-hypotheses-calcul'])
  }

  GoToTableau(){
    this.router.navigate(['/regroupement-lot-tertiaire'])
  }

  GoToScinder(){
    this.router.navigate(['/scinder-lot-tertiaire'])
  }

}
