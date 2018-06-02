
import { ExamenComponent } from './examen/examen.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {CarouselModule} from 'primeng/carousel';
import {MatInputModule} from '@angular/material/input';
import {CardModule} from 'primeng/card';
import {MatBadgeModule} from '@angular/material/badge';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [
    AppComponent,

    ExamenComponent
  ], // Definir todos los componentes a usarse
     // Definin todos los pipes -> transforman datos
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CarouselModule,
    MatInputModule,
    MatBadgeModule,
    CardModule,
    InputTextModule


  ], //  Definimos todos los Modulos
  providers: [], // Los Servicios
  bootstrap: [AppComponent] // Componente Principal
})
// @ALGO() // Decorator

export class AppModule {
}
