import {Component, Input} from '@angular/core';
import {MaestroService} from "./maestro.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(condutor: MaestroService){
}

  arregloMaestro=[
    {
      nombres: 'Arturo Perez',
      apellidos:'',
      fechaNacimiento:'',
      numeroMedallas:'',
      campeonActual:'',
      detalles: [
        {
          chasis: 122,
          nombreMarca: 'Honda',
          colorUno: 'Rojo',
          colorDos: 'Verde',
          nombreModelo: 'X199',
          anio: 2015,
          idConductor: 1
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


