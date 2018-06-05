import {Injectable} from "@angular/core";
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class MaestroService {

  constructor() {}
  private fuenteMensaje = new BehaviorSubject<any>([]);
  maestroArreglo: Maestro[]=[];
  private fuenteMensaje2 = new BehaviorSubject<any>([]);
  detallesArreglo: Detalles[]=[];

  mensajeActual = this.fuenteMensaje.asObservable();

  anadirMaestro( nombre, apellido, fecha, num, campeon, id){
  this.maestroArreglo.push(new Maestro(''+nombre, ''+apellido, ''+fecha, num, campeon, id));

    return this.maestroArreglo;

  }
  anadirDetalles(nombre,numero, nombreP, poderUno, poderDos, fechaC, nivel){
    this.detallesArreglo.push(new Detalles(nombre,numero, nombreP, poderUno, poderDos, fechaC, nivel));
    return this.detallesArreglo;
  }

 /* getEmployeesMedium() {
    return this.http.get('app/maestro.json')
      .toPromise()
      .then(res => <MaestroInterface[]> res.json().data)
      .then(data => { return data; });
  }
*/
  cambiarMensaje2(mensaje) {
    this.fuenteMensaje2.next(mensaje);
  }
  devolverArreglo(){

    return this.maestroArreglo;
  }
}


export class Maestro {

  constructor( public nombre: string,
  public apellido: string,
  public fechaNacmiento: string,
  public numMedallas: number,
  public campeon: boolean,
  public id:number) {

  }



}


export class Detalles {
  constructor(public nombre:string,
              public numero: string,
              public nombreP: string,
              public poderUno: string,
              public poderDos: string,
              public fechaC: string,
              public nivel: number){

  }


}
