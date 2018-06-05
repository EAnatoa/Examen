import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Maestro, MaestroService} from "../maestro.service";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
/*
  constructor(private maestro: MaestroService) { }

  ngOnInit() {
  }

}
*/
  arregloCarrusel = [];

  constructor(private data:MaestroService ) { }

  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.arregloCarrusel = mensaje);
  }

}
