import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MaestroService} from "../maestro.service";


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit , OnChanges{
botonCargar:string;

  constructor(public maestro: MaestroService ) { }
  @Input() numeroPokemon:number;
  @Input() nombrePokemon: string;
  @Input() poderEspecialUno: string;
  @Input() poderEspecialDos: string;
  @Input() fechaCaptura:string;
  @Input() nivel: number;
  @Input() entrenadorId:number;
  actorCard = [];
  detalles:string;

  mensaje = [];

  ngOnInit() {
    //this.detalles= this.colocarValor();
    this.maestro.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
  }
ngOnChanges(seActualizo){

}

  limpiar1() {
    this.numeroPokemon=0;
    this.nombrePokemon="";
    this.poderEspecialUno="";
    this.poderEspecialDos="";
    this.fechaCaptura="";
    this.nivel=0;

  }

colocarDetalles(textoNumeroPokemon,textoNombrePokemon, textoPoderUno, textoPoderDos, textoFechaCaptura, textoNivel){
  //this.maestro.anadirMaestro(textoNumeroPokemon,textoNombrePokemon, textoPoderUno, textoPoderDos, textoFechaCaptura, textoNivel)
  this.detalles=this.colocarValor();
}
colocarValor(){
   return this.numeroPokemon +'' + this.nombrePokemon + '' +this.poderEspecialUno + ' '+this.poderEspecialDos+ ' '+this.fechaCaptura+ ' '+this.nivel;
}


}
