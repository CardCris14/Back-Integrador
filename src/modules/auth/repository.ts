//gestiona la conexion con las entidades(tablas) de la BD
//suelen tener la estructura de una clase, esta orientado aun objeto d ela vida real
///importamos la interfaz useri
import { UserI } from "../../interface/Auth.interface"
const users: UserI[]=[]//crea una constante en esete caso users
export default class AuthRepository{//importando una clase
     
    //crear los metodos orientadas a esta clase 
    async createUsername(user: UserI): Promise<UserI> { //crear usuario
        users.push(user);
        return user;
    }   
    //crea metodo para verificar si existe usuario
    async findByUsername(username: string): Promise<UserI | undefined> { //busca si existe un usuario
        return users.find((user) =>user.username=== username
         // COMPARACION DEBIL ==  COMPARA DOS VALORES SIN TOMAR EN CUENTA EL TIPO DE DATO ES DECIR UN STRING CONTRO UN NUEMRO Y VA SER VERDADERO
         //COMPARACION FUERTE ==  AKI SI TOMA EN CUENTA EL TIPO DE DATO
        );
     }       
}