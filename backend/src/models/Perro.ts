export interface ICanino
{
    id?:number;
    nombre:string;
    fecha_nacimiento:string;
    edad:number;
    sexo:number;
    tamaño:number;
    castrado:number;
    desparasitado:number;
	vacunado:number;
    descripcion:Text;
	estado_adopcion:number;
	fecha_adopcion:Date
}