import {Component, Input} from '@angular/core';
import {Maestro, MaestroService} from "./maestro.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  maestroArreglo: Maestro[]=[];
constructor(maestro: MaestroService){
}

  arregloMaestro=[
    {
      nombres: '      ',
      apellidos:'',
      fechaNacimiento:'',
      numeroMedallas:'',
      campeonActual:'',
      detalles: [
        {
          numeroPokemon: 122,
          nombrePokemon: 'Pikachu',
          poderEspecialUno: 'Electricidad',
          poderEspecialDos: '',
          fechaCaptura: '2017/04/09',
          nivel: 5,
          entrenadorId: 1
        }
      ]
    },
];

  alertar(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }

  llenarDescripcion(){

  }

}


