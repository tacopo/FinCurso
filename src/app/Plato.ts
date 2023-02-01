import { Rutas } from "./Rutas";
export class Plato{
    nombre: String;
    imagen?: Array<Rutas>;
    precio: number;
    descripcion?: string;

    constructor(nombre: string, precio:number, descripcion?:string, imagen?: Array<Rutas>){
        this.nombre=nombre;
        this.imagen=imagen;
        this.precio=precio;
        this.descripcion=descripcion;

    }
    
    
}