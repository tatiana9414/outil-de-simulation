import { Component } from '@angular/core';

@Component({
  selector: 'app-faconnage-lot',
  templateUrl: './faconnage-lot.component.html',
  styleUrl: './faconnage-lot.component.css'
})
export class FaconnageLotComponent {
  strategies = ['Maintien dans les lieux', 'Relocation en état'];
  data= [
    {
    locataire:'Flammarion',
    numero_bail: 33002,
    nb_lots:4,
    num_lot:'-',
    type_lot:'-',
    etage:'-',
    surface:1250,
    nb_parking:25,
    date_debut:'01/01/2017',
    date_fin:'31/12/2023',
    date_break:'31/12/2022',
    date_dispo:'-',
    loyer_actuel:430,
    loyer_parkin: 1250,
    loyer_global: 568750,
    strategie:'Maintien dans les lieux'
  },
  {
    locataire:'Locataire B',
    numero_bail: 27805,
    nb_lots:1,
    num_lot:'02-00205',
    type_lot:'Bureaux',
    etage:'2',
    surface:400,
    nb_parking:'-',
    date_debut:'01/01/2017',
    date_fin:'31/12/2023',
    date_break:'31/12/2022',
    date_dispo:'-',
    loyer_actuel:350,
    loyer_parkin: '-',
    loyer_global: 140000,
    strategie:'Maintien dans les lieux'
  }
  ];
}
