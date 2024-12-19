//rutas de nuestro proyecto
//importacion
import {NextFunction, Request, Response, Router} from "express"
import { RegistrerController } from "./controller";
//nuestra constate de tipo router
const routes=Router();
//registro de usuario
routes.post('/register',async(req: Request, res:Response, next:NextFunction)=>{
    try{
        const response= await RegistrerController(req) //aki se esta llamando al registrecontoller que esta en el archivo controler.ts
        res.status(201).json(response)//codigo de repuesta cuando se crea algo es el 201
    }catch(error){
        throw error
    }
})

export default routes;
