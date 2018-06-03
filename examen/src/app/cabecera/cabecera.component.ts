import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MaestroService} from "../maestro.service";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {


  constructor(private conductor: MaestroService) { }

  ngOnInit() {
  }




}
