import { Component, OnInit } from '@angular/core';
import { IEvento } from 'src/app/models/evento';

import { EventoService } from "../../service/evento.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { IHtmlInputEvent } from "../../models/inputElement";

import { Router } from "@angular/router";

@Component({
  selector: 'app-admind-evento',
  templateUrl: './admind-evento.component.html',
  styleUrls: ['./admind-evento.component.css']
})
export class AdmindEventoComponent implements OnInit {

  evento:IEvento[]=[];

  formEvento:FormGroup;

  files:FileList; //Creamos una lista de archivos para almacenar las imagenes
  imagenes_url= [];

  ocultar_boton_archivos:any = 'display:block';

  constructor(private router:Router,private fb:FormBuilder,private serviceEvento:EventoService) { 

    this.formEvento = this.fb.group({

        id_evento:[null],
        titulo:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        contacto:['',[Validators.required]],
        ubicacion:['',[Validators.required]],
        fecha_hora:['',[Validators.required]],
        archivo:['',[Validators.required]]
    });

  }

  ngOnInit(): void {
    this.listaEventos();
  }
  listaEventos()
  {
    this.serviceEvento.getEvento().subscribe(
      resultado => {
        this.evento = resultado;
      }
    )
  }

  guardarEvento()
  {

    if (this.formEvento.value.id_evento)
    {
      this.serviceEvento.updateEvento(this.formEvento.value).subscribe(
        resultado =>{
          this.formEvento.reset();
          this.listaEventos();
        }
      )
    }
    else {

       //Envio los archivos y los datos del formulario
    this.serviceEvento.saveEvento(this.formEvento.value,this.files).subscribe(
      resultado => {
        console.log(resultado);
        this.imagenes_url = [];
        this.formEvento.reset();
        this.listaEventos();
      },
      error => console.log(error)
    );
    }

  }

  mostrarImagenSeleccionada(evento:IHtmlInputEvent)
  {

    this.imagenes_url=[];

    this.files = evento.target.files; //A travez de un evento target logra acceder a los archivos seleccionados
    
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
detalleEvento(id_evento:number) 
{
  
  //Para redirigirme a una ruta voy a tener que importarme un par de modulos. Para esto debe existir la ruta en el app-routing
  this.router.navigate(['/admin-detalle-evento',id_evento]);
  
}

eliminarEvento(id_evento:number)
{
  if(confirm('Esta seguro de llevar a cabo esta accion?'))
  {
    this.serviceEvento.deleteEvento(id_evento).subscribe (
      resultado => {
        console.log(resultado);
        this.listaEventos();
      }
    );
  }
}
//llenar el formulario

editarEventolaSecuela(evento:IEvento)
{
  this.formEvento.setValue(evento);
}

editarEvento(datosEvento:IEvento)
{

    this.ocultar_boton_archivos = 'display:none;'
    this.formEvento.setValue({
    id_evento:datosEvento.id_evento,
    titulo:datosEvento.titulo,
    descripcion:datosEvento.descripcion,
    contacto:datosEvento.contacto,
    ubicacion:datosEvento.ubicacion,
    fecha_hora:datosEvento.fecha_hora,
    archivo:''
  });
}
vaciarForm()
{
  this.ocultar_boton_archivos = 'display:block;'
  this.formEvento.setValue({
  id_evento:null,
  nombre_evento:'',
  descripcion:'',
  contacto:'',
  ubicacion:'',
  fecha_hora:'',
  archivo:''
});
}

}
