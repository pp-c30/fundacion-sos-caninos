import { createPool } from "promise-mysql";

export async function con()
{
    //Ejecuto la conexion a la base de datos
    const con = await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fundacion_sos'
    })

    return con;
}

