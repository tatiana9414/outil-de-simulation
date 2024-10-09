import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { simulation } from './simulations/simulations.component';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor() { }

  getSimulations():Observable<simulation[]> {
    const dummyData: simulation[]= [
      {scenario:'CT_Amsterdam',periodeSimulee:'2023-2027' ,type:'Com.Tertiaire',perimetre:'Amsterdam',
        derniermodif:'Hier 16h30', statut:'Pré-validé',rendementSimule:'2,56'
      },
      {scenario:'P_Amsterdam',periodeSimulee:'2023-2027' ,type:'Com.Tertiaire',perimetre:'Amsterdam',
        derniermodif:'24/06/2024 16h30',statut:'Brouillon',rendementSimule:'2,56'
      }

    ];
    return of(dummyData);


  }
}
