import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-scenario-tertiaire',
  templateUrl: './scenario-tertiaire.component.html',
  styleUrls: ['./scenario-tertiaire.component.css']
})
export class ScenarioTertiaireComponent implements OnInit {
  paesiList: any[] = [];
  paginatedList: any[] = [];
    filteredList: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  dropdownOpen: boolean = false;
  selectedPaesi: any = null;
  searchTerm:string='';

  constructor(private router: Router, private SimulationService: SimulationService) {}

  ngOnInit(): void {
    console.log('ngInit appelé');
    this.SimulationService.getPaesi().subscribe(
      (data) => {
        this.paesiList = data;
        console.log('Données récupérées :', this.paesiList);
        this.updatePaginatedList();
      },
      (error) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }

  goToPage(): void {
    this.router.navigate(['/FaconnerLot']);
  }

  updatePaginatedList(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedList = this.paesiList.slice(startIndex, startIndex + this.itemsPerPage);
    console.log('Liste paginée mise à jour :', this.paginatedList);
  }
  changePage(event: Event, page: number): void {

    event.stopPropagation(); 
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
   
      this.updatePaginatedList();
      console.log('Page changée :', this.currentPage);
    }
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(paesi: any): void {
    this.selectedPaesi = paesi;
    this.dropdownOpen = false;
    console.log('Option sélectionnée :', paesi);
  }

  get totalPages(): number {
    return Math.ceil(this.paesiList.length / this.itemsPerPage);
  }

  sortPaesiList(): void {
    this.paesiList.sort((a, b) => a.paesi_codext.localeCompare(b.paesi_codext));
  }

  filterOptions() {
    this.filteredList = this.paginatedList.filter(paesi =>
      paesi.paesi_codext.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  }
