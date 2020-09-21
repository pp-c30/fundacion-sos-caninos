import { server  } from './server';

//Creo la funcion
function principal()
{
    //se crea la instancia de la clase
    const servidor = new server();
    servidor.listen(); //Ejecuto el metodo listen
}

//Invoco la funcion principal()
principal();