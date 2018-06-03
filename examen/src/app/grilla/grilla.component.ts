import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {MaestroService} from "../maestro.service";

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit, OnChanges{
@Input() nombreDescripcion:string;
@Input() apellidoDescripcion:string;
  @Output() dioClickEnEstado: EventEmitter<boolean> = new EventEmitter();
  @Input() nombres:string;
  @Input() apellidos: string;
  @Input() fechaNacimiento: string;
  @Input() numeroMedallas: number;
  @Input() campeonActual: boolean;

  @Input() urlImagen:string;
  @Input() valorBotonCrear='';
  contador:number;
  card:string;

  constructor(private maestro:MaestroService) {

  }



  ngOnInit() {

  }

  ngOnChanges(propiedadesActualizadas) {
    console.log('Algo', propiedadesActualizadas);


  }

  crearMaestro(nombresForm, apellidosForm, fechaForm, numeroAutosForm, licenciaForm){
    this.maestro.anadirCondutores(nombresForm, apellidosForm, fechaForm, numeroAutosForm, licenciaForm, 1);

    console.log(this.maestro.conductoresArreglo);
    this.card=this.colocarValor()
  }
  limpiar() {
    this.nombres="";
    this.apellidos="";
    this.numeroMedallas=0;
    this.fechaNacimiento="";
    this.campeonActual=false;

  }
  hizoClickEnEstado() {
    this.dioClickEnEstado.emit(true);
  }
  colocarValor(){
    return this.nombres+''+ this.apellidos+ ''+ this.numeroMedallas + ' ' +this.fechaNacimiento +''+ this.campeonActual;
  }
}
