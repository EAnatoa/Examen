import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  arregloPrimeraParte = [
    {
      nombre: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Walton Goggins',
      esEstreno: false,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_FOh_xn19xgXf_Uq5OK3WWzAmoVoZLHCO2vjFd4LKaxijU59eg'
    },
    {
      nombre: 'Ready Player One',
      descripcion: 'Tye Sheridan, Olivia Cooke',
      esEstreno: 'Maestro Pokemon',
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFQprASMSiRnRHYgQl5sHoGr8GiMI9IB2XVIQP_tmD61KFgUY'
    },

  ];

  arregloPeliculasAgregadas = [
    {

      urlImagen: 'https://ennetflix.mx/media/15/1-night_80171694.jpg'
    },
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEXd8xdFWRdRlTNf8XVAguJCe3z-I3DGdzDWdxLlw6FC5DhL9W'
    },
    {
      urlImagen: 'https://www.revistaprivilege.net/wp-content/uploads/2018/03/Rampage-2018-160.jpg'
    },
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthXKWtn8WTvBrfSwUfosWyy4R8tjOS71Ydug2K1gN_jGQFUDZWg'
    },
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbe2ZSsU0mxFddqd9cyvbA-dndhsBr0-KxDmnLItQyi_hjPAi0'
    },
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQzTdTpjaW1sDzA-GSap1jhHK7ZAAtWZiwfHhUts8nXpz7aO9kg'
    },
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQzTdTpjaW1sDzA-GSap1jhHK7ZAAtWZiwfHhUts8nXpz7aO9kg'
    },
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQzTdTpjaW1sDzA-GSap1jhHK7ZAAtWZiwfHhUts8nXpz7aO9kg'
    },

  ];



  alertar(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }

}
