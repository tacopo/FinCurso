import { Component } from '@angular/core';
import { Plato } from '../Plato';

@Component({
  selector: 'app-main-courses',
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.scss']
})
export class MainCoursesComponent {
  entrantes: Array<Plato>=[];
  carnes: Array<Plato>=[];
  pescados: Array<Plato>=[];
  cuchara: Array<Plato>=[];
  postres: Array<Plato>=[];
  vinos: Array<Plato>=[];


  constructor (){
    this.inicializarPlatos();
  }


  inicializarPlatos(){
    this.carnes=[
      {nombre:"Cochinillo (tostón) asado al horno de leña (receta de la Abuela Pepa)", precio:22.50},
      {nombre:"Solomillo de ternera al jugo de trufa y Río Viejo", precio:14.50},
      {nombre:"Cordero lechal asado al horno de leña", precio:17.90},
      {nombre:"Chuletillas de cordero lechal", precio:15.98},
      {nombre:"Chuletón ternera a la parrilla", precio:29.99},     
    ];
    this.pescados=[
      {nombre:"Lomo de bacalao con cebollas glaseadas y crema de pil-pil", precio:9.95},
      {nombre:"Atún rojo (Balfegó) a la plancha (poco hecho)", precio:12.25},
      {nombre:"Cocochas de merluza al pil-pil", precio:11.29},
      {nombre:"Lubina al vapor y ajada de aceite de oliva virgen", precio:9.99},
      {nombre:"Rodaballo a la donostiarra", precio:16.50},
    ];
    this.cuchara=[
      {nombre: "Judiones con chorizo y morcilla, con perdiz escabechada o con almejas", precio:7.95 },
      {nombre:"Lentejas de la Armuña con perdiz", precio:9.95},
      {nombre:"Arroz cremoso con cocochas de bacalao", precio:10.99},
      {nombre:"Boletus salteados con calabacin y huevo a baja temperatura", precio:8.99},
      {nombre:"Amanita Cesárea con pato y espinacas", precio:11.25},
      {nombre:"Hojaldre crujiente de manitas deshuesadas a la trufa(1 ud.)", precio:5.99},
      {nombre:"Champiñón Portobello y pepitoria de setas", precio:3.99},
    ];
    this.entrantes=[
      {nombre:"Jamón Ibérico de bellota",precio:1.19},
      {nombre:"Lomo ibérico de bellota",precio:1.73},
      {nombre:"Puerros rellenos de piñones asados ",precio:9.25},
      {nombre:"Mollejas de cordero encebolladas",precio:3.05},
      {nombre:"Alcachofas con jamón y tacos de foie fresco",precio:7.26},
      {nombre:"Lingote de foie (hecho en casa) a la mermelada de cebolla con pan de pasas y nueces",precio:9.99},
      {nombre:"Verduras a la plancha con jamón",precio:4.25},
      {nombre:"Empanadillas Cervantinas (carne, boletus, bacalao o bonito; 1 ud.)",precio:8.54},
      {nombre:"Ensalada de perdiz escabechada, pato y foie",precio:1.75},
      {nombre:"Ensalada de bogavante, aove y balsámico",precio:6.5},
    ];

    this.postres=[
      {nombre:"Flan de café irlandés y helado de Oreo", precio:5.99},
      {nombre:"Tarta de praliné de avellanas y helado de turrón", precio:5.99},
      {nombre:"Tarta de queso con nueces caramelizadas a la miel y helado de cereza", precio:5.99},
      {nombre:"Peras del señor Bracamonte al limón", precio:5.99},
      {nombre:"Tiramisú con helado de naranja", precio:5.99},
      {nombre:"Tocinillo de cielo, salsa de sidra y helado de dulce de leche", precio:5.99},
      {nombre:"Torrija de «brioche» y helado de crema", precio:5.99},
      {nombre:"Hojaldre fino de mango y helado de vainilla", precio:5.99},
      {nombre:"Cremoso de chocolate, salsa de caramelo y helado de ron con pasas", precio:5.99},
      {nombre:"Sopa fría de mandarina y helado de limón", precio:5.99},


    ];

    this.vinos=[
      {nombre:"Montecastro. D.O. Ribera del Duero", precio:5.99},
      {nombre:"Valdubón Diez. D.O. Ribera del Duero", precio:5.99},
      {nombre:"Pico Cuadro Viña el Chorro. D.O. Ribera del Duero.", precio:5.99},
      {nombre:"Cillar de Silos. D.O. Ribera del Duero.", precio:5.99},
      {nombre:"Valduero Una Cepa. D.O. Ribera del Duero.", precio:5.99},
      {nombre:"Parlaor Roble. D.O. Toro.", precio:5.99},
      {nombre:"Sirena del Maar Rosado. Encomienda de Cervera", precio:5.99},
      {nombre:"Cavas Hill Brut Reserva. D.O. Cava.", precio:5.99},
      

    ];
  }
}
