import { Component, OnInit } from '@angular/core';

import { CaninoService } from "../../service/canino.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { ICanino } from 'src/app/models/canino';
import { IHtmlInputCanine } from "../../models/inputElement";

import { Router } from "@angular/router";

@Component({
  selector: 'app-canino',
  templateUrl: './canino.component.html',
  styleUrls: ['./canino.component.css']
})
export class CaninoComponent implements OnInit {

  canino:ICanino[]=[];

  formCanino:FormGroup;

  files:FileList; //Creamos una lista de archivos para almacenar las imagenes
  imagenes_url= [];

  ocultar_boton_archivos:any = 'display:block';

  constructor(private router:Router,private fb:FormBuilder,private serviceCanino:CaninoService) { 

    this.formCanino = this.fb.group({

        id_canino:[null],
        nombre:['',[Validators.required]],
        fecha_nacimiento:['',[Validators.required]],
        edad:['',[Validators.required]],
        sexo:['',[Validators.required]],
        tamanio:['',[Validators.required]],
        castrado:['',[Validators.required]],
        desparasitado:['',[Validators.required]],
        vacunado:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        estado_adopcion:['',[Validators.required]],
        fecha_adopcion:['',[Validators.required]],
        archivo:['',[Validators.required]]
    });

  }

  ngOnInit(): void {
    this.listaCanino();
  }
  listaCanino()
  {
    this.serviceCanino.getCanino().subscribe(
      resultado => {
        this.canino = resultado;
      }
    )
  }

  guardarCanino()
  {

    if (this.formCanino.value.id_canino)
    {
      this.serviceCanino.updateCanino(this.formCanino.value).subscribe(
        resultado => {
          this.formCanino.reset();
          this.listaCanino();
        }
      )
    }
    else 
    { //Envio los archivos y los datos del formulario
    this.serviceCanino.saveCanino(this.formCanino.value,this.files).subscribe(
      resultado => {
        console.log(resultado);
        this.imagenes_url = [];
        this.formCanino.reset();
        this.listaCanino
      },
      error => console.log(error)
    );
    }

  }


  mostrarImagenSeleccionada(canino:IHtmlInputCanine)
  {

    this.imagenes_url=[];

    this.files = canino.target.files; //A travez de un evento target logra acceder a los archivos seleccionados
    
    if (this.files) 
    {
      for (let index = 0; index < this.files.length; index++) // el for nos va a recorrer cada uno de los archivos
      {        
          const reader = new FileReader ();
          //Se hace lectura de los archivos
         reader.readAsDataURL(this.files[index])
         //Cargamos esa lectura-Obtenemos la URL (ubicacion) de la img y podemos mostrarlas
         reader.onload = () => 
         {
          //guardamos el resultado de la lectura de imagenes en el arreglo imagenes_url
          this.imagenes_url.push(reader.result)
         }   
          
      }
    }
  }

//metodo encargado de mostrarme el detalle sobre el evento REDIRECCION
detalleCanino(id_canino:number) 
{
  
  //Para redirigirme a una ruta voy a tener que importarme un par de modulos. Para esto debe existir la ruta en el app-routing
  this.router.navigate(['/admin-detalle-canino',id_canino]);
  
}

eliminarCanino(id_canino:number)
{
  if(confirm('Esta seguro de llevar a cabo esta accion?'))
  {
    this.serviceCanino.deleteCanino(id_canino).subscribe (
      resultado => {
        console.log(resultado);
        this.listaCanino();
      }
    );
  }
}
//llenar el formulario
editarCanino(datosCanino:ICanino)
{ 

    this.ocultar_boton_archivos = 'display:none;'

    this.formCanino.setValue({
    id_canino:datosCanino.id_canino,
    nombre:datosCanino.nombre,
    fecha_nacimiento:datosCanino.fecha_nacimiento,
    edad:datosCanino.edad,
    sexo:datosCanino.sexo,
    tamanio:datosCanino.tamanio,
    castrado:datosCanino.castrado,
    desparasitado:datosCanino.desparasitado,
    vacunado:datosCanino.vacunado,
    descripcion:datosCanino.descripcion,
    estado_adopcion:datosCanino.estado_adopcion,
    fecha_adopcion:datosCanino.fecha_adopcion,
    archivo:''
  });
}
vaciarForm()
{
  this.ocultar_boton_archivos = 'display:block;'
  this.formCanino.setValue({
  id_canino:null,
  nombre:'',
  fecha_nacimiento:'',
  edad:'',
  sexo:'',
  tamanio:'',
  castrado:'',
  desparasitado:'',
  vacunado:'',
  descripcion:'',
  estado_adopcion:'',
  fecha_adopcion:'',
  archivo:''
});
}

}
