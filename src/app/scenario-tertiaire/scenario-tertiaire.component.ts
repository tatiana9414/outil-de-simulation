import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenario-tertiaire',
  templateUrl: './scenario-tertiaire.component.html',
  styleUrl: './scenario-tertiaire.component.css'
})
export class ScenarioTertiaireComponent {
  constructor(private router:Router) {}

  goToPage(){

    this.router.navigate(['/FaconnerLot'])
  }


}
