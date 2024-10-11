import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SimulationsComponents } from './simulations/simulations.component';
import { ScenarioTertiaireComponent } from './scenario-tertiaire/scenario-tertiaire.component';
import { ValidationHypothesesCalculComponent } from './validation-hypotheses-calcul/validation-hypotheses-calcul.component';
import { RelocationsAffectationComponent } from './relocations-affectation/relocations-affectation.component';
import { FaconnageLotComponent } from './faconnage-lot/faconnage-lot.component';
import { RegroupementLotTertiaireComponent } from './regroupement-lot-tertiaire/regroupement-lot-tertiaire.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'simulation', component: SimulationsComponents },
  { path: 'CreerSTertiare', component: ScenarioTertiaireComponent },
  { path: 'FaconnerLot', component: FaconnageLotComponent },
  { path: 'validation-hypotheses-calcul', component: ValidationHypothesesCalculComponent },
  {path:'regroupement-lot-tertiaire', component:RegroupementLotTertiaireComponent},
  { path: 'relocations-affectation', component: RelocationsAffectationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
