export class Plato{
    nombre: String;
    precio: number;
    descripcion?: string;

    constructor(nombre: string, precio:number, descripcion?:string, ){
        this.nombre=nombre;
        this.precio=precio;
        this.descripcion=descripcion;

    }
    
    
}