import { Component, OnInit } from '@angular/core';
import {MaestroService} from "../maestro.service";
import {MaestroInterface} from "./maestro.interface";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
maestroInterface:MaestroInterface[];
  constructor(private maesstroSevice: MaestroService) { }

  ngOnInit() {
    this.maestroInterface=[
      {
        nombres:'Arturo',
        apellidos:'Perez',
        fechaNacimiento:'09-09-1990',
        numeroMedallas:1,
        campeonActual:'No',
      },
      {
        nombres:'Arturo',
        apellidos:'Perez',
        fechaNacimiento:'09-09-1990',
        numeroMedallas:1,
        campeonActual:'No',
      },
      {
        nombres:'Arturo',
        apellidos:'Perez',
        fechaNacimiento:'09-09-1990',
        numeroMedallas:1,
        campeonActual:'No',
      },
      {
        nombres:'Arturo',
        apellidos:'Perez',
        fechaNacimiento:'09-09-1990',
        numeroMedallas:1,
        campeonActual:'No',
      }
    ]
  }

}
