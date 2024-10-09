import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SimulationsComponents } from './simulations/simulations.component';


const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'simulation', component:SimulationsComponents},
{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'**',redirectTo:'/login'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
