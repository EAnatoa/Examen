import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})

export class ExamenComponent implements
  OnInit, OnChanges {

  @Input() nombreEntrenador: string;
  @Input()  apellidoEntrenado: string;
  @Input()  fechaNacimientoEntrenador: string;
  @Input() numeroMedallasEntrenador: number;
  @Input() campeonActualEntrenador: boolean;


  @Output() dioClickEnEstado: EventEmitter<boolean> = new EventEmitter();


  textoEstreno: string;
  claseEstreno: string;

  constructor() {
  }

  ngOnInit() {
    console.log("Inicio y seteo color",this.nombreEntrenador);

  }

  ngOnChanges(propiedadesActualizadas){
    console.log('Algo',propiedadesActualizadas);
    if (propiedadesActualizadas.esEstreno){

    }
  }


  hizoClickEnEstado(){
    this.dioClickEnEstado.emit(true);
  }
}
