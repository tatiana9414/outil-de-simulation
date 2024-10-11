import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface RelocationDefinitionData {
  futur_locataire: string;
  nb_lots: number;
  surface_louable: number;
  loyer_futur_moyen: number;
  nb_pkg_affecte: number;
  loyer_parking_moyen: number;
  loyer_futur_avec_parking: number;
  marketing_com: number;
  honoraires_brokers_charges: number;
  honoraires_brokers_pourcentage: number;
  autres_couts: number;
  date_effet_nouveau_bail: string;
  duree_ferme: number;
  duree_bail: number;
  franchise: number;
  participation_travaux_immobilisations: number;
  participation_travaux_charges: number;
  taux_accompagnement: number;
  loyer_economique: number;
}

@Component({
  selector: 'app-relocations-definition',
  templateUrl: './relocations-definition.component.html',
  styleUrls: ['./relocations-definition.component.css']
})
export class RelocationsDefinitionComponent {
  pathsDirectory: string = 'Stratégie Commerciale Tertiaire > Relocation > Hypothèses de simulation >​ ';
  actualDirectory: string = 'Définition des contrats';

  constructor(private router: Router) {}

  cancelEntry() {
    // Logique pour annuler la saisie
  }

  goToStep1() {
    this.router.navigate(['relocations-affectation']);
  }

  validateRelocations() {
    // Logique pour valider la saisie des relocations
  }

  relocationDefinitionData: RelocationDefinitionData[] = Array.from({ length: 3 }, (_, i) => this.generateRandomRelocationDefinitionData(`Locataire ${String.fromCharCode(65 + i)}`));

  generateRandomRelocationDefinitionData(futur_locataire: string): RelocationDefinitionData {
    return {
      futur_locataire,
      nb_lots: this.getRandomInt(1, 3),
      surface_louable: this.getRandomInt(100, 1200),
      loyer_futur_moyen: this.getRandomInt(240, 480),
      nb_pkg_affecte: this.getRandomInt(1, 10),
      loyer_parking_moyen: this.getRandomInt(50, 150),
      loyer_futur_avec_parking: this.getRandomInt(2000, 7000),
      marketing_com: this.getRandomInt(1000, 5000),
      honoraires_brokers_charges: this.getRandomInt(1000, 5000),
      honoraires_brokers_pourcentage: this.getRandomInt(1, 10),
      autres_couts: this.getRandomInt(1000, 5000),
      date_effet_nouveau_bail: this.generateRandomDate(),
      duree_ferme: this.getRandomInt(1, 10),
      duree_bail: this.getRandomInt(1, 10),
      franchise: this.getRandomInt(1, 12),
      participation_travaux_immobilisations: this.getRandomInt(1000, 5000),
      participation_travaux_charges: this.getRandomInt(1000, 5000),
      taux_accompagnement: this.getRandomInt(1, 10),
      loyer_economique: this.getRandomInt(200, 500)
    };
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  generateRandomDate(): string {
    const start = new Date(2020, 0, 1);
    const end = new Date(2025, 11, 31);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  }
}
