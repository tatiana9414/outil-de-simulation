import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimulationService } from '../simulation.service';
;

@Component({
  selector: 'app-scenario-tertiaire',
  templateUrl: './scenario-tertiaire.component.html',
  styleUrl: './scenario-tertiaire.component.css'
})


export class ScenarioTertiaireComponent implements OnInit{
  paesiList:any[]=[];

  constructor(private router:Router,private SimulationService:SimulationService) {}
  
  ngOnInit(): void {
    console.log('ngInit appelé');
      this.SimulationService.getPaesi().subscribe(

        (data)=>{
          this.paesiList=data;
          console.log(this.paesiList)
        },
        (error)=>{
          console.error('Erreur lors de la récuperation des données', error);
        }

      );
  }

  goToPage(){

    this.router.navigate(['/FaconnerLot'])
  }
  
 

}
