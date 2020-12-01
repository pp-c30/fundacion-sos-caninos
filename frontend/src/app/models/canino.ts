export interface ICanino
{
    id_canino?:number;
    nombre:string;
    fecha_nacimiento:string;
    edad:number;
    sexo:number;
    tamanio:number;
    castrado:number;
    desparasitado:number;
	vacunado:number;
    descripcion:Text;
	estado_adopcion:number;
	fecha_adopcion:Date
}