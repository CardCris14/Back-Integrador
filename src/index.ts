import express, { NextFunction ,Request,Response} from 'express';
import { PORT } from './environments/env';
import authRoutes from "./modules/auth/routes"; //importar ruta de nuestro proyecto

const app = express();

app.use(express.json());//configuracion de json para configuracion del proyecto

const prefix: string="/api";
//primer metodo http el get recibe 2 parametros
// https://localhost:3000/api/auth
/*app.get(
    `${prefix}/auth`,
     async ( req: Request,res: Response,next: NextFunction)=>{
    res.send("Hola mundo");
}
);
*/
app.use(`${prefix}/auth`,authRoutes);//definicion de rutas por modulos
const port: number = Number(PORT);
app.listen(port, () => {
    console.log('El servidor esta leantado en el puerto:',port);
});