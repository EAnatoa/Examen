import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Maestro, MaestroService} from "../maestro.service";

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
  arregloNuevo: Maestro[];

  constructor(private maestro:MaestroService) {

  }

  ngOnInit() {
   // this.arregloNuevo= this.maestro.devolverArreglo();
  }

  ngOnChanges(propiedadesActualizadas) {
    console.log('Algo', propiedadesActualizadas);


  }

  crearMaestro(nombresForm, apellidosForm, fechaForm, numeroMedallasForm, campeonActualForm){
   this.maestro.anadirMaestro(nombresForm, apellidosForm, fechaForm, numeroMedallasForm, campeonActualForm, 1);

    console.log(this.maestro.maestroArreglo);

    this.card=this.colocarValor();
    this.arregloNuevo = this.maestro.devolverArreglo();
    this.clickEnBoton();
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

    return this.nombres+''+ this.apellidos+ '';
      //+ this.numeroMedallas + ' ' +this.fechaNacimiento +''+ this.campeonActual;
  }

  clickEnBoton(){
    return this.nombres;
  }
}
