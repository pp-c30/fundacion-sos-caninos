export interface ICanino
{
    id?:number;
    nombre:string;
    fecha_nacimiento:Date;
    edad:number;
    sexo:number;
    tamaño:number;
    castrado:number;
    desparasitado:number;
	vacunado:number;
    descripcion:Text;
    imagen:Text;
	estado_adopcion:string;
	fecha_adopcion:Date
}