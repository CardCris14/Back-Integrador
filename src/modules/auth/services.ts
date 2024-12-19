import AuthRepository from "./repository"

//implementacion de la logica de  negocio
export class  AuthServices{ //exportamos la clase
    //inyeccion de dependencia es instanciar una clase dentro de otra clase para que esta herede susu metodos y propiedades en este caso en nuestra clase AuthServices vamos a heredar lo de la case AuthRepository que esta en el archivo repository.ts
    private readonly _authRepository: AuthRepository //definir constante donde se va a instaciarlo
    constructor(){
        this._authRepository= new AuthRepository()
    }
    //crear metodo para registrar usuario
    async registerService(username: string, password: string){
        const existingUser=await this._authRepository.findByUsername(username);///esta llamando al metodo de la clase que heredo apara validar si existe o no el suaurio
        if(existingUser){
            throw new Error('El usuario ya existe')
        }
        const newUser= await this._authRepository.createUsername({username,password});///esta llamando al metodo de la clase que heredo apara crear el suaurio
        return newUser;
    }
}