import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";


const storage = multer.diskStorage({
    //destino de la img 
    destination:'uploads',
    //configurar el nombre de la img y se mantiene la extencion 
    filename:(req,file,cb) => {
        cb(null,uuidv4()+path.extname(file.originalname));
    }



});
//exportamos la libreria multer agregando el destino y el nombre de las imagenes 
export default multer({storage});