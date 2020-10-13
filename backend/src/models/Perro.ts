export interface ICanino
{
    id?:number;
    nombre:string;
    fecha_nacimiento:Date;
    edad:number;
    sexo:string;
    tamaño:boolean;
    castrado:boolean;
    desparasitado:boolean;
	vacunado:boolean;
	descripcion:Text;
	estado_adopcion:string;
	fecha_adopcion:Date
}