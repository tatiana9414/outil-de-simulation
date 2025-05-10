import { Component, OnInit } from '@angular/core';

interface Simulation {
  scenario: string;
  periodeSimulee: string;
  type: string;
  perimetre: string;
  auteurImg: string;
  contributeurImg?: string;
  derniermodif: string;
  rendementSimule: string;
  statut: string;
  commentaire: string;
}

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrls: ['./simulations.component.css']
})
export class SimulationsComponent implements OnInit {
  searchTerm: string = '';
  showFilter: boolean = false;
  simulations: Simulation[] = [
    {
      scenario: 'CT_Amsterdam',
      periodeSimulee: '2023-2027',
      type: 'Com. Tertiaire',
      perimetre: 'Amsterdam',
      auteurImg: 'assets/user1.png',
      contributeurImg: 'assets/contributor1.png',
      derniermodif: 'Hier 18:10',
      rendementSimule: '2.56%',
      statut: 'Pré-validé',
      commentaire: 'Commentaire libre'
    },
    {
      scenario: 'CT_Amsterdam',
      periodeSimulee: '2023-2027',
      type: 'Com. Tertiaire',
      perimetre: 'Amsterdam',
      auteurImg: 'assets/user1.png',
      contributeurImg: 'assets/contributor1.png',
      derniermodif: '24/06/2024 16:30',
      rendementSimule: '2.60%',
      statut: 'Brouillon',
      commentaire: 'Commentaire libre'
    },
    {
      scenario: 'P_Planete',
      periodeSimulee: '2023-2027',
      type: 'Patrimoine',
      perimetre: 'Planete A',
      auteurImg: 'assets/user1.png',
      contributeurImg: 'assets/contributor1.png',
      derniermodif: '05/06/2024 10:22',
      rendementSimule: '4.55%',
      statut: 'Brouillon',
      commentaire: 'Commentaire libre'
    }
  ];
  filteredSimulations: Simulation[] = [];

  ngOnInit() {
    this.filteredSimulations = this.simulations;
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  filterTable() {
    this.filteredSimulations = this.simulations.filter(simulation => 
      simulation.statut.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
