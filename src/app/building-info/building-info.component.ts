import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-building-info',
  templateUrl: './building-info.component.html',
  styleUrls: ['./building-info.component.css']
})
export class BuildingInfoComponent implements OnInit {
  @Input() textBuildings!: string;
  @Input() textSurface!: string;
  @Input() textParkingPlaces!: string;
  @Input() textEuros!: string;
  @Input() textPourcentageAug!: string;
  @Input() buildingName!: string;

  @Input() textSurfaceSimulation!: string;
  @Input() textParkingPlacesSimulation!: string;
  @Input() textEurosSimulation!: string;
  @Input() textPourcentageAugSimulation!: string;

  ngOnInit() {
    this.textBuildings = this.formatNumber(this.generateRandomNumber(5000000, 100000000));
    this.textSurface = `${this.formatNumber(this.generateRandomNumber(500, 3000))} m²`;
    this.textParkingPlaces = `${this.generateRandomNumber(5, 100)} places`;
    this.textEuros = `${this.formatNumber(this.generateRandomNumber(300000, 900000))} €/an`;
    this.textPourcentageAug = `${this.generateRandomPercentage(0.60, 5.00)} %`;
    this.buildingName = this.generateRandomBuildingInfo();

    this.textSurfaceSimulation = `${this.formatNumber(this.generateRandomNumber(500, 3000))} m²`;
    this.textParkingPlacesSimulation = `${this.generateRandomNumber(5, 100)} places`;
    this.textEurosSimulation = `${this.formatNumber(this.generateRandomNumber(300000, 900000))} €/an`;
    this.textPourcentageAugSimulation = `${this.generateRandomPercentage(0.60, 5.00)} %`;
  }

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateRandomPercentage(min: number, max: number): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }

  formatNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  generateRandomBuildingInfo(): string {
    const buildingName = this.generateRandomString(8);
    const address = this.generateRandomAddress();
    return `Nom de l’immeuble type : ${buildingName} || ${address}`;
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  generateRandomAddress(): string {
    const streetNumber = this.generateRandomNumber(1, 100);
    const streetNames = ['rue de l\'Imagination', 'avenue des Champs-Élysées', 'boulevard Saint-Germain', 'rue de Rivoli'];
    const cities = ['PARIS', 'LYON', 'MARSEILLE', 'TOULOUSE'];
    const streetName = streetNames[Math.floor(Math.random() * streetNames.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    return `${streetNumber} ${streetName} ${city}`;
  }
}
