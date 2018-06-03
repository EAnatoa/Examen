import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MaestroService} from "../maestro.service";


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit , OnChanges{
botonCargar:string;

  constructor(public maestro: MaestroService) { }
  @Input() numeroPokemon:number;
  @Input() nombrePokemon: string;
  @Input() poderEspecialUno: string;
  @Input() poderEspecialDos: string;
  @Input() fechaCaptura:string;
  @Input() nivel: number;
  @Input() entrenadorId:number;

  detalles:string;
  ngOnInit() {
    //this.detalles= this.colocarValor();
  }
ngOnChanges(seActualizo){

}

colocarDetalles(textoNumeroPokemon,textoNombrePokemon, textoPoderUno, textoPoderDos, textoFechaCaptura, textoNivel){
  this.maestro.anadirCondutores(textoNumeroPokemon,textoNombrePokemon, textoPoderUno, textoPoderDos, textoFechaCaptura, textoNivel)
  this.detalles=this.colocarValor();
}
colocarValor(){
   return this.numeroPokemon +'' + this.nombrePokemon + '' +this.poderEspecialUno + ' '+this.poderEspecialDos+ ' '+this.fechaCaptura+ ' '+this.nivel;
}


}
