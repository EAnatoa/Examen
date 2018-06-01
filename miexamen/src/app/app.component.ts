import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  arregloPeliculasSecundarias = [

    {

      nombre: 'Black Panther',
      esEstreno: true,
      urlImagen: 'https://i.blogs.es/c7f5ce/blackpanther/450_1000.jpg'
    },
    {
      nombre: 'Maze Runner',
      esEstreno: true,
      urlImagen: 'https://images.penguinrandomhouse.com/cover/9781524714451'
    },
    {
      nombre: 'Star Wars',
      esEstreno: true,
      urlImagen: 'https://liberal.com.mx/wp-content/uploads/2017/12/eu_sws-8_last-jedi_hero_v9_r_ddc759e5.jpeg'
    },
    {
      nombre: 'Liga de la justicia',
      esEstreno: true,
      urlImagen: 'https://www.cronista.com/__export/1511228969706/sites/diarioelcronista/img/2017/11/21/cc211117w023f11.jpg_258117318.jpg'
    },


  ];


  arregloPeliculas = [
    {
      nombre: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Walton Goggins',
      esEstreno: false,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_FOh_xn19xgXf_Uq5OK3WWzAmoVoZLHCO2vjFd4LKaxijU59eg'
    },
    {
      nombre: 'Ready Player One',
      descripcion: 'Tye Sheridan, Olivia Cooke',
      esEstreno: false,
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

  arregloSeriesAgregadas= [
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJsBb_NUIwIeNOpp0Cg6OU1wUodUYWUIUl6ZeF-7n6VIhanKY'
    },
    {
      urlImagen: 'http://3.bp.blogspot.com/-FWrmHHe2zmA/VR1qMPnfEnI/AAAAAAAABSk/13JCfw9wQdw/s1600/lesrevenants.jpg'
    },
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81ckB4pLproW6GYbF-fdV2MQSK3dXJEIBZvlaGOILW9DwZDDV'
    },
    {
      urlImagen: 'https://www.qserie.com/files/uploads/5339.jpg'
    },
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ijz0Ebrn4MP17vnwWofIZ9xWI4YHBMnvbRvzxMgdLbYCd5pfmg'
    },
    {
      urlImagen: 'https://www.diariofemenino.com/uploads/actualidad/pablonarcos.jpg'
    },
    {
      urlImagen: 'https://www.diariofemenino.com/uploads/actualidad/pablonarcos.jpg'
    },
    {
      urlImagen: 'https://www.diariofemenino.com/uploads/actualidad/pablonarcos.jpg'
    },
  ];

  arregloUltimosAgredados= [
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUiO69b5b4u9fHGkPdX3Q_3I_pE3lT12eYofMJHkF-RpnTeZuCTg'
    },
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS64UGUyC8FTxaCZBG27VmO_pubeHRneK5WiMLErW5nWKkNCHf-'
    },
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGSqG6CJdH8XdSRSztEc9H1jPC_UZXMeyNoxcx_B8zGosxSBi_w'
    },
    {
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4fW_NocTUyGO6bqaDhFdQcEhz-uFXRaFgCq3btVvgRpq6z0k6A'
    },
    {
      urlImagen: 'https://image.tmdb.org/t/p/w200_and_h300_bestv2/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg'
    },
    {
      urlImagen: 'https://4.bp.blogspot.com/-L2EQyNHeeiA/WJQdePgrvQI/AAAAAAAABwI/YvVys9JsyGkQl1W6TLygGVCnthwm_iRygCLcB/s1600/Alias-JJ.jpg'
    },
    {
      urlImagen: 'https://image.tmdb.org/t/p/w200_and_h300_bestv2/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg'
    },
    {
      urlImagen: 'https://image.tmdb.org/t/p/w200_and_h300_bestv2/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg'
    },
  ];


  alertar(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }

