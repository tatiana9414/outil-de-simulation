import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface RelocationData {
  locataire: string;
  nb_lots: number;
  num_lot: string;
  type_lot: string;
  etage: string;
  surface: number;
  nb_pkg: number;
  fin_bail: string;
  date_break: string;
  disponibilite: string;
  loyer_actuel: number;
  loyer_actuel_pkg: number;
  loyer_global: number;
  strategie_appliquee: string;
  date_depart_locataire: string;
  indemnites_eviction: number;
  fin_travaux: string;
  futur_locataire: string;
  loyer_futur: number;
  loyer_futur_retail: number;
  nb_pkg_affecte: number;
  loyer_pkg: number;
  loyer_futur_avec_parking: number;
}

@Component({
  selector: 'app-relocations-affectation',
  templateUrl: './relocations-affectation.component.html',
  styleUrls: ['./relocations-affectation.component.css']
})
export class RelocationsAffectationComponent {
  pathsDirectory: string = 'Stratégie Commerciale Tertiaire > Relocation > Hypothèses de simulation >​ ';
  actualDirectory: string = 'Affectation des lots';

  constructor(private router: Router) {}

  goToDefinitions() {
    this.router.navigate(['relocations-definition']);
  }

  relocationData: RelocationData[] = Array.from({ length: 3 }, (_, i) => this.generateRandomRelocationData(`Locataire ${String.fromCharCode(65 + i)}`));

  generateRandomRelocationData(locataire: string): RelocationData {
    return {
      locataire,
      nb_lots: this.getRandomInt(1, 3),
      num_lot: this.generateRandomNumLot(),
      type_lot: this.getRandomElement(['Bureaux', 'Archives']),
      etage: this.getRandomInt(-2, 5).toString(),
      surface: this.getRandomInt(100, 1200),
      nb_pkg: this.getRandomInt(1, 10),
      fin_bail: this.generateRandomDate(),
      date_break: this.generateRandomDate(),
      disponibilite: this.generateRandomDate(),
      loyer_actuel: this.getRandomInt(200, 450),
      loyer_actuel_pkg: this.getRandomInt(50, 150),
      loyer_global: this.getRandomInt(1000, 5000),
      strategie_appliquee: this.getRandomElement(['Relocation après travaux', 'Maintien', 'Relocation en l\'état', 'Stratégie par lot', 'Gel']),
      date_depart_locataire: this.generateRandomDate(),
      indemnites_eviction: this.getRandomInt(10000, 50000),
      fin_travaux: this.generateRandomDate(),
      futur_locataire: `Locataire ${String.fromCharCode(65 + this.getRandomInt(0, 25))}`,
      loyer_futur: this.getRandomInt(240, 480),
      loyer_futur_retail: this.getRandomInt(300, 600),
      nb_pkg_affecte: this.getRandomInt(1, 10),
      loyer_pkg: this.getRandomInt(50, 150),
      loyer_futur_avec_parking: this.getRandomInt(2000, 7000)
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

  generateRandomNumLot(): string {
    const part1 = this.getRandomInt(1, 2).toString().padStart(2, '0');
    const part2 = this.getRandomInt(0, 2).toString().padStart(3, '0');
    const part3 = this.getRandomInt(1, 9).toString().padStart(2, '0');
    const part4 = Math.random() < 0.5 ? '' : String.fromCharCode(97 + this.getRandomInt(0, 1));
    return `${part1}-${part2}${part3}${part4}`;
  }
}
