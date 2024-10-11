import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { SimulationsComponents } from './simulations/simulations.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScenarioTertiaireComponent } from './scenario-tertiaire/scenario-tertiaire.component';
import { ValidationHypothesesCalculComponent } from './validation-hypotheses-calcul/validation-hypotheses-calcul.component';
import { BuildingInfoComponent } from './building-info/building-info.component';
import { FaconnageLotComponent } from './faconnage-lot/faconnage-lot.component';
import { RegroupementLotTertiaireComponent } from './regroupement-lot-tertiaire/regroupement-lot-tertiaire.component';
import { RelocationsAffectationComponent } from './relocations-affectation/relocations-affectation.component';
import { RelocationsDefinitionComponent } from './relocations-definition/relocations-definition.component';

@NgModule({
  declarations: [
    AppComponent,
    SimulationsComponents,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ScenarioTertiaireComponent,
    ValidationHypothesesCalculComponent,
    BuildingInfoComponent,
    FaconnageLotComponent,
    RegroupementLotTertiaireComponent,
    RelocationsAffectationComponent,
    RelocationsDefinitionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ajoutez cette ligne
  bootstrap: [AppComponent]
})
export class AppModule { }
