import { Component, OnInit } from '@angular/core';
import { SimulationService} from '../simulation.service';

export interface simulation{
  scenario: string;
  periodeSimulee: string;
  type : string;
  perimetre: string;

  statut: string;
  rendementSimule: string;
  derniermodif: string;

}

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrl: './simulations.component.css'
})
export class SimulationsComponents implements OnInit {
 
  displayedColumns: string[]=['selection','scenario','periodeSimulee','type','perimetre','derniermodif',
    'rendementSimule','statut'];
    

  dataSource:simulation[]=[
    {scenario: 'CT_Amsterdam_2024/07 v1', periodeSimulee:'2023-2027', type:'Com.Tertiaire',perimetre:'Amsterdam',derniermodif:'Hier 16h30',statut:'En cours', rendementSimule:'2,25%' },
    {scenario: 'CT_Amsterdam_2024/06 v1', periodeSimulee:'2023-2027', type:'Com.Tertiaire',perimetre:'Amsterdam',derniermodif:'24/06/2024 16h30',statut:'Brouillon', rendementSimule:'2,65%' }
  
  ];


    constructor(private simulationService: SimulationService){}
    ngOnInit(): void {
      
    

    }}
