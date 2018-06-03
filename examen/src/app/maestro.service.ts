import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {MaestroInterface} from "./tabla/maestro.interface";

@Injectable()
export class MaestroService {

  constructor(private http: Http) {}

  conductoresArreglo: Maestro[]=[];
  detallesArreglo: Detalles[]=[];
  anadirCondutores( nombre, apellido, fecha, num, licencia, id){
    this.conductoresArreglo.push(new Maestro(''+nombre, ''+apellido, ''+fecha, num, licencia, id));
    return this.conductoresArreglo;
  }
  anadirDetalles(nombre, chasis, marca, colorUno, colorDos, modelo,anio){
    this.detallesArreglo.push(new Detalles(nombre, chasis,marca, colorUno, colorDos, modelo, anio));
    return this.detallesArreglo;
  }

  getEmployeesMedium() {
    return this.http.get('app/conductores.json')
      .toPromise()
      .then(res => <MaestroInterface[]> res.json().data)
      .then(data => { return data; });
  }
}
export class Maestro {

  constructor( public nombre: string,
  public apellido: string,
  public fechaNacmiento: string,
  public numAutos: number,
  public licencia: boolean,
  public id:number) {

  }
}
export class Detalles {
  constructor(public nombre:string,
              public chasis: string,
              public marca: string,
              public colorUno: string,
              public colorDos: string,
              public modelo: string,
              public anio: number){

  }
}
