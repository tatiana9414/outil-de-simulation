import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule } from '@angular/material/table';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { SimulationsComponents } from './simulations/simulations.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScenarioTertiaireComponent } from './scenario-tertiaire/scenario-tertiaire.component';

@NgModule({
  declarations: [
  
    SimulationsComponents,
        LoginComponent,
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ScenarioTertiaireComponent
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
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
