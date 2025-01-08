//gestiona la conexion con las entidades(tablas) de la BD
//suelen tener la estructura de una clase, esta orientado aun objeto d ela vida real
///importamos la interfaz useri
import { UserI } from "../../interface/Auth.interface";
import fs from 'fs/promises'; //libreria para leer archivos
import path from 'path';//libreria para leer rutas del proyecto

//const users: UserI[]=[];//crea una constante en esete caso users
const dataFilePath=path.join('src','data','user.json');
export default class AuthRepository{//importando una clase
     //leer un archivo
    async readUsers():  Promise<UserI[] | Array<UserI>>{
        try {
            const data = await fs.readFile(dataFilePath,'utf-8')
            return JSON.parse(data)
        } catch (error) {
            return []
        }
    }
    //sobreescribir un user
    async writeUsers(users: UserI[]): Promise<void>{
        await fs.writeFile(dataFilePath,JSON.stringify(users, null,2),'utf-8')
    }

    //crear los metodos orientadas a esta clase 
    async createUsername(user: UserI): Promise<UserI> { //crear usuario
        const users =await this.readUsers();
        users.push(user);
        await this.writeUsers(users);
        return user;
    }   
    //crea metodo para verificar si existe usuario
    async findByUsername(username: string): Promise<UserI | undefined> { //busca si existe un usuario
        const users =await this.readUsers();
        return users.find((user) =>user.username=== username
         // COMPARACION DEBIL ==  COMPARA DOS VALORES SIN TOMAR EN CUENTA EL TIPO DE DATO ES DECIR UN STRING CONTRO UN NUEMRO Y VA SER VERDADERO
         //COMPARACION FUERTE ==  AKI SI TOMA EN CUENTA EL TIPO DE DATO
        );
     }       
}