import { Component, OnInit } from '@angular/core';

import { DonacionesService } from "../../service/donaciones.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { IDonaciones } from 'src/app/models/donaciones';
import { Categoria_donacionService } from 'src/app/service/categoria_donacion.service';
import { ICat_donacion } from 'src/app/models/categoria_donacion';
import { IHtmlInputDonaciones } from "../../models/inputElement";
import { Router } from "@angular/router";


@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  listDonaciones = [];

  lista_categoria : ICat_donacion[];

  donaciones:IDonaciones[]=[];

  formDonaciones:FormGroup;

  p:number = 1;

  files:FileList; //Creamos una lista de archivos para almacenar las imagenes
  
  imagenes_url= [];

  ocultar_boton_archivos:any = 'display:block';

  constructor(private router:Router,private DonacionesService:DonacionesService, private fb: FormBuilder, private CategoriaServ:Categoria_donacionService) {

    this.formDonaciones = this.fb.group({

      id_donaciones:[null],
      descripcion:["",[Validators.required,Validators.minLength(2)]],
      contacto:["",[Validators.required,Validators.minLength(12)]],
      direccion:["",[Validators.required]],
      categoria_donaciones:[null,[Validators.required]],
      archivo:['']
    });

   }

  ngOnInit(): void {
    this.obtenerDonaciones();
    this.obtenerCategoria();

  }

  obtenerCategoria(){
    this.CategoriaServ.getCategoria_donacion().subscribe(
      resultado => {
      this.lista_categoria = resultado;
    },
      error => console.log(error)
    )

  }

  obtenerDonaciones()
  {
    this.DonacionesService.getDonaciones().subscribe(
      resultado => this.listDonaciones = resultado,
      error => console.log(error)
    )
  }

  guardarDonaciones()
  {

    if(this.formDonaciones.value.id_donaciones)
    {
      this.DonacionesService.updateDonaciones(this.formDonaciones.value).subscribe(
        respuesta=> {
          console.log(respuesta);
          this.obtenerDonaciones();
          this.formDonaciones.reset();
        },
        error => console.log(error)
      )
    }else{
    //console.log(this.formDonaciones.value);
    this.DonacionesService.saveDonaciones(this.formDonaciones.value,this.files).subscribe(
      resultado => {
        console.log(resultado);
        this.imagenes_url = [];
        this.formDonaciones.reset();
        this.obtenerDonaciones
      },
      error => console.log(error)
    );
    }


  }

  editarDonaciones(datosDonaciones:IDonaciones)
{ 

    this.ocultar_boton_archivos = 'display:none;'

    this.formDonaciones.setValue({
    id_donaciones:datosDonaciones.id_donaciones,
    descripcion:datosDonaciones.descripcion,
    contacto:datosDonaciones.contacto,
    direccion:datosDonaciones.direccion,
    categoria_donaciones:datosDonaciones.categoria_donaciones,
    archivo:'',
  });
}

  eliminarDonaciones(id_donaciones:number)
  {

    if(confirm("¿Está seguro que desea ejecutar esta acción?"))
    {
      this.DonacionesService.deleteDonaciones(id_donaciones).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerDonaciones();
        }, 
        error => console.log(error)
      )
    }

}

mostrarImagenSeleccionada(donaciones:IHtmlInputDonaciones)
{

  this.imagenes_url=[];

  this.files = donaciones.target.files; //A travez de un donacion target logra acceder a los archivos seleccionados
  
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
detalleDonaciones(id_donaciones:number) 
{
  
  //Para redirigirme a una ruta voy a tener que importarme un par de modulos. Para esto debe existir la ruta en el app-routing
  this.router.navigate(['/admin-detalle-donaciones',id_donaciones]);
  
}
vaciarForm()
{
  this.ocultar_boton_archivos = 'display:block;'
  this.formDonaciones.setValue({
  id_donaciones:null,
  descripcion:'',
  contacto:'',
  direccion:'',
  categoria_donaciones:'',
  archivo:''
});
}
}