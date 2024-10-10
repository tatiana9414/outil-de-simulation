import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SimulationsComponents } from './simulations/simulations.component';
import { ScenarioTertiaireComponent } from './scenario-tertiaire/scenario-tertiaire.component';
import { ValidationHypothesesCalculComponent } from './validation-hypotheses-calcul/validation-hypotheses-calcul.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'simulation', component: SimulationsComponents },
  { path: 'CreerSTertiare', component: ScenarioTertiaireComponent },
  { path: 'validation-hypotheses-calcul', component: ValidationHypothesesCalculComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
