//procesamiento de peticiones que llegan desde nuestra consulta

import { Request } from "express"; //estas lineas se crean automaticamnete 
import { UserI } from '../../interface/Auth.interface';
import { AuthServices } from "./services";

export const RegistrerController = async (req:Request) =>{
    try {
        const {username,password}:  UserI= req.body  //desustructuracion en acceder a las propiedades de un objeto esto se hizo en lo que esta en las llaves
       const user= await new AuthServices().registerService(username,password)
       return {'message':'Usuario','usuario':user}

    } catch (error) {
        throw error
    }
}