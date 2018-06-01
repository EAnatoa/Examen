import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})

export class ExamenComponent implements
  OnInit, OnChanges {

  @Input() urlImagen: string;
  @Input() descripcionImagen: string;
  @Input() nombrePelicula: string;
  @Input() descripcionPelicula: string;
  @Input() esEstreno: boolean;


  @Output() dioClickEnEstado: EventEmitter<boolean> = new EventEmitter();


  textoEstreno: string;
  claseEstreno: string;

  constructor() {
  }

  ngOnInit() {
    console.log("Inicio y seteo color",this.nombrePelicula);
    this.setearColoryClase();
  }

  ngOnChanges(propiedadesActualizadas){
    console.log('Algo',propiedadesActualizadas);
    if (propiedadesActualizadas.esEstreno){
      this.setearColoryClase();
    }
  }

  setearColoryClase(){
    if (this.esEstreno) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else {
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
    }
  }

  hizoClickEnEstado(){
    this.dioClickEnEstado.emit(true);
  }
}
