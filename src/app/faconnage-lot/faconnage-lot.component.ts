import { Component } from '@angular/core';

@Component({
  selector: 'app-faconnage-lot',
  templateUrl: './faconnage-lot.component.html',
  styleUrls: ['./faconnage-lot.component.css']
})
export class FaconnageLotComponent {
  strategies = ['Maintien dans les lieux', 'Relocation en état'];
  data = [
    {
      locataire: 'Locataire',
      numero_bail: 'Bail 001',
      nb_lots: 2,
      num_lot: 'Lot 1',
      type_lot: 'Bureau',
      etage: 1,
      surface: 100,
      nb_parking: 2,
      date_debut: '2023-01-01',
      date_fin: '2024-01-01',
      date_break: '2023-06-01',
      date_dispo: '2024-01-02',
      loyer_actuel: 200,
      loyer_parkin: 50,
      loyer_global: 2500,
      strategie: 'Stratégie A',
      showDetails: false,
      subData: [
        {
          sousLocataire: 'Sous-locataire 1',
          sousNumeroBail: 'Sous-bail 001-1',
          sousNumLot: 'Sous-lot 1',
          sousTypeLot: 'Bureau',
          sousSurface: 50
        },
        {
          sousLocataire: 'Sous-locataire 2',
          sousNumeroBail: 'Sous-bail 001-2',
          sousNumLot: 'Sous-lot 2',
          sousTypeLot: 'Bureau',
          sousSurface: 50
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
      strategie: 'Stratégie B',
      showDetails: false,

    }
  ];
  


  toggleSousLignes(item: any) {
    item.showDetails=!item.showDetails;
  }
}
